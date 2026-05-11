import HeroText from './HeroText'
import HeroCTA from './HeroCTA'
import HobbyCards from './HobbyCards'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-20">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-12 px-4 py-16 tablet:flex-row tablet:items-center tablet:gap-12 tablet:px-6 tablet:py-0 desktop:px-8">
        {/* Left: Text content */}
        <div className="flex-1">
          <HeroText />
          <HeroCTA />
        </div>

        {/* Right: Hobby cards */}
        <div className="flex-1 tablet:max-w-[440px]">
          <HobbyCards />
        </div>
      </div>
    </section>
  )
}
