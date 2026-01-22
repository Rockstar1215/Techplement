'use client'

import { useState } from 'react'
import Link from 'next/link'
import EventCard from '@/components/event-card'

const events = [
  {
    id: '001',
    title: 'Neural Interface Summit',
    category: 'ai',
    date: '2026-06-15',
    time: '18:00 UTC',
    attendees: 2847,
    status: 'LIVE',
    image: '/events/neural-interface.jpg'
  },
  {
    id: '002',
    title: 'Quantum Computing Expo',
    category: 'tech',
    date: '2026-06-20',
    time: '14:00 UTC',
    attendees: 1923,
    status: 'UPCOMING',
    image: '/events/quantum-computing.jpg'
  },
  {
    id: '003',
    title: 'Metaverse 2.0 Conference',
    category: 'metaverse',
    date: '2026-07-01',
    time: '20:00 UTC',
    attendees: 5432,
    status: 'UPCOMING',
    image: '/events/metaverse.jpg'
  },
  {
    id: '004',
    title: 'Blockchain Revolution',
    category: 'crypto',
    date: '2026-07-10',
    time: '16:00 UTC',
    attendees: 3156,
    status: 'UPCOMING',
    image: '/events/blockchain.jpg'
  },
  {
    id: '005',
    title: 'Cybersecurity Fortress',
    category: 'security',
    date: '2026-07-22',
    time: '15:00 UTC',
    attendees: 2341,
    status: 'UPCOMING',
    image: '/events/cybersecurity.jpg'
  },
  {
    id: '006',
    title: 'Digital Art NFT Showcase',
    category: 'art',
    date: '2026-08-05',
    time: '19:00 UTC',
    attendees: 4521,
    status: 'UPCOMING',
    image: '/events/digital-art-nft.jpg'
  }
]

const categories = [
  { id: 'all', label: 'ALL EVENTS', count: 6 },
  { id: 'ai', label: 'AI & NEURAL', count: 1 },
  { id: 'tech', label: 'QUANTUM TECH', count: 1 },
  { id: 'metaverse', label: 'METAVERSE', count: 1 },
  { id: 'crypto', label: 'BLOCKCHAIN', count: 1 },
  { id: 'security', label: 'SECURITY', count: 1 },
  { id: 'art', label: 'DIGITAL ART', count: 1 }
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-amber-700/20 backdrop-blur-md bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-600 animate-pulse" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 tracking-wider">
              VARNOTHSAVA
            </h1>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-300 hover:text-amber-500 transition-colors font-mono">
              HOME
            </Link>
            <Link href="/events" className="text-sm text-amber-500 font-mono">
              EVENTS
            </Link>
            <Link href="/gallery" className="text-sm text-gray-300 hover:text-amber-500 transition-colors font-mono">
              GALLERY
            </Link>
            <Link href="/register" className="px-4 py-2 border border-amber-700 text-amber-500 hover:bg-amber-600/10 transition-all font-mono text-sm tracking-wider rounded-sm">
              REGISTER
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 space-y-6">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                LIVE
              </span>
              <br />
              EVENTS HUB
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl">
              Discover and join the most cutting-edge tech events reshaping our digital future.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-sm" />
              <input
                type="text"
                placeholder="SEARCH EVENTS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="relative w-full px-6 py-4 bg-black border border-amber-700/30 rounded-sm text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-amber-700/100 focus:ring-1 focus:ring-amber-600/50 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-sm">
                🔍
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex gap-3 min-w-max">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-sm font-mono text-sm tracking-wider whitespace-nowrap transition-all ${selectedCategory === category.id
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-black font-bold'
                      : 'border border-amber-700/30 text-gray-300 hover:border-amber-700/100 hover:text-amber-500'
                    }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-60">[{category.count}]</span>
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {/* Empty state */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg font-mono">NO EVENTS FOUND</p>
              <p className="text-gray-600 text-sm mt-2">TRY A DIFFERENT SEARCH OR FILTER</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer HUD */}
      <div className="fixed bottom-0 w-full z-40 border-t border-amber-700/20 backdrop-blur-md bg-black/50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <span>[ EVENTS PORTAL ]</span>
            <span className="text-amber-600 animate-pulse">●</span>
            <span>DISPLAYING {filteredEvents.length} OF {events.length} EVENTS</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-amber-500">[ UPDATED: 2026-05-20 ]</span>
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
      `}</style>
    </main>
  )
}
