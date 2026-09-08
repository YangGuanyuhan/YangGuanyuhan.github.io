import { ArrowUp } from 'lucide-react'
import Container from '@/components/layout/Container'
import { profile } from '@/data/profile'
export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <span className="footer-motto" lang="en">
          Built with care. Driven by curiosity.
        </span>
        <a className="text-link" href="#hero">
          回到顶部 <ArrowUp size={14} aria-hidden="true" />
        </a>
      </Container>
    </footer>
  )
}
