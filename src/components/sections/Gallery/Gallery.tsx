import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'
import { profile } from '@/data/profile'

export default function Gallery() {
  return (
    <Section id="gallery" className="gallery-section">
      <SectionTitle
        id="gallery-title"
        kicker="04 / OUTSIDE THE SCREEN"
        title="屏幕之外，也有热爱。"
        description="去看海、去山野，也去看未曾见过的新事物。"
      />
      <div className="gallery-grid">
        {profile.gallery.map((photo) => (
          <figure className={`gallery-card gallery-${photo.name}`} key={photo.name}>
            <img
              src={`/images/${photo.name}.webp`}
              srcSet={`/images/${photo.name}-small.webp 480w, /images/${photo.name}.webp 960w`}
              sizes="(max-width: 767px) calc(100vw - 40px), 33vw"
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>{photo.label}</span>
              <h3>{photo.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
