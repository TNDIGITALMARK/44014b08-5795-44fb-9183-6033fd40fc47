'use client'

import { useState } from 'react'
import { ARModal } from './ar-modal'

const products = [
  {
    id: 1,
    name: 'Modern Accent Chair',
    description: 'Teal fabric with premium comfort',
    price: 45000,
    image: 'chair',
    category: 'Seating',
  },
  {
    id: 2,
    name: 'Minimalist Coffee Table',
    description: 'Walnut wood with clean lines',
    price: 32000,
    image: 'table',
    category: 'Tables',
  },
  {
    id: 3,
    name: 'Contemporary Floor Lamp',
    description: 'Brass finish with LED technology',
    price: 18000,
    image: 'lamp',
    category: 'Lighting',
  },
  {
    id: 4,
    name: 'Scandinavian Bookshelf',
    description: 'White oak with modern design',
    price: 28000,
    image: 'bookshelf',
    category: 'Storage',
  },
]

export function ProductGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [isARModalOpen, setIsARModalOpen] = useState(false)

  const handleARTry = (productName: string) => {
    setSelectedProduct(productName)
    setIsARModalOpen(true)
  }

  return (
    <>
      <section id="products" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of premium furniture. Each piece can be previewed in 3D and placed in your room using AR.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform: hoveredId === product.id ? 'translateY(-12px) rotateX(5deg)' : 'translateY(0) rotateX(0)',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                {/* Product Image Container */}
                <div className="relative h-64 bg-muted flex items-center justify-center overflow-hidden">
                  {/* 3D Icon Placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-card p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <svg
                          className="w-16 h-16 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {product.image === 'chair' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.5V4a2 2 0 012-2h14a2 2 0 012 2v5.5M3 9.5a2 2 0 002 2h14a2 2 0 002-2M3 9.5v9a2 2 0 002 2h14a2 2 0 002-2v-9M7 14h10" />
                          )}
                          {product.image === 'table' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 10v8a2 2 0 002 2h14a2 2 0 002-2v-8M3 10L5 6h14l2 4" />
                          )}
                          {product.image === 'lamp' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          )}
                          {product.image === 'bookshelf' && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v16h16V4H4zm0 0h16M8 8h8M8 12h8M8 16h8" />
                          )}
                        </svg>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">{product.category}</p>
                    </div>
                  </div>

                  {/* 3D Badge */}
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    3D
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <button
                      onClick={() => handleARTry(product.name)}
                      className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors transform scale-90 group-hover:scale-100"
                    >
                      Try in AR
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">
                      PKR {product.price.toLocaleString()}
                    </p>
                    <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* 3D Hover Effect Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-hover to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold">
              View All Products
            </button>
          </div>
        </div>
      </section>

      <ARModal
        isOpen={isARModalOpen}
        onClose={() => setIsARModalOpen(false)}
        productName={selectedProduct}
      />
    </>
  )
}
