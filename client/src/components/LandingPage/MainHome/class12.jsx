'use client'

import { useEffect, useState } from 'react'

export default function WorkInProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-xl md:text-3xl font-bold text-black mb-8 text-center">
        Work in Progress...
      </h1>
      <div className="w-60 h-32 bg-blue-800 rounded-lg overflow-hidden relative">
        <div
          className="absolute bottom-0 left-0 right-0 bg-blue-400 transition-all duration-50 ease-linear"
          style={{ height: `${progress}%` }}
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-blue-200 opacity-30 animate-wave"></div>
          <div className="absolute top-0 left-0 right-0 h-2 bg-blue-200 opacity-30 animate-wave2"></div>
        </div>
      </div>
      <p className="mt-4 text-black text-lg">{progress}% Complete</p>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes wave2 {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-wave {
          animation: wave 2s linear infinite;
        }

        .animate-wave2 {
          animation: wave2 1.8s linear infinite;
          animation-delay: -0.9s;
        }
      `}</style>
    </div>
  )
}
