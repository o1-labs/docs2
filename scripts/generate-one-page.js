/**
 * This script combines all markdown files (.md and .mdx) from the specified input
 * directories and their subdirectories into a single .mdx file. It is intended
 * to be run in a CI environment.

 * To modify the input directories, update the `inputDirectories` array.
 * To exclude certain directories, update the `excludedDirs` array.
 */

const fs = require('fs');
const path = require('path');

// Define the base directory for the markdown files
const docsDirectory = `${process.cwd()}/docs`;
// List of directories containing markdown files to be combined
const inputDirectories = ['zkapps'];
// List of directories to be excluded from the combining process
const excludedDirs = ['snarkyjs-reference'];
// Output file path for the combined markdown file
const outputFilePath = prependDocsDir('one-page.mdx');

// Check if a directory is in the list of excluded directories
function isExcludedDir(dir) {
  return excludedDirs.includes(dir);
}

// Prepend the base directory to the provided directory name
function prependDocsDir(dir) {
  return path.join(docsDirectory, dir);
}

/**
 * The combineFiles function is called recursively to traverse the input directories
 * and their subdirectories. It reads the markdown files, appends their content to
 * the output file, and excludes the specified directories during the traversal.
 *
 * @param {string} inputDir - The input directory path
 * @param {string} outputFile - The output file path for the combined markdown content
 */
function combineFiles(inputDir, outputFile) {
  console.log(inputDir);
  fs.readdir(inputDir, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error('Error reading directory: ', err);
      return;
    }
    entries.forEach((entry) => {
      const entryPath = path.join(inputDir, entry.name);
      if (
        entry.isFile() &&
        (entry.name.endsWith('.md') || entry.name.endsWith('mdx'))
      ) {
        const fileContent = fs.readFileSync(entryPath, 'utf8');
        fs.appendFileSync(outputFile, fileContent + '\n\n');
      } else if (entry.isDirectory() && !isExcludedDir(entry.name)) {
        combineFiles(entryPath, outputFile);
      }
    });
  });
}

// Clear the output file, if it exists
fs.writeFileSync(outputFilePath, '');

// Iterate over each input directory and call the combineFiles function to combine the markdown files
inputDirectories.forEach((inputDir) => {
  let inputDirPath = prependDocsDir(inputDir);
  combineFiles(inputDirPath, outputFilePath);
});
