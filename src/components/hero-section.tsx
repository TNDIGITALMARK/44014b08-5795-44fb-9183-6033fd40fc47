'use client'

import { useState } from 'react'
import { ARModal } from './ar-modal'

export function HeroSection() {
  const [isARModalOpen, setIsARModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="text-center md:text-left z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Visualize Furniture in <span className="text-primary">Your Space</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience the future of furniture shopping with 3D and AR preview. See exactly how items look in your home before you buy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => setIsARModalOpen(true)}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-[hsl(var(--primary-hover))] transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  TRY IT IN YOUR ROOM
                </button>
                <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold text-lg">
                  Browse Collection
                </button>
              </div>
            </div>

            {/* 3D Model Container */}
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Rotating 3D Model Placeholder - In production, this would use Three.js */}
                <div className="relative w-full h-full max-w-[500px] max-h-[500px] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl animate-pulse"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="w-4/5 h-4/5 bg-gradient-to-br from-card to-muted rounded-2xl shadow-2xl flex items-center justify-center transform hover:rotate-3 transition-transform duration-700 cursor-grab active:cursor-grabbing border border-border">
                      <div className="text-center p-8">
                        <div className="w-32 h-32 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                          <svg
                            className="w-20 h-20 text-primary animate-spin-slow"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                          3D Model: Luxe Grey Sectional
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Drag to rotate • Scroll to zoom
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-border">
                <p className="text-sm font-medium">PKR 89,000</p>
                <p className="text-xs text-muted-foreground">Free Delivery</p>
              </div>

              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-border">
                <p className="text-xs text-primary font-semibold">360° VIEW</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      <ARModal isOpen={isARModalOpen} onClose={() => setIsARModalOpen(false)} />
    </>
  )
}
