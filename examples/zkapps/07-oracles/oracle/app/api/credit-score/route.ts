import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// @ts-ignore
import Client from 'mina-signer';
const client = new Client({ network: process.env.NETWORK_KIND ?? 'testnet' });

// Implement toJSON for BigInt so we can include values in response
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

function getSignedCreditScore(userId: number) {
  // The private key of our account. When running locally the hardcoded key will
  // be used. In production the key will be loaded from a Vercel environment
  // variable.
  let privateKey =
    process.env.PRIVATE_KEY ??
    'EKF65JKw9Q1XWLDZyZNGysBbYG21QbJf3a4xnEoZPZ28LKYGMw53';

  // We get the users credit score. In this case it's 787 for user 1, and 536
  // for anybody else :)
  const knownCreditScore = (userId: number) => (userId === 1 ? 787 : 536);

  // Compute the users credit score
  const creditScore = knownCreditScore(userId);

  // Use our private key to sign an array of numbers containing the users id and
  // credit score
  const signature = client.signFields(
    [BigInt(userId), BigInt(creditScore)],
    privateKey
  );

  return {
    data: { id: userId, creditScore: creditScore },
    signature: signature.signature,
    publicKey: signature.publicKey,
  };
}

export function GET(request: NextRequest) {
  const searchParams = new URLSearchParams(request.nextUrl.search);
  return NextResponse.json(
    getSignedCreditScore(+(searchParams.get('user') ?? 0)),
    { status: 200 }
  );
}
