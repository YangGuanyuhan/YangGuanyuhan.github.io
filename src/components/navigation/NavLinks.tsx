import { useActiveSection } from '@/hooks/useActiveSection'
import { navigation } from '@/data/navigation'

export default function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const activeSection = useActiveSection()
  return (
    <nav className="nav-links" aria-label="主要导航">
      {navigation.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={onNavigate}
          aria-current={activeSection === item.id ? 'location' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
