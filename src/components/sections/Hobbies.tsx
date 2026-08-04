import { motion } from 'framer-motion'
import {
  TbCode,
  TbDeviceMobile,
  TbDeviceGamepad2,
  TbBrandYoutube,
  TbGuitarPick,
  TbKarate,
  TbArrowUpRight,
} from 'react-icons/tb'
import Reveal from '../Reveal'
import { hobbies, type Hobby } from '../../data/content'

const ICONS: Record<Hobby['icon'], React.ComponentType<{ className?: string }>> = {
  guitar: TbGuitarPick,
  web: TbCode,
  app: TbDeviceMobile,
  gamedev: TbDeviceGamepad2,
  youtube: TbBrandYoutube,
  taekwondo: TbKarate,
}

function HobbyCard({ hobby, index }: { hobby: Hobby; index: number }) {
  const Icon = ICONS[hobby.icon]
  const isTaekwondo = hobby.id === 'taekwondo'
  const fromLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -50 : 50, y: 24 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group glass-panel relative flex h-[360px] flex-col overflow-hidden rounded-3xl p-7 transition-shadow duration-300 hover:box-glow-strong ${
        isTaekwondo ? 'bg-gradient-to-br from-surface-2 to-surface' : ''
      }`}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-neon/10 blur-2xl transition-all duration-300 group-hover:bg-neon/25" />

      <Icon className="relative h-9 w-9 shrink-0 text-neon" />
      <h3 className="relative mt-5 font-display text-xl font-bold text-ink">{hobby.title}</h3>
      <p className="relative mt-2 font-body text-sm text-mute">{hobby.blurb}</p>
      <p className="relative mt-4 line-clamp-4 font-body text-sm leading-relaxed text-ink/80">{hobby.detail}</p>

      <div className="relative mt-auto flex flex-col gap-4 pt-5">
        {hobby.link && (
          <a
            href={hobby.link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neon transition-colors hover:text-neon-soft"
          >
            {hobby.link.label}
            <TbArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
        {isTaekwondo && (
          <div className="flex flex-wrap gap-2 border-t border-neon/15 pt-4">
            <span className="rounded-full border border-neon/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-neon">
              3rd Dan Black Belt
            </span>
            <span className="rounded-full border border-neon/40 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-neon">
              Instructor since May 2023
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="relative w-full px-6 py-28 sm:px-12 lg:px-24">
      <Reveal>
        <span className="font-mono text-sm uppercase tracking-[0.35em] text-neon-dim">Beyond the code</span>
        <h2 className="mt-3 text-glow-soft font-display text-4xl font-bold uppercase text-ink sm:text-5xl">
          What I&rsquo;m Into
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby, i) => (
          <HobbyCard key={hobby.id} hobby={hobby} index={i} />
        ))}
      </div>
    </section>
  )
}
