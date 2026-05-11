import { motion, AnimatePresence } from 'framer-motion'
import NavLinks from './NavLinks'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-x-0 top-[60px] z-[90] border-b border-[var(--glass-border)] bg-[var(--surface-base)]/90 backdrop-blur-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-2 py-6">
            <NavLinks onNavigate={onClose} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
