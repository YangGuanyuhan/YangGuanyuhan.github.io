import { Mail, Phone, Github } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'yanggyh2023@mail.sustech.edu.cn',
      href: 'mailto:yanggyh2023@mail.sustech.edu.cn'
    },
    {
      icon: Phone,
      label: '电话',
      value: '183-8731-1225',
      href: 'tel:+8618387311225'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/YangGuanyuhan',
      href: 'https://github.com/YangGuanyuhan',
      external: true
    }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">联系方式</h2>

        <div className="contact-content">
          <div className="contact-intro fade-in">
            <h3>让我们一起创造更好的代码！</h3>
            <p>如果你有任何合作机会、问题或建议，欢迎通过以下方式与我联系。</p>
          </div>

          <div className="contact-grid">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <a
                  key={idx}
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  className="contact-card slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="contact-icon">
                    <Icon size={32} />
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value">{contact.value}</div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* 附加CTA */}
          <div className="contact-cta">
            <p>或者随时 <a href="mailto:yanggyh2023@mail.sustech.edu.cn">发送邮件</a> 给我</p>
          </div>
        </div>
      </div>
    </section>
  )
}
