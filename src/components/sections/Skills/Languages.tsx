import { Languages as LanguagesIcon } from 'lucide-react'
import { languages } from '@/data/skills'
export default function Languages() {
  return (
    <div className="languages">
      <span className="languages-label">
        <LanguagesIcon size={16} aria-hidden="true" />
        语言能力
      </span>
      {languages.map((language) => (
        <span key={language.name}>
          {language.name}
          <span>{language.level}</span>
        </span>
      ))}
    </div>
  )
}
