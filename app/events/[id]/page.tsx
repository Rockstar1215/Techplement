'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const events = [
  {
    id: '001',
    title: 'Neural Interface Summit',
    category: 'ai',
    date: '2026-06-15',
    time: '18:00 UTC',
    attendees: 2847,
    status: 'LIVE',
    image: 'https://images.unsplash.com/photo-1677442d019cecf8286624a9c86a4b1a?w=1200&h=600&fit=crop',
    description: 'Join us for an immersive experience exploring the latest advances in neural interface technology. This summit brings together leading neurotechnologists, researchers, and innovators to discuss the future of brain-computer interfaces.',
    speakers: [
      { name: 'Dr. Aurora Chen', title: 'Neural Tech Pioneer', company: 'NeuroSync Labs' },
      { name: 'James Morrison', title: 'AI Architect', company: 'Synapse AI' },
      { name: 'Dr. Lisa Park', title: 'Neuroscientist', company: 'Brain Institute' }
    ],
    agenda: [
      { time: '18:00', event: 'Opening Keynote - Dr. Aurora Chen' },
      { time: '18:45', event: 'Panel Discussion: Future of Neural Tech' },
      { time: '19:30', event: 'Live Demonstration' },
      { time: '20:15', event: 'Q&A Session' },
      { time: '21:00', event: 'Networking & Closing Remarks' }
    ]
  },
  {
    id: '002',
    title: 'Quantum Computing Expo',
    category: 'tech',
    date: '2026-06-20',
    time: '14:00 UTC',
    attendees: 1923,
    status: 'UPCOMING',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=600&fit=crop',
    description: 'Witness the quantum revolution. Discover breakthrough quantum computing applications, meet industry leaders, and explore the technology that will shape tomorrow.',
    speakers: [
      { name: 'Prof. Richard Quantum', title: 'Quantum Physicist', company: 'Quantum Labs' },
      { name: 'Emma Watson', title: 'Tech Lead', company: 'CloudQ Systems' },
      { name: 'Dr. Michael Zhang', title: 'Researcher', company: 'Tech Institute' }
    ],
    agenda: [
      { time: '14:00', event: 'Welcome & Overview' },
      { time: '14:30', event: 'Keynote: Quantum Breakthroughs' },
      { time: '15:15', event: 'Technical Workshop' },
      { time: '16:00', event: 'Industry Panel' },
      { time: '16:45', event: 'Demo & Closing' }
    ]
  }
]

