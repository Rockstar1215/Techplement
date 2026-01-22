'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

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
              GET IN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                TOUCH
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl font-light">
              Have questions about our events? Want to collaborate? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </section>

          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="p-6 rounded-sm border border-amber-700/30 bg-black/50 backdrop-blur-sm space-y-3">
                <div className="text-amber-500 text-2xl">📧</div>
                <h3 className="text-white font-mono font-bold tracking-widest">EMAIL</h3>
                <p className="text-gray-300 text-sm">hello@varnothgava.com</p>
                <p className="text-gray-400 text-xs">We'll respond within 24 hours</p>
              </div>

              <div className="p-6 rounded-sm border border-orange-700/30 bg-black/50 backdrop-blur-sm space-y-3">
                <div className="text-orange-500 text-2xl">🌐</div>
                <h3 className="text-white font-mono font-bold tracking-widest">SOCIAL</h3>
                <div className="flex gap-3">
                  <button className="px-3 py-2 text-xs font-mono text-orange-500 border border-orange-700/50 rounded-sm hover:bg-orange-600/10 transition-all">
                    Twitter
                  </button>
                  <button className="px-3 py-2 text-xs font-mono text-orange-500 border border-orange-700/50 rounded-sm hover:bg-orange-600/10 transition-all">
                    Discord
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-sm border border-amber-700/30 bg-black/50 backdrop-blur-sm space-y-3">
                <div className="text-amber-600 text-2xl">📍</div>
                <h3 className="text-white font-mono font-bold tracking-widest">LOCATION</h3>
                <p className="text-gray-300 text-sm">Worldwide • Virtual Events</p>
              </div>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 p-8 rounded-sm border border-amber-700/20 bg-black/50 backdrop-blur-sm space-y-6">
              <h2 className="text-2xl font-bold text-white font-mono tracking-wider">SEND MESSAGE</h2>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-mono uppercase tracking-widest">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="YOUR NAME"
                  className="w-full px-4 py-3 bg-black border border-amber-700/30 rounded-sm text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-600/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-mono uppercase tracking-widest">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="YOUR EMAIL"
                  className="w-full px-4 py-3 bg-black border border-amber-700/30 rounded-sm text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-600/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-mono uppercase tracking-widest">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="MESSAGE SUBJECT"
                  className="w-full px-4 py-3 bg-black border border-amber-700/30 rounded-sm text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-600/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 font-mono uppercase tracking-widest">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="YOUR MESSAGE"
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-amber-700/30 rounded-sm text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-600/50 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between">
                {submitted && (
                  <p className="text-amber-500 font-mono text-sm">✓ MESSAGE SENT SUCCESSFULLY</p>
                )}
                <button
                  type="submit"
                  className="ml-auto px-8 py-3 rounded-sm border border-amber-700 bg-amber-600/10 text-amber-500 hover:bg-amber-600/20 transition-all font-mono text-sm font-bold tracking-wider"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* FAQ Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-black text-white font-mono tracking-wider">FREQUENTLY ASKED</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: 'How do I register for events?',
                  a: 'Visit our events page and click "Join Event" on any event card. You\'ll be guided through the registration process.'
                },
                {
                  q: 'Are the events free?',
                  a: 'Most of our events are free to attend. Some premium events may have a registration fee. Check individual event details.'
                },
                {
                  q: 'Can I attend multiple events?',
                  a: 'Absolutely! Feel free to register for as many events as you\'d like. There are no restrictions.'
                },
                {
                  q: 'What if I miss a live event?',
                  a: 'Event recordings are available to registered attendees within 24 hours after the event ends.'
                }
              ].map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-sm border border-amber-700/30 bg-black/50 backdrop-blur-sm space-y-3"
                >
                  <h3 className="text-white font-bold text-sm">{faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full z-40 border-t border-amber-700/20 backdrop-blur-md bg-black/50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <span>[ CONTACT ]</span>
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
      `}</style>
    </main>
  )
}
