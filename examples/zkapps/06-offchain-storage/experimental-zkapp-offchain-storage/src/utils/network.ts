export async function retryOperation(
  operation: Function,
  interval = 10000,
  maxRetries = 200
) {
  let attempts = 0;
  let success = false;

  while (attempts < maxRetries && !success) {
    try {
      await operation();
      success = true; // If the operation succeeds, set success to true
    } catch (error) {
      attempts += 1;
      console.log(`Attempt ${attempts} failed. Retrying in ${interval}ms...`);
      if (attempts < maxRetries) {
        // Wait for the specified interval before the next attempt
        await new Promise((resolve) => setTimeout(resolve, interval));
      } else {
        console.error('Max retry attempts reached:', error);
      }
    }
  }

  if (!success) {
    // Handle the failure after all retry attempts here
    console.error('Operation failed after all retries.');
    throw new Error('Operation failed after all retries.');
  }
}
