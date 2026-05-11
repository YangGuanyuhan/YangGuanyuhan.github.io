import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact']

export function useActiveSection(): string {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        {
          threshold: 0.3,
          rootMargin: '-20% 0px -60% 0px',
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return active
}