export default function EventDetailPage() {
  const params = useParams()
  const eventId = params?.id as string
  const [isRegistered, setIsRegistered] = useState(false)

  const event = events.find(e => e.id === eventId)

  if (!event) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-xl font-mono mb-4">EVENT NOT FOUND</p>
          <Link href="/events" className="text-cyan-400 hover:text-cyan-300 font-mono">
            ← BACK TO EVENTS
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      {/* Background grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(0, 255, 200, 0.05) 25%, rgba(0, 255, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 200, 0.05) 75%, rgba(0, 255, 200, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(0, 255, 200, 0.05) 25%, rgba(0, 255, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 200, 0.05) 75%, rgba(0, 255, 200, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-cyan-500/20 backdrop-blur-md bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 tracking-wider">
              VARNOTHSAVA
            </h1>
          </Link>
          <Link href="/events" className="text-cyan-400 font-mono text-sm hover:text-cyan-300">
            ← BACK
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero image */}
          <div className="mb-12 rounded-sm overflow-hidden border border-cyan-500/30 h-96 relative group">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div
              className="absolute inset-0"
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

          {/* Title and meta info */}
          <div className="mb-12 space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-4 flex-1">
                <div className="inline-block px-4 py-2 rounded-sm border border-cyan-500/50 bg-cyan-500/5">
                  <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">{event.category}</span>
                </div>
                <h1 className="text-5xl font-black text-white tracking-tight">
                  {event.title}
                </h1>
              </div>
              <div className="text-right">
                <p className={`text-3xl font-bold mb-2 ${event.status === 'LIVE' ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
                  {event.status}
                </p>
              </div>
            </div>

            {/* Quick info grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-sm border border-cyan-500/20 bg-black/50 backdrop-blur-sm">
                <p className="text-gray-500 text-xs font-mono mb-2">DATE</p>
                <p className="text-cyan-400 font-bold">{new Date(event.date).toLocaleDateString()}</p>
              </div>
              <div className="p-4 rounded-sm border border-emerald-500/20 bg-black/50 backdrop-blur-sm">
                <p className="text-gray-500 text-xs font-mono mb-2">TIME</p>
                <p className="text-emerald-400 font-bold">{event.time}</p>
              </div>
              <div className="p-4 rounded-sm border border-blue-500/20 bg-black/50 backdrop-blur-sm">
                <p className="text-gray-500 text-xs font-mono mb-2">ATTENDEES</p>
                <p className="text-blue-400 font-bold">{event.attendees.toLocaleString()}</p>
              </div>
              <div className="p-4 rounded-sm border border-purple-500/20 bg-black/50 backdrop-blur-sm">
                <p className="text-gray-500 text-xs font-mono mb-2">FORMAT</p>
                <p className="text-purple-400 font-bold">VIRTUAL</p>
              </div>
            </div>
          </div>

          {/* Main sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section className="p-6 rounded-sm border border-cyan-500/20 bg-black/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-4 font-mono tracking-wider">
                  EVENT OVERVIEW
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </section>

              {/* Agenda */}
              <section className="p-6 rounded-sm border border-emerald-500/20 bg-black/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6 font-mono tracking-wider">
                  AGENDA
                </h2>
                <div className="space-y-4">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-emerald-500/20 last:border-0">
                      <div className="text-emerald-400 font-bold font-mono min-w-20">{item.time}</div>
                      <div className="text-gray-300">{item.event}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Speakers */}
              <section className="p-6 rounded-sm border border-purple-500/20 bg-black/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6 font-mono tracking-wider">
                  SPEAKERS
                </h2>
                <div className="space-y-4">
                  {event.speakers.map((speaker, idx) => (
                    <div key={idx} className="p-4 rounded-sm border border-purple-500/30 bg-purple-500/5">
                      <p className="text-white font-bold">{speaker.name}</p>
                      <p className="text-purple-400 text-sm">{speaker.title}</p>
                      <p className="text-gray-500 text-xs">{speaker.company}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column - Sidebar */}
            <div className="space-y-6">
              <button
                onClick={() => setIsRegistered(!isRegistered)}
                className={`w-full py-4 rounded-sm font-mono text-sm font-bold tracking-wider transition-all ${isRegistered
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black border border-emerald-500'
                    : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
              >
                {isRegistered ? '✓ REGISTERED' : 'REGISTER NOW'}
              </button>

              <div className="p-6 rounded-sm border border-cyan-500/20 bg-black/50 backdrop-blur-sm space-y-4">
                <h3 className="text-white font-mono font-bold tracking-wider">EVENT DETAILS</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500 font-mono text-xs mb-1">CATEGORY</p>
                    <p className="text-cyan-400 uppercase">{event.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-mono text-xs mb-1">EVENT ID</p>
                    <p className="text-emerald-400 font-mono">{event.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-mono text-xs mb-1">LOCATION</p>
                    <p className="text-purple-400">WORLDWIDE • VIRTUAL</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-sm border border-emerald-500/20 bg-black/50 backdrop-blur-sm">
                <h3 className="text-white font-mono font-bold tracking-wider mb-4">SHARE EVENT</h3>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-sm border border-emerald-500/50 text-emerald-400 text-sm font-mono hover:bg-emerald-500/10 transition-all">
                    X
                  </button>
                  <button className="flex-1 py-2 rounded-sm border border-emerald-500/50 text-emerald-400 text-sm font-mono hover:bg-emerald-500/10 transition-all">
                    Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full z-40 border-t border-emerald-500/20 backdrop-blur-md bg-black/50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <span>[ EVENT DETAILS ]</span>
            <span className="text-cyan-500 animate-pulse">●</span>
            <span>ID: {event.id}</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-emerald-500">[ v2.1.0 ]</span>
          </div>
        </div>
      </div>
    </main>
  )
}
