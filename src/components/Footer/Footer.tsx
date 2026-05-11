import { Github, Mail } from 'lucide-react'
import Container from '@/components/layout/Container'
import { profile } from '@/data/profile'

const navLinks = [
  { label: '关于', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: profile.contact.github, icon: <Github size={16} /> },
  { label: 'Email', href: `mailto:${profile.contact.email}`, icon: <Mail size={16} /> },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-white/60 backdrop-blur-sm">
      <Container>
        <div className="flex flex-col gap-8 py-12 tablet:flex-row tablet:items-start tablet:justify-between">
          {/* Brand */}
          <div>
            <h3 className="font-mono text-[var(--text-lg)] font-bold text-[var(--text-primary)]">YGH</h3>
            <p className="mt-2 max-w-[300px] text-[var(--text-sm)] leading-relaxed text-[var(--text-secondary)]">
              南方科技大学 · 计算机科学与技术 · 追求极致的代码质量与算法效率
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 font-mono text-[var(--text-xs)] font-medium uppercase tracking-widest text-[var(--text-tertiary)]">
              导航
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-sm)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 font-mono text-[var(--text-xs)] font-medium uppercase tracking-widest text-[var(--text-tertiary)]">
              社交
            </h4>
            <nav className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-[var(--text-sm)] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-[var(--glass-border)] py-6 tablet:flex-row">
          <p className="text-[var(--text-xs)] text-[var(--text-tertiary)]">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[var(--text-xs)] text-[var(--text-tertiary)]">
            Built with React + TypeScript + Vite
          </p>
        </div>
      </Container>
    </footer>
  )
}
