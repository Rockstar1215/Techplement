'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated background grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(212, 165, 116, 0.05) 25%, rgba(212, 165, 116, 0.05) 26%, transparent 27%, transparent 74%, rgba(212, 165, 116, 0.05) 75%, rgba(212, 165, 116, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(212, 165, 116, 0.05) 25%, rgba(212, 165, 116, 0.05) 26%, transparent 27%, transparent 74%, rgba(212, 165, 116, 0.05) 75%, rgba(212, 165, 116, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-drift 20s linear infinite'
          }}
        />
        {/* Glow cursor effect */}
        <div
          className="fixed w-96 h-96 rounded-full pointer-events-none blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-amber-700/30 backdrop-blur-md bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-600 animate-pulse" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 tracking-wider">
              VARNOTHSAVA
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/events" className="text-sm text-gray-300 hover:text-amber-500 transition-colors font-mono">
              EVENTS
            </Link>
            <Link href="/gallery" className="text-sm text-gray-300 hover:text-amber-500 transition-colors font-mono">
              GALLERY
            </Link>
            <button className="px-6 py-2 border border-amber-700 text-amber-500 hover:bg-amber-600/10 transition-all font-mono text-sm tracking-wider">
              REGISTER
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        {/* Animated title */}
        <div className="mb-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-700/40 bg-amber-600/5 mb-6">
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-pulse" />
            <span className="text-amber-500 text-sm font-mono tracking-widest">TECH EVENT 2026</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black leading-tight tracking-tighter max-w-4xl mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500">
              FUTURE
            </span>
            <br />
            <span className="text-white">REDEF</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              INED
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mt-8">
            Experience the convergence of innovation, technology, and imagination. A futuristic showcase of next-generation events and digital experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Link
            href="/events"
            className="group relative px-8 py-4 font-mono text-sm tracking-wider font-bold overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-black px-8 py-4 rounded-sm flex items-center justify-center gap-2 border border-amber-700/50 group-hover:border-amber-600 transition-colors">
              EXPLORE EVENTS
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
          <button className="px-8 py-4 border border-orange-700/50 text-orange-500 hover:border-orange-600 hover:bg-orange-600/5 transition-all font-mono text-sm tracking-wider rounded-sm">
            LEARN MORE
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-5xl">
          {[
            { label: 'REAL-TIME', value: 'EVENTS', icon: '⚡' },
            { label: 'LIVE', value: 'STREAMING', icon: '📡' },
            { label: 'IMMERSIVE', value: 'TECH', icon: '🎯' }
          ].map((card, i) => (
            <div
              key={i}
              className="group relative rounded-sm overflow-hidden border border-amber-700/20 hover:border-amber-700/50 transition-all bg-black/50 backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-amber-600/20"
              style={{
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative space-y-4">
                <div className="text-3xl">{card.icon}</div>
                <p className="text-xs text-amber-500 font-mono tracking-widest">{card.label}</p>
                <p className="text-xl font-bold text-white tracking-wider">{card.value}</p>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer HUD elements */}
      <div className="fixed bottom-0 w-full z-40 border-t border-amber-700/20 backdrop-blur-md bg-black/50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <span>[ SYSTEM ONLINE ]</span>
            <span className="text-amber-600 animate-pulse">●</span>
            <span>VARNOTHSAVA 2026</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-amber-500">[ v2.1.0 ]</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-drift {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </main>
  )
}
