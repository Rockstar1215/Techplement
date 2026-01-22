'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      {/* Background grid */}
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
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-amber-700/20 backdrop-blur-md bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-2 h-2 bg-amber-600 animate-pulse" />
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 tracking-wider">
              VARNOTHSAVA
            </h1>
          </Link>
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

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <section className="space-y-6">
            <h1 className="text-6xl font-black text-white tracking-tighter">
              ABOUT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                VARNOTHSAVA
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-3xl font-light">
              Pioneering the future of technology through immersive, cutting-edge events and digital experiences that bring together innovators, technologists, and visionaries from around the world.
            </p>
          </section>

          {/* Mission */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-sm border border-amber-700/30 bg-black/50 backdrop-blur-sm space-y-4">
              <div className="w-12 h-12 rounded-sm border border-amber-700 flex items-center justify-center text-amber-500 text-2xl">
                🎯
              </div>
              <h2 className="text-2xl font-bold text-white font-mono tracking-wider">OUR MISSION</h2>
              <p className="text-gray-300 leading-relaxed">
                To create transformative experiences that inspire innovation, foster collaboration, and showcase the boundless possibilities of emerging technologies in shaping tomorrow's world.
              </p>
            </div>
            <div className="p-8 rounded-sm border border-orange-700/30 bg-black/50 backdrop-blur-sm space-y-4">
              <div className="w-12 h-12 rounded-sm border border-orange-700 flex items-center justify-center text-orange-500 text-2xl">
                ⚡
              </div>
              <h2 className="text-2xl font-bold text-white font-mono tracking-wider">OUR VISION</h2>
              <p className="text-gray-300 leading-relaxed">
                A world where technology transcends boundaries, connecting minds and ideas across the globe to create a future defined by innovation, collaboration, and limitless possibilities.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="space-y-6">
            <h2 className="text-4xl font-black text-white font-mono tracking-wider">CORE VALUES</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'INNOVATION', desc: 'Pushing boundaries and exploring new frontiers' },
                { title: 'EXCELLENCE', desc: 'Delivering premium experiences and content' },
                { title: 'COMMUNITY', desc: 'Building connections and fostering collaboration' },
                { title: 'TRANSPARENCY', desc: 'Operating with integrity and honesty' },
                { title: 'IMPACT', desc: 'Creating meaningful change through technology' },
                { title: 'SUSTAINABILITY', desc: 'Building for a responsible future' }
              ].map((value, i) => (
                <div
                  key={i}
                  className="p-6 rounded-sm border border-amber-700/30 bg-black/50 backdrop-blur-sm hover:border-amber-700/60 hover:shadow-lg hover:shadow-amber-600/20 transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-sm mb-4 group-hover:shadow-lg group-hover:shadow-amber-600/50 transition-shadow" />
                  <h3 className="text-white font-bold font-mono mb-2 tracking-widest text-sm">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="space-y-6">
            <h2 className="text-4xl font-black text-white font-mono tracking-wider">BY THE NUMBERS</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: '50K+', label: 'ATTENDEES' },
                { number: '6', label: 'EVENTS' },
                { number: '12', label: 'COUNTRIES' },
                { number: '100+', label: 'SPEAKERS' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-sm border border-cyan-500/30 bg-black/50 backdrop-blur-sm text-center"
                >
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-400 font-mono text-sm tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-12 rounded-sm border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 backdrop-blur-sm text-center space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tight">
              READY TO JOIN THE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                FUTURE?
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our upcoming events and be part of the technological revolution reshaping our world.
            </p>
            <Link
              href="/events"
              className="inline-block group relative px-8 py-4 font-mono text-sm tracking-wider font-bold overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-black px-8 py-4 rounded-sm flex items-center justify-center gap-2 border border-emerald-500/50 group-hover:border-emerald-500 transition-colors">
                EXPLORE EVENTS
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full z-40 border-t border-emerald-500/20 backdrop-blur-md bg-black/50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <span>[ ABOUT PAGE ]</span>
            <span className="text-cyan-500 animate-pulse">●</span>
            <span>VARNOTHSAVA 2026</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-emerald-500">[ v2.1.0 ]</span>
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
