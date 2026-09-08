import { Compass } from 'lucide-react'
import { profile } from '@/data/profile'
export default function HobbyCards() {
  return (
    <div className="hobby-scene">
      <div className="scene-grid" aria-hidden="true" />
      <span className="scene-topline" lang="en">
        LIFE BEYOND THE SCREEN
      </span>
      {profile.hobbies.map((hobby, index) => (
        <figure
          className={`photo-card ${index === 0 ? 'photo-diving' : 'photo-ski'}`}
          key={hobby.title}
        >
          <img
            src={hobby.image}
            srcSet={hobby.srcSet}
            sizes={
              index === 0 ? '(max-width: 767px) 60vw, 340px' : '(max-width: 767px) 44vw, 240px'
            }
            alt={hobby.alt}
            width={960}
            height={hobby.height}
            decoding="async"
          />
          <figcaption className="photo-caption">
            <span>{index === 0 ? '01 / OCEAN' : '02 / SNOW'}</span>
            <strong>{hobby.title}</strong>
          </figcaption>
        </figure>
      ))}
      <div className="scene-label">
        <Compass size={23} strokeWidth={1.5} aria-hidden="true" />
        <span>保持好奇，继续探索。</span>
      </div>
    </div>
  )
}
