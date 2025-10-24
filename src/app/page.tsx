import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ProductGrid } from '@/components/product-grid'
import { HowItWorks } from '@/components/how-it-works'
import { WhyHomeSphere } from '@/components/why-homesphere'
import { Footer } from '@/components/footer'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <HowItWorks />
        <WhyHomeSphere />
      </main>
      <Footer />
    </div>
  )
}
