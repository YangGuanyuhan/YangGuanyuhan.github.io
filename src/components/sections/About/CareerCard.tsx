import GlassCard from '@/components/ui/GlassCard'
import { intentions, aboutDescription } from '@/data/education'

export default function CareerCard() {
  return (
    <GlassCard variant="default" hover>
      <div className="p-6">
        <h3 className="mb-4 text-[var(--text-xl)] font-semibold text-[var(--text-primary)]">
          职业意向
        </h3>
        <div className="space-y-3">
          {intentions.map((intention, i) => (
            <div key={i} className="flex items-center gap-2 text-[var(--text-base)] text-[var(--text-primary)]">
              <span className="text-[var(--accent-blue)]">▸</span>
              {intention}
            </div>
          ))}
          <p className="pt-2 text-[var(--text-sm)] leading-relaxed text-[var(--text-secondary)]">
            {aboutDescription}
          </p>
        </div>
      </div>
    </GlassCard>
  )
}
