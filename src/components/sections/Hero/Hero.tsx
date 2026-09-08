import { ArrowDown, Code2, Cpu, ScanLine } from 'lucide-react'
import Container from '@/components/layout/Container'
import HeroText from './HeroText'
import HeroCTA from './HeroCTA'
import HobbyCards from './HobbyCards'

const focusAreas = [
  { title: '计算机视觉', label: 'Computer Vision', icon: ScanLine },
  { title: '后端开发', label: 'Backend Engineering', icon: Code2 },
  { title: '边缘智能', label: 'Edge AI', icon: Cpu },
]
export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero-layout">
          <div className="hero-copy">
            <HeroText />
            <HeroCTA />
          </div>
          <HobbyCards />
        </div>
        <div className="focus-strip">
          {focusAreas.map(({ title, label, icon: Icon }) => (
            <div key={label} className="focus-item">
              <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <span>{label}</span>
              </div>
            </div>
          ))}
          <a href="#projects" className="scroll-cue">
            EXPLORE MY WORK <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  )
}
