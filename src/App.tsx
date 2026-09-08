import Header from '@/components/navigation/Header'
import Hero from '@/components/sections/Hero/Hero'
import About from '@/components/sections/About/About'
import Skills from '@/components/sections/Skills/Skills'
import Projects from '@/components/sections/Projects/Projects'
import Contact from '@/components/sections/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Experience from '@/components/sections/Experience/Experience'
import Gallery from '@/components/sections/Gallery/Gallery'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Skills />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
