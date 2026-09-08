import { profile } from '@/data/profile'
export default function HeroText() {
  return (
    <>
      <p className="hero-intro">
        <span className="status-dot" aria-hidden="true" />
        COMPUTER SCIENCE · SUSTECH
      </p>
      <h1 id="hero-title">{profile.name}</h1>
      <p className="hero-tagline" lang="en">
        Code. Explore. Repeat.
      </p>
      <p className="hero-description">
        <strong>南方科技大学 · 计算机科学与技术 · 2027 届</strong>
        <br />
        关注计算机视觉、开源软件与 AI 应用。
        <br />
        认真打磨每一次实现，也为生活保留好奇。
      </p>
    </>
  )
}
