'use client'

import { useEffect, useRef, useState } from 'react'

const benefits = [
  {
    title: 'Mobile Optimized',
    description: 'Seamless 3D and AR experience on all devices, optimized for smartphones and tablets',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Fast Delivery in Pakistan',
    description: 'Quick 2-3 day shipping across all major cities including Karachi, Lahore, and Islamabad',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Sustainable Materials',
    description: 'Eco-friendly, responsibly sourced materials for all our furniture pieces',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Virtual Preview Guarantee',
    description: '100% satisfaction guarantee - what you see in AR is what you get delivered',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
]

export function WhyHomeSphere() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why HomeSphere 3D?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of furniture shopping with our innovative approach
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-background rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 transform ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } hover:scale-105`}
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transform hover:rotate-12 hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>

              {/* Decorative Element */}
              <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-primary/20 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Products</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">10k+</p>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">98%</p>
            <p className="text-muted-foreground">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">24/7</p>
            <p className="text-muted-foreground">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
