import NavLinks from './NavLinks'
export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div id="mobile-navigation" className="mobile-menu">
      <NavLinks onNavigate={onClose} />
    </div>
  )
}
