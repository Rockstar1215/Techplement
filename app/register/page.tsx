'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePayment } from '@/context/payment-context';

const eligibleEvents = [
  { id: 'ai-summit', title: 'AI Summit 2026', icon: '🤖' },
  { id: 'quantum-tech', title: 'Quantum Computing', icon: '⚛️' },
  { id: 'metaverse', title: 'Metaverse Conf', icon: '🌐' },
  { id: 'blockchain', title: 'Blockchain Forum', icon: '🔗' },
  { id: 'security', title: 'Cybersecurity', icon: '🔒' }
];

export default function RegisterPage() {
  const { completePayment, isPaymentComplete } = usePayment();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!showCards) return;

    const interval = setInterval(() => {
      setRotation(prev => (prev + 2) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [showCards]);

  const handlePayment = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 800));

    setShowCards(true);

    // Simulate card reveal duration
    await new Promise(resolve => setTimeout(resolve, 3000));

    completePayment();
    setIsProcessing(false);
  };

  return (
    <main className="min-h-screen bg-black overflow-hidden">
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
            <Link href="/register" className="text-sm text-amber-500 font-mono">
              REGISTER
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 min-h-screen pb-20 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full px-6 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-black text-white tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                UNLOCK
              </span>
              <br />
              YOUR ACCESS
            </h1>
            <p className="text-gray-400 text-lg">
              Complete your payment to unlock registration for all eligible events
            </p>
          </div>

          {/* Main Content */}
          {!isPaymentComplete ? (
            <div className="space-y-8">
              {/* Pricing Card */}
              <div className="p-8 rounded-sm border border-amber-700/30 bg-gradient-to-br from-amber-600/10 to-orange-600/10 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-black text-white">Annual Membership</h2>
                  <p className="text-gray-400">Access to 6+ premium tech events</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-amber-700/20">
                    <span className="text-gray-400">Event Access</span>
                    <span className="text-amber-500 font-bold">5 Events</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-amber-700/20">
                    <span className="text-gray-400">Exclusive Content</span>
                    <span className="text-orange-500 font-bold">Included</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Support</span>
                    <span className="text-amber-500 font-bold">Premium</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-amber-700/20">
                  <div className="flex justify-between items-baseline">
                    <span className="text-gray-400">Total</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">₹150</span>
                      <span className="text-gray-500 line-through">₹200</span>
                    </div>
                  </div>
                  <p className="text-xs text-amber-500">One-time payment for annual access</p>
                </div>
              </div>

              {/* Payment Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing || showCards}
                className="w-full py-4 rounded-sm border border-amber-700 bg-gradient-to-r from-amber-600 to-orange-600 text-black font-black text-lg tracking-wider uppercase hover:shadow-lg hover:shadow-amber-600/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden group"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                    <span>PROCESSING PAYMENT...</span>
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  </div>
                ) : showCards ? (
                  <div className="flex items-center justify-center gap-2">
                    <span>✓ PAYMENT COMPLETE</span>
                  </div>
                ) : (
                  'PROCEED TO PAYMENT'
                )}
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-mono">
                <span>🔒 SECURE PAYMENT</span>
                <span>|</span>
                <span>SSL ENCRYPTED</span>
              </div>
            </div>
          ) : null}

          {/* Revolving Cards Animation */}
          {showCards && (
            <div className="relative w-full h-96 flex items-center justify-center">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  perspective: '1200px'
                }}
              >
                {eligibleEvents.map((event, index) => {
                  const angle = (index / eligibleEvents.length) * 360 + rotation;
                  const radius = 150;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={event.id}
                      className="absolute w-40 h-48 rounded-lg border-2 border-amber-600 bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center transition-all duration-300"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotateY(0deg)`,
                        boxShadow: `0 0 30px rgba(212, 165, 116, ${0.3 + Math.sin((angle * Math.PI) / 180) * 0.2})`
                      }}
                    >
                      <div className="text-5xl mb-2">{event.icon}</div>
                      <h3 className="font-black text-white text-sm tracking-tight">{event.title}</h3>
                      <p className="text-xs text-amber-400 mt-2 font-mono">ELIGIBLE</p>
                    </div>
                  );
                })}
              </div>

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-amber-600/50 flex items-center justify-center">
                  <div className="text-center space-y-1">
                    <p className="text-2xl">✓</p>
                    <p className="text-xs font-mono text-amber-500">VERIFIED</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Success Message */}
          {isPaymentComplete && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-6 rounded-sm border border-amber-600 bg-amber-600/10 text-center space-y-3">
                <h2 className="text-2xl font-black text-amber-400">WELCOME ABOARD!</h2>
                <p className="text-gray-300">Your payment is complete. You can now register for all eligible events.</p>
              </div>

              <Link
                href="/events"
                className="block w-full py-4 rounded-sm border border-amber-700 bg-amber-600/10 text-amber-500 font-black text-lg tracking-wider uppercase hover:bg-amber-600/20 transition-all text-center"
              >
                VIEW EVENTS & REGISTER
              </Link>

              <div className="text-xs text-gray-500 text-center font-mono space-y-1">
                <p>[ MEMBERSHIP ACTIVATED ]</p>
                <p>[ {eligibleEvents.length} EVENTS UNLOCKED ]</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full z-40 border-t border-amber-700/20 backdrop-blur-md bg-black/50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <span>[ REGISTRATION ]</span>
            <span className="text-amber-600 animate-pulse">●</span>
            <span>SECURE CHECKOUT</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-amber-500">[ {isPaymentComplete ? 'ACTIVE' : 'PENDING'} ]</span>
          </div>
        </div>
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
