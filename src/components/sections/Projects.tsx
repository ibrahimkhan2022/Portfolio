import { TbArrowUpRight } from 'react-icons/tb'
import Reveal from '../Reveal'
import { projects } from '../../data/content'

export default function Projects() {
  return (
    <section id="projects" className="relative w-full px-6 py-28 sm:px-12 lg:px-24">
      <Reveal>
        <span className="font-mono text-sm uppercase tracking-[0.35em] text-neon-dim">Selected work</span>
        <h2 className="mt-3 text-glow-soft font-display text-4xl font-bold uppercase text-ink sm:text-5xl">
          Projects
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <a
              href={project.href ?? '#'}
              target={project.href && project.href !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className="group glass-panel relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:box-glow-strong"
            >
              <div className="flex items-center gap-1.5 border-b border-neon/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: project.accent }} />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>

              <div
                className="relative flex h-40 items-center justify-center overflow-hidden"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${project.accent}33, transparent 60%), linear-gradient(160deg, #10160f, #050705)`,
                }}
              >
                <span
                  className="font-display text-6xl font-black opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                  style={{ color: project.accent }}
                >
                  {project.title.charAt(0)}
                </span>
                <div className="absolute inset-0 grid-fade opacity-40" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-ink">{project.title}</h3>
                  <TbArrowUpRight className="h-5 w-5 shrink-0 text-neon opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-mute">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neon/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neon-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
