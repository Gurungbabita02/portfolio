// app/page.js
'use client';
import { useState } from 'react';

const CrashPointVerifier = () => {
  const [clientSeed, setClientSeed] = useState('');
  const [nonce, setNonce] = useState('');
  const [crashPoint, setCrashPoint] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerifyCrashPoint = async () => {
    if ( !clientSeed || !nonce) {
      setError('Please provide all the fields');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/crash-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          
          clientSeed,
          nonce: parseInt(nonce, 10),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setCrashPoint(data.crashPoint);
        setClientSeed("")
        setNonce("")
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };
  const generateRandomClientSeed = () => {
    const array = new Uint8Array(8);
    window.crypto.getRandomValues(array);
    const seed =Array.from(array, (b) => b.toString(16).padStart(2, '0')).join('')
    setClientSeed(seed)
    return seed ;
  };

  return (
    <div className=" p-5 flex justify-center h-screen items-center">

      <div className=''>
      <h1 className="text-3xl font-semibold mb-5">Aviator Crash Point Verifier</h1>
      <button className='bg-emerald-400 text-white px-4 py-2 rounded-md' onClick={generateRandomClientSeed}>Generate client seed</button>
      <div className="mb-4">
        <label className="block text-sm font-medium mt-4">Client Seed:</label>
        <input
          type="text"
          value={clientSeed}
          onChange={(e) => setClientSeed(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Round:</label>
        <input
          type="number"
          value={nonce}
          onChange={(e) => setNonce(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      {/* Error/Loading Message */}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading && <p className="text-blue-600 mb-4">Verifying...</p>}

      {/* Verify Button */}
      <button
        onClick={handleVerifyCrashPoint}
        className="py-2 px-4 bg-green-600 text-white rounded-md"
        disabled={loading}
      >
        Verify Crash Point
      </button>

      {/* Display Crash Point */}
      {crashPoint !== null && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Crash Point:</h2>
          <p>{crashPoint}</p>
        </div>
      )}

      </div>
    

    </div>
  );
};

export default CrashPointVerifier;
