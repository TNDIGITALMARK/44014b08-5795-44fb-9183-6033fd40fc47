'use client'

import { useEffect } from 'react'
import { X, Maximize2, RotateCcw, ZoomIn, ZoomOut, Camera } from 'lucide-react'

interface ARModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string | null
}

export function ARModal({ isOpen, onClose, productName }: ARModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-[95vw] h-[90vh] max-w-6xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background via-background/95 to-transparent p-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">AR Preview</h3>
            {productName && (
              <p className="text-muted-foreground text-sm mt-1">{productName}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* AR Viewer Area */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-card/50">
          <div className="text-center p-8 max-w-2xl">
            {/* 3D/AR Placeholder */}
            <div className="mb-8 relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Animated 3D Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/30 rounded-2xl animate-spin-slow flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-primary"
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
                </div>

                {/* AR Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-pulse">
                  AR READY
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Ready to Preview</h4>
              <p className="text-muted-foreground">
                On mobile devices, tap the AR button to place this furniture in your actual room using your camera. On desktop, use the 3D viewer to explore the item from all angles.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  360° Rotation
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Real Scale
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Room Placement
                </span>
              </div>

              {/* Action Button */}
              <button className="mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-[hsl(var(--primary-hover))] transition-all font-semibold text-lg shadow-lg flex items-center gap-3 mx-auto">
                <Camera className="w-6 h-6" />
                Launch AR Experience
              </button>

              <p className="text-xs text-muted-foreground mt-4">
                Note: AR features require camera access and a compatible device
              </p>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 flex items-center gap-2 border border-border">
          <button className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors" title="Zoom In">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors" title="Zoom Out">
            <ZoomOut className="w-5 h-5" />
          </button>
          <div className="w-px h-8 bg-border mx-2"></div>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors" title="Reset View">
            <RotateCcw className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors" title="Fullscreen">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
