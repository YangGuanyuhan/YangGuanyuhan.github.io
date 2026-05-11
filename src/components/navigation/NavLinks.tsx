import { motion } from 'framer-motion'
import { useActiveSection } from '@/hooks/useActiveSection'

const navItems = [
  { id: 'about', label: '关于' },
  { id: 'skills', label: '技能' },
  { id: 'projects', label: '项目' },
  { id: 'contact', label: '联系' },
]

interface NavLinksProps {
  onNavigate?: () => void
}

export default function NavLinks({ onNavigate }: NavLinksProps) {
  const activeSection = useActiveSection()

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={onNavigate}
          className="relative px-4 py-2 text-[var(--text-sm)] font-medium transition-colors duration-200"
        >
          <span
            className={
              activeSection === item.id
                ? 'text-[var(--accent-blue)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }
          >
            {item.label}
          </span>
          {activeSection === item.id && (
            <motion.div
              className="absolute bottom-0 left-1/2 h-[3px] w-3 -translate-x-1/2 rounded-full bg-[var(--accent-blue)]"
              layoutId="activeNav"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
        </a>
      ))}
    </nav>
  )
}
