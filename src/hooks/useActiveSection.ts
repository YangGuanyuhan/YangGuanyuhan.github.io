import { useEffect, useState } from 'react'
import { navigation } from '@/data/navigation'

export function useActiveSection(): string {
  const [active, setActive] = useState('hero')
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const marker = Math.min(window.innerHeight * 0.3, 200)
      let next = 'hero'
      for (const { id } of navigation) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= marker) next = id
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4)
        next = 'contact'
      setActive(next)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])
  return active
}
