// app/api/verify-crash/route.js
import { NextResponse } from 'next/server';
import crypto from 'crypto';

function generateServerSeed() {
  return crypto.randomBytes(32).toString('hex'); // 64-character hex seed
}

function generateCrashPoint(serverSeed, clientSeed, nonce) {
  const input = `${serverSeed}:${clientSeed}:${nonce}`;
  const hash = crypto.createHash('sha256').update(input).digest('hex');

  const h = parseInt(hash.slice(0, 13), 16);
  const e = Math.pow(2, 52);

  if (h === 0) return 1.00;
  const result = Math.floor((100 * e - h) / (e - h)) / 100;
  return Math.max(1.0, result);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { clientSeed, nonce } = body;

    if (!clientSeed || typeof nonce !== 'number') {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const serverSeed = generateServerSeed(); // generated internally
    const crashPoint = generateCrashPoint(serverSeed, clientSeed, nonce);

    return NextResponse.json({
      crashPoint,
      serverSeed, // Optional: return this so user can verify
      hashedServerSeed: crypto.createHash('sha256').update(serverSeed).digest('hex') // For provable fairness
    });
  } catch (err) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
