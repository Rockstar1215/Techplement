'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setIsVisible(false)
      }, 500)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-black overflow-hidden transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'
        }`}
    >
      {/* Animated gradient orb */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'conic-gradient(from 0deg, #D4A574, #E97132, #D4A574)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse-glow 3s ease-in-out infinite'
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(217, 119, 6, 0.4) 0%, transparent 70%)',
            top: '45%',
            left: '55%',
            transform: 'translate(-50%, -50%)',
            animation: 'float 4s ease-in-out infinite'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-600/50">
            <span className="text-white font-black text-3xl">VG</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight uppercase">
            VARNOTHSAVA
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-mono uppercase tracking-widest">
            Experience The Future
          </p>
        </div>

        {/* Loading indicator */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
            <span>[ INITIALIZING ]</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-amber-600 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-amber-600 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
              <div className="w-1 h-1 bg-amber-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>

        {/* Skip button - only show on hover */}
        <Link
          href="/"
          className="absolute bottom-8 right-8 px-6 py-2 border border-amber-700/50 text-amber-500 text-xs font-mono rounded-sm hover:bg-amber-600/10 transition-all opacity-0 hover:opacity-100"
        >
          SKIP
        </Link>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
