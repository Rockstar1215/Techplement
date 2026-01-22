import React from "react"
import type { Metadata, Viewport } from 'next' // Added Viewport type
import { Geist, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SplashScreen from '@/components/splash-screen'
import { PaymentProvider } from '@/context/payment-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// 1. ADD THIS NEW EXPORT (This clears the error)
export const viewport: Viewport = {
  themeColor: '#00FFC8',
  width: 'device-width',
  initialScale: 1,
}

// 2. REMOVE themeColor from the metadata object
export const metadata: Metadata = {
  title: 'VARNOTHSAVA | Future Redefined',
  description: 'Experience the convergence of innovation, technology, and imagination. A futuristic showcase of next-generation events and digital experiences.',
  generator: 'v0.app',
  // themeColor: '#00FFC8', <-- REMOVED FROM HERE
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-black`} suppressHydrationWarning>
        <PaymentProvider>
          <SplashScreen />
          {children}
          <Analytics />
        </PaymentProvider>
      </body>
    </html>
  )
}