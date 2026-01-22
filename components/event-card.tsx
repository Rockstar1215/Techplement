'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePayment } from '@/context/payment-context'

interface Event {
  id: string
  title: string
  category: string
  date: string
  time: string
  attendees: number
  status: string
  image: string
}

interface EventCardProps {
  event: Event
  index?: number
}

const categoryColors = {
  ai: { border: 'from-amber-600 to-orange-600', glow: 'rgba(212, 165, 116, 0.4)', label: 'AI_NEURAL' },
  tech: { border: 'from-orange-500 to-amber-600', glow: 'rgba(217, 119, 6, 0.4)', label: 'QUANTUM_TECH' },
  metaverse: { border: 'from-amber-500 to-yellow-600', glow: 'rgba(217, 119, 6, 0.4)', label: 'METAVERSE' },
  crypto: { border: 'from-orange-600 to-red-700', glow: 'rgba(194, 65, 12, 0.4)', label: 'BLOCKCHAIN' },
  security: { border: 'from-red-700 to-orange-700', glow: 'rgba(153, 27, 27, 0.4)', label: 'SECURITY' },
  art: { border: 'from-amber-500 to-orange-500', glow: 'rgba(212, 165, 116, 0.4)', label: 'DIGITAL_ART' }
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const { isPaymentComplete, registerEvent, isEventRegistered } = usePayment()
  const categoryColor = categoryColors[event.category as keyof typeof categoryColors] || categoryColors.tech

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const handleRegister = async () => {
    setIsRegistering(true)
    
    // Simulate registration animation
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    registerEvent(event.id)
    setIsRegistered(true)
    setIsRegistering(false)
  }

  return (
    <div
      className="group relative h-96 rounded-sm overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `float-card ${3 + index * 0.5}s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`
      }}
    >
      {/* Electrifying animated border effect */}
      <div className="absolute inset-0 z-0 rounded-sm overflow-hidden">
        {/* Primary rotating gradient */}
        <div
          className="absolute inset-0 rounded-sm"
          style={{
            background: `conic-gradient(from 0deg, ${categoryColor.glow}, transparent 25%, transparent 75%, ${categoryColor.glow})`,
            animation: isHovered ? 'electric-spin 1.5s linear infinite' : 'electric-spin 3s linear infinite',
            opacity: isHovered ? 0.8 : 0.3
          }}
        />
        {/* Secondary counter-rotating gradient */}
        <div
          className="absolute inset-0 rounded-sm"
          style={{
            background: `conic-gradient(from 180deg, transparent 25%, ${categoryColor.glow}, transparent 75%)`,
            animation: isHovered ? 'electric-spin-reverse 2s linear infinite' : 'electric-spin-reverse 4s linear infinite',
            opacity: isHovered ? 0.4 : 0.15
          }}
        />
        {/* Static border */}
        <div className="absolute inset-1 rounded-sm bg-black" />
      </div>

      {/* Electrifying edge pulses */}
      <div className="absolute inset-0 z-0 rounded-sm pointer-events-none">
        <div className="absolute top-0 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"
          style={{
            animation: isHovered ? 'pulse-edge 1s ease-in-out infinite' : 'pulse-edge 2s ease-in-out infinite',
            boxShadow: `0 0 10px ${categoryColor.glow}`
          }}
        />
        <div className="absolute bottom-0 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"
          style={{
            animation: isHovered ? 'pulse-edge 1.2s ease-in-out infinite 0.3s' : 'pulse-edge 2.4s ease-in-out infinite 0.6s',
            boxShadow: `0 0 10px ${categoryColor.glow}`
          }}
        />
      </div>

      {/* Glowing background effect */}
      <div
        className="absolute inset-0 z-1 rounded-sm blur-2xl transition-all duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${categoryColor.glow}, transparent)`,
          opacity: isHovered ? 0.8 : 0.3
        }}
      />

      {/* Main card container */}
      <div className={`relative z-10 w-full h-full border rounded-sm transition-all duration-500 overflow-hidden backdrop-blur-sm ${
        isRegistered 
          ? 'bg-gradient-to-br from-amber-600/30 to-orange-600/30 border-amber-500' 
          : 'bg-gradient-to-br from-slate-950/80 to-black/90'
      }`}
        style={{
          borderImage: isRegistered 
            ? 'linear-gradient(135deg, rgba(217, 119, 6, 0.8), rgba(212, 165, 116, 0.6)) 1'
            : `linear-gradient(135deg, ${categoryColor.glow.replace('0.4', '0.6')}, transparent) 1`,
          boxShadow: isRegistered 
            ? `0 0 40px rgba(217, 119, 6, 0.6), inset 0 0 40px rgba(212, 165, 116, 0.2)`
            : isHovered ? `0 0 30px ${categoryColor.glow}` : `0 0 15px ${categoryColor.glow.replace('0.4', '0.2')}`
        }}
      >
        {/* HUD Corner brackets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-current opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: categoryColor.glow }} />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-current opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: categoryColor.glow }} />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-current opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: categoryColor.glow }} />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-current opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: categoryColor.glow }} />
        </div>

        {/* Image with scanline overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-1/2 relative overflow-hidden group">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isRegistered ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'
              }`}
            />
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(
                    0deg,
                    transparent 24%,
                    rgba(255, 255, 255, 0.05) 25%,
                    rgba(255, 255, 255, 0.05) 26%,
                    transparent 27%,
                    transparent 74%,
                    rgba(255, 255, 255, 0.05) 75%,
                    rgba(255, 255, 255, 0.05) 76%,
                    transparent 77%,
                    transparent
                  )
                `,
                backgroundSize: '100% 4px'
              }}
            />
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4 z-20">
            <div
              className={`px-3 py-1 rounded-sm text-xs font-bold font-mono tracking-wider ${
                event.status === 'LIVE'
                  ? 'bg-red-600/80 text-white animate-pulse'
                  : 'bg-amber-600/80 text-black'
              }`}
            >
              {event.status === 'LIVE' ? '● LIVE' : '◯ UPCOMING'}
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="absolute inset-0 top-1/2 h-1/2 p-5 flex flex-col justify-between">
          {/* Category and ID */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-gray-500 tracking-widest">
                ID: {event.id}
              </span>
              <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                {categoryColor.label}
              </span>
            </div>
            <h3 className="text-base font-black text-white line-clamp-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 transition-all">
              {event.title}
            </h3>
          </div>

          {/* Metadata grid */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div>
              <p className="text-gray-600 uppercase tracking-widest">DATE</p>
              <p className="text-amber-500 font-semibold">{formatDate(event.date)}</p>
            </div>
            <div>
              <p className="text-gray-600 uppercase tracking-widest">TIME</p>
              <p className="text-orange-400 font-semibold">{event.time}</p>
            </div>
            <div>
              <p className="text-gray-600 uppercase tracking-widest">ATTENDEES</p>
              <p className="text-amber-600 font-semibold">{event.attendees.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-600 uppercase tracking-widest">TYPE</p>
              <p className="text-orange-500 font-semibold">VIRTUAL</p>
            </div>
          </div>

          {/* Action button */}
          {isRegistered ? (
            <button disabled className="w-full py-2 mt-3 border border-amber-500 rounded-sm text-xs font-mono font-bold text-amber-400 bg-amber-600/20 transition-all tracking-widest uppercase cursor-default animate-pulse">
              ✓ REGISTERED
            </button>
          ) : isPaymentComplete ? (
            <button
              onClick={handleRegister}
              disabled={isRegistering}
              className="w-full py-2 mt-3 border border-orange-600 rounded-sm text-xs font-mono font-bold text-orange-400 hover:bg-orange-600/20 disabled:opacity-50 transition-all tracking-widest uppercase relative overflow-hidden group-hover:shadow-lg group-hover:shadow-orange-600/30"
            >
              {isRegistering ? (
                <div className="flex items-center justify-center gap-1">
                  <span className="inline-block w-1 h-1 bg-orange-400 rounded-full animate-pulse" />
                  <span>REGISTERING...</span>
                  <span className="inline-block w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
              ) : (
                'REGISTER NOW'
              )}
            </button>
          ) : (
            <button disabled className="w-full py-2 mt-3 border border-gray-700/50 rounded-sm text-xs font-mono font-bold text-gray-500 hover:bg-gray-700/10 transition-all tracking-widest uppercase opacity-50 cursor-not-allowed">
              UNLOCK WITH PAYMENT
            </button>
          )}
        </div>
      </div>

      {/* Registration success animation */}
      {isRegistering && (
        <div className="absolute inset-0 z-20 rounded-sm flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-orange-600/40 to-amber-600/40 animate-pulse" />
          <div className="relative z-10 text-center space-y-2">
            <div className="text-3xl font-black text-white animate-bounce">✓</div>
            <p className="text-xs font-mono text-amber-400 tracking-widest">REGISTERING...</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float-card {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes electric-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes electric-spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-edge {
          0%, 100% {
            opacity: 0;
            transform: scaleX(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  )
}
