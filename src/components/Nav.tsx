import { useActiveSection } from '../hooks/useActiveSection'
import { SECTION_IDS } from './RobotCompanion'

const LABELS: Record<string, string> = {
  hero: 'Intro',
  hobbies: 'About',
  projects: 'Projects',
  clientWork: 'Client Work',
  contact: 'Contact',
}

export default function Nav() {
  const activeId = useActiveSection(SECTION_IDS)

  return (
    <nav className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex">
      {SECTION_IDS.map((id) => {
        const isActive = id === activeId
        return (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-3"
            aria-label={LABELS[id]}
          >
            <span
              className={`font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
                isActive ? 'translate-x-0 text-neon opacity-100' : 'translate-x-2 text-mute opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              }`}
            >
              {LABELS[id]}
            </span>
            <span
              className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                isActive
                  ? 'scale-125 border-neon bg-neon shadow-[0_0_10px_2px_rgba(166,255,0,0.6)]'
                  : 'border-mute/50 bg-transparent group-hover:border-neon'
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
