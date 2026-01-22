'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative flex items-center justify-center">
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

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-6">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 tracking-tighter">
            404
          </div>
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-4xl font-black text-white tracking-tight">
            PAGE NOT FOUND
          </h1>
          <p className="text-gray-400 text-lg font-light max-w-md mx-auto">
            The system cannot locate the requested resource. It may have been moved or deleted.
          </p>
        </div>

        {/* Error details */}
        <div className="p-6 rounded-sm border border-cyan-500/30 bg-black/50 backdrop-blur-sm inline-block max-w-md">
          <div className="text-left space-y-2 font-mono text-sm">
            <p className="text-gray-600">[SYSTEM ERROR LOG]</p>
            <p className="text-cyan-400">
              status: <span className="text-red-400">404</span>
            </p>
            <p className="text-cyan-400">
              path: <span className="text-yellow-400">NOT_FOUND</span>
            </p>
            <p className="text-cyan-400">
              timestamp: <span className="text-emerald-400">{new Date().toISOString()}</span>
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="group relative px-8 py-4 font-mono text-sm tracking-wider font-bold overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-black px-8 py-4 rounded-sm flex items-center justify-center gap-2 border border-cyan-500/50 group-hover:border-cyan-500 transition-colors">
              RETURN HOME
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
          <Link
            href="/events"
            className="px-8 py-4 border border-emerald-500/50 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500/5 transition-all font-mono text-sm tracking-wider rounded-sm"
          >
            EXPLORE EVENTS
          </Link>
        </div>

        {/* Footer HUD */}
        <div className="mt-12 pt-8 border-t border-purple-500/20 font-mono text-xs text-gray-600">
          <p>[ ERROR_404 ] [ VARNOTHSAVA v2.1.0 ]</p>
        </div>
      </div>
    </main>
  )
}
