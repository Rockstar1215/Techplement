'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import * as THREE from 'three'

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 2.5
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 1)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Add lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8)
    light1.position.set(5, 3, 5)
    scene.add(light1)

    const light2 = new THREE.DirectionalLight(0xD4A574, 0.4)
    light2.position.set(-5, -3, -5)
    scene.add(light2)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    // Create globe placeholder
    const geometry = new THREE.IcosahedronGeometry(1, 32)
    const globe = new THREE.Mesh(
      geometry,
      new THREE.MeshPhongMaterial({ color: 0x111111, transparent: true, opacity: 0.5 })
    )
    scene.add(globe)

    // Animation loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      globe.rotation.x += 0.0002
      globe.rotation.y += 0.0005
      renderer.render(scene, camera)
    }
    animate()

    // Event data for images
    const eventsData = [
      { name: 'AI SUMMIT', x: 256, y: 256, color: '#D4A574', size: 120, img: '/events/neural-interface.jpg' },
      { name: 'TECH EXPO', x: 512, y: 512, color: '#E97132', size: 100, img: '/events/quantum-computing.jpg' },
      { name: 'METAVERSE', x: 1024, y: 256, color: '#D4A574', size: 110, img: '/events/metaverse.jpg' },
      { name: 'BLOCKCHAIN', x: 1536, y: 512, color: '#D97706', size: 100, img: '/events/blockchain.jpg' },
      { name: 'SECURITY', x: 768, y: 768, color: '#E97132', size: 90, img: '/events/cybersecurity.jpg' },
      { name: 'DIGITAL ART', x: 1280, y: 800, color: '#D4A574', size: 100, img: '/events/digital-art-nft.jpg' }
    ]

    const loadImagesAndDraw = async () => {
      const canvas = document.createElement('canvas')
      canvas.width = 2048
      canvas.height = 1024
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Create background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#0a0a0a')
      gradient.addColorStop(0.5, '#1a1a2e')
      gradient.addColorStop(1, '#0a0a0a')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = '#D4A574'
      ctx.lineWidth = 0.5
      ctx.globalAlpha = 0.1
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
      }
      ctx.globalAlpha = 1

      // Load and draw icons
      for (const event of eventsData) {
        try {
          const img = new Image()
          img.src = event.img
          await new Promise((resolve) => {
            img.onload = resolve
            img.onerror = resolve
          })

          ctx.save()
          const radial = ctx.createRadialGradient(event.x, event.y, event.size, event.x, event.y, event.size + 40)
          radial.addColorStop(0, event.color + '44')
          radial.addColorStop(1, 'transparent')
          ctx.fillStyle = radial
          ctx.beginPath()
          ctx.arc(event.x, event.y, event.size + 40, 0, Math.PI * 2)
          ctx.fill()

          ctx.beginPath()
          ctx.arc(event.x, event.y, event.size, 0, Math.PI * 2)
          ctx.clip()
          ctx.filter = 'contrast(1.2) grayscale(0.5)'
          ctx.drawImage(img, event.x - event.size, event.y - event.size, event.size * 2, event.size * 2)
          ctx.fillStyle = event.color
          ctx.globalAlpha = 0.2
          ctx.fillRect(event.x - event.size, event.y - event.size, event.size * 2, event.size * 2)
          ctx.globalAlpha = 1
          ctx.restore()

          ctx.strokeStyle = event.color
          ctx.lineWidth = 4
          ctx.beginPath()
          ctx.arc(event.x, event.y, event.size, 0, Math.PI * 2)
          ctx.stroke()

          ctx.fillStyle = '#ffffff'
          ctx.font = 'bold 32px monospace'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(event.name, event.x, event.y + event.size + 45)
        } catch (e) {
          console.error('Failed to load', event.img)
        }
      }

      const texture = new THREE.CanvasTexture(canvas)
      globe.material = new THREE.MeshPhongMaterial({
        map: texture,
        emissive: 0x333333,
        shininess: 20,
        transparent: true
      })
      setMounted(true)
    }

    loadImagesAndDraw()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-black">
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
            <Link href="/gallery" className="text-sm text-amber-500 font-mono">
              GALLERY
            </Link>
          </div>
        </div>
      </nav>

      {/* 3D Globe Container */}
      <div className="pt-20 w-full h-screen flex flex-col items-center justify-center">
        <div ref={containerRef} className="w-full h-4/5 relative">
          {!mounted && (
            <div className="absolute inset-0 flex items-center justify-center text-amber-500 font-mono animate-pulse">
              INITIALIZING 3D INTERFACE...
            </div>
          )}
        </div>

        <div className="text-center py-8 px-4 font-mono">
          <h2 className="text-3xl font-black text-white mb-2 tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              EVENT SHOWCASE
            </span>
          </h2>
          <p className="text-gray-400 text-sm tracking-wide">[ INTERACTIVE 3D GALLERY ]</p>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 w-full z-40 border-t border-amber-700/20 backdrop-blur-md bg-black/50 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <span>[ GALLERY ]</span>
            <span className="text-amber-600 animate-pulse">●</span>
            <span>ROTATE TO EXPLORE</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-amber-500">[ VARNOTHSAVA 2026 ]</span>
          </div>
        </div>
      </div>
    </main>
  )
}