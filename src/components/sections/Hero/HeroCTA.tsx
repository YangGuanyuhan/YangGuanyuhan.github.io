import { motion } from 'framer-motion'
import { Github, Mail, Phone, ExternalLink } from 'lucide-react'
import { fadeInUp } from '@/lib/motion'
import Button from '@/components/ui/Button'
import IconButton from '@/components/ui/IconButton'
import { profile } from '@/data/profile'

export default function HeroCTA() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.8 },
        },
      }}
    >
      <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeInUp}>
        <Button href="#projects" variant="primary">
          查看项目
        </Button>
        <Button href={profile.contact.github} variant="secondary">
          查看 GitHub <ExternalLink size={16} />
        </Button>
      </motion.div>

      <motion.div className="mt-6 flex gap-3" variants={fadeInUp}>
        <IconButton href={`mailto:${profile.contact.email}`} title="邮箱">
          <Mail size={18} />
        </IconButton>
        <IconButton href={`tel:${profile.contact.phone}`} title="电话">
          <Phone size={18} />
        </IconButton>
        <IconButton href={profile.contact.github} title="GitHub">
          <Github size={18} />
        </IconButton>
      </motion.div>
    </motion.div>
  )
}
