import { ArrowDown, ArrowUpRight, GitPullRequest } from 'lucide-react'
import Container from '@/components/layout/Container'
import { profile } from '@/data/profile'
import HeroText from './HeroText'
import HeroCTA from './HeroCTA'

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <Container>
        <div className="hero-layout">
          <div className="hero-copy">
            <HeroText />
            <HeroCTA />
          </div>
          <div className="hero-visual">
            <div className="hero-halo" aria-hidden="true" />
            <figure className="portrait-card">
              <img
                src={profile.portrait.image}
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 767px) calc(100vw - 72px), 420px"
                alt={profile.portrait.alt}
                width="960"
                height="1280"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption>
                <span>GUANYUHAN YANG</span>
                <span>一些认真，一些自由。</span>
              </figcaption>
            </figure>
            <a className="portrait-note glass-panel" href="#projects">
              <GitPullRequest size={20} strokeWidth={1.5} aria-hidden="true" />
              <span>
                <strong>OpenCV contributor</strong>
                <small>从个人探索，到上游贡献</small>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="focus-strip">
          <div>
            <span>01</span>
            <strong>计算机视觉</strong>
            <small>Computer Vision</small>
          </div>
          <div>
            <span>02</span>
            <strong>开源与工程</strong>
            <small>Open Source & Engineering</small>
          </div>
          <div>
            <span>03</span>
            <strong>AI 应用</strong>
            <small>Applied AI</small>
          </div>
          <a href="#experience" className="scroll-cue" aria-label="向下探索经历">
            <ArrowDown size={20} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  )
}
