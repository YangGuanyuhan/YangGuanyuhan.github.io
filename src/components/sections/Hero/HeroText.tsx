import { profile } from '@/data/profile'
export default function HeroText() {
  return (
    <>
      <p className="hero-intro">
        <span className="status-dot" aria-hidden="true" />
        你好，我是 Guanyuhan
      </p>
      <h1 id="hero-title">{profile.name}</h1>
      <p className="hero-tagline" lang="en">
        Code. Explore. Repeat.
      </p>
      <p className="hero-description">
        <strong>南方科技大学 · 计算机科学与技术 · 2027 届</strong>
        <br />
        探索计算机视觉与后端工程，把算法变成可靠的系统。
        <br />
        在代码之外，也在山海之间，保持好奇。
      </p>
    </>
  )
}
