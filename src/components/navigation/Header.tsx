import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'
import Container from '@/components/layout/Container'
import NavLinks from './NavLinks'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    const media = window.matchMedia('(min-width: 768px)')
    const onResize = () => {
      if (media.matches) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointer)
    media.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointer)
      media.removeEventListener('change', onResize)
    }
  }, [menuOpen])

  return (
    <header className="site-header" ref={headerRef}>
      <Container className="header-inner">
        <a
          href="#hero"
          className="brand"
          aria-label="杨官宇涵 · 返回首页"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            YGH
          </span>
          <span>
            Guanyuhan Yang<span style={{ color: 'var(--accent-blue)' }}>.</span>
          </span>
        </a>
        <div className="desktop-nav">
          <NavLinks />
        </div>
        <a className="header-contact" href={`mailto:${profile.contact.email}`}>
          一起聊聊 <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          ref={buttonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </Container>
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  )
}
