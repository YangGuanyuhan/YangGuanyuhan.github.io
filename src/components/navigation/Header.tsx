import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'
import { useIsMobile } from '@/hooks/useMediaQuery'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-[100] transition-all duration-300"
        style={{
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          backgroundColor: scrolled
            ? 'rgba(250, 251, 253, 0.85)'
            : 'rgba(250, 251, 253, 0.4)',
          backdropFilter: 'blur(20px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        }}
      >
        <div className="mx-auto flex h-[60px] max-w-[1080px] items-center justify-between px-4 tablet:px-6 desktop:px-8">
          <a
            href="#hero"
            className="font-mono text-[var(--text-lg)] font-bold tracking-[-0.02em] text-[var(--text-primary)]"
          >
            YGH
          </a>

          {!isMobile && <NavLinks />}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </motion.header>

      {isMobile && (
        <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      )}
    </>
  )
}
