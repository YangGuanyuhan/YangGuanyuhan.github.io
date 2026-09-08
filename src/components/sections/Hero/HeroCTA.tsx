import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import { profile } from '@/data/profile'
export default function HeroCTA() {
  return (
    <>
      <div className="hero-actions">
        <Button href="#projects">
          探索我的项目 <ArrowDown size={16} aria-hidden="true" />
        </Button>
        <Button href={profile.contact.github} variant="secondary">
          GitHub <ArrowUpRight size={16} aria-hidden="true" />
        </Button>
      </div>
      <p className="hero-note">
        <MapPin size={13} aria-hidden="true" /> 中国 · 深圳 <span aria-hidden="true">/</span>{' '}
        计算机视觉算法与后端开发实习
      </p>
    </>
  )
}
