import { ReactLenis } from 'lenis/react'
import NoiseOverlay from '@/components/background/NoiseOverlay'
import AuroraBackground from '@/components/background/AuroraBackground'
import GridPattern from '@/components/background/GridPattern'
import GlowOrb from '@/components/background/GlowOrb'
import CustomCursor from '@/effects/CustomCursor'
import ScrollProgress from '@/components/navigation/ScrollProgress'
import Header from '@/components/navigation/Header'
import Hero from '@/components/sections/Hero/Hero'
import About from '@/components/sections/About/About'
import Skills from '@/components/sections/Skills/Skills'
import Projects from '@/components/sections/Projects/Projects'
import Contact from '@/components/sections/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="relative min-h-screen bg-surface-base text-text-primary">
        <NoiseOverlay />
        <AuroraBackground />
        <GridPattern />
        <GlowOrb />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}
