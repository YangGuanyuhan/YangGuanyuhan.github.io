import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Mail } from 'lucide-react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { profile } from '@/data/profile'

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email)
      setCopied(true)
      setCopyStatus('邮箱已复制，期待你的来信。')
    } catch {
      setCopied(false)
      setCopyStatus('暂时无法自动复制，请长按或选中左侧邮箱地址进行复制。')
    }
  }
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <Container>
        <div className="contact-panel">
          <div className="contact-top">
            <div>
              <p className="eyebrow">05 / LET’S CONNECT</p>
              <h2 id="contact-title">
                下一件有意思的事，
                <wbr />
                <span className="keep-together">一起？</span>
              </h2>
              <p>实习机会、项目合作，或是关于技术与山海的一次交流。</p>
            </div>
            <Button href={`mailto:${profile.contact.email}`}>
              给我写封邮件 <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
          </div>
          <div className="contact-links">
            <a className="contact-link" href={`mailto:${profile.contact.email}`}>
              <Mail size={16} aria-hidden="true" />
              <span>{profile.contact.email}</span>
            </a>
            <a
              className="contact-link"
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} aria-hidden="true" />
              <span>YangGuanyuhan</span>
            </a>
            <button className="copy-button" onClick={copyEmail} type="button">
              {copied ? (
                <Check size={14} aria-hidden="true" />
              ) : (
                <Copy size={14} aria-hidden="true" />
              )}
              {copied ? '已复制' : '复制邮箱'}
            </button>
          </div>
          <span className="copy-status" role="status">
            {copyStatus}
          </span>
        </div>
      </Container>
    </section>
  )
}
