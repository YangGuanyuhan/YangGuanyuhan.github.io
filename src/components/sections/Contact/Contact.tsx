import { motion } from 'framer-motion'
import { Mail, Phone, Github } from 'lucide-react'
import Section from '@/components/layout/Section'
import SectionTitle from '@/components/layout/SectionTitle'
import StaggerChildren from '@/effects/StaggerChildren'
import Button from '@/components/ui/Button'
import { fadeInUp } from '@/lib/motion'
import { profile } from '@/data/profile'
import ContactCard from './ContactCard'

export default function Contact() {
  return (
    <Section id="contact" withGrid>
      <SectionTitle
        kicker="Contact"
        title="联系方式"
        description="期待与你一起创造更好的代码。"
      />

      <StaggerChildren className="grid grid-cols-1 gap-4 tablet:grid-cols-3 desktop:gap-6">
        <motion.div variants={fadeInUp}>
          <ContactCard
            icon={<Mail size={20} />}
            label="Email"
            value={profile.contact.email}
            href={`mailto:${profile.contact.email}`}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <ContactCard
            icon={<Phone size={20} />}
            label="Phone"
            value={profile.contact.phone}
            href={`tel:${profile.contact.phone}`}
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <ContactCard
            icon={<Github size={20} />}
            label="GitHub"
            value="YangGuanyuhan"
            href={profile.contact.github}
          />
        </motion.div>
      </StaggerChildren>

      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Button href={`mailto:${profile.contact.email}`} variant="primary">
          <Mail size={18} />
          发送邮件
        </Button>
      </motion.div>
    </Section>
  )
}
