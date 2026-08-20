import { useEffect, useRef, useState } from 'react'
import { TbArrowUpRight } from 'react-icons/tb'
import Reveal from '../Reveal'
import { clientSites } from '../../data/content'

const PREVIEW_CONTENT_WIDTH = 1600
const PREVIEW_CONTENT_HEIGHT = 1400

function withBase(path: string) {
  return path.startsWith('/demos/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path
}

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '')
}

function LivePreview({ src, title }: { src: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    function update() {
      if (el) setScale(el.clientWidth / PREVIEW_CONTENT_WIDTH)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {scale > 0 && (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={{ width: PREVIEW_CONTENT_WIDTH, height: PREVIEW_CONTENT_HEIGHT, transform: `scale(${scale})` }}
        />
      )}
    </div>
  )
}

export default function ClientWork() {
  return (
    <section id="clientWork" className="relative w-full px-6 py-28 sm:px-12 lg:px-24">
      <Reveal>
        <span className="font-mono text-sm uppercase tracking-[0.35em] text-neon-dim">For businesses</span>
        <h2 className="mt-3 text-glow-soft font-display text-4xl font-bold uppercase text-ink sm:text-5xl">
          Client Websites
        </h2>
        <p className="mt-4 max-w-2xl font-body text-mute">
          I design and build custom websites for businesses that need more than a template —
          fast, responsive, and built to convert.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-col gap-6">
        {clientSites.map((site, i) => (
          <Reveal key={site.id} delay={i * 0.1}>
            <a
              href={withBase(site.href ?? '#')}
              target={site.href && site.href !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className="group glass-panel relative grid grid-cols-1 overflow-hidden rounded-3xl transition-all duration-300 hover:box-glow-strong md:grid-cols-[1fr_1.3fr]"
            >
              <div className="flex flex-col justify-center p-8">
                <h3 className="font-display text-2xl font-bold text-ink">{site.business}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-mute">{site.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {site.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-neon/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neon-soft"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neon transition-colors group-hover:text-neon-soft">
                  Visit site
                  <TbArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="relative flex h-full min-h-[220px] flex-col overflow-hidden border-t border-neon/10 bg-abyss md:border-l md:border-t-0">
                <div className="flex shrink-0 items-center gap-2 border-b border-neon/10 bg-surface px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: site.accent }} />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="ml-3 truncate rounded-md bg-void px-3 py-1 font-mono text-[10px] text-mute">
                    {slug(site.business)}.com
                  </span>
                </div>

                <div className="relative flex-1 overflow-hidden">
                  {site.href?.startsWith('/demos/') ? (
                    <LivePreview src={withBase(site.href)} title={`${site.business} live preview`} />
                  ) : (
                    <div
                      className="flex h-full items-center justify-center"
                      style={{ background: `radial-gradient(circle at 70% 30%, ${site.accent}22, transparent 60%)` }}
                    >
                      <div className="grid w-4/5 grid-cols-3 gap-2 opacity-50">
                        <div className="col-span-3 h-3 rounded" style={{ background: `${site.accent}55` }} />
                        <div className="col-span-2 h-14 rounded bg-white/10" />
                        <div className="h-14 rounded bg-white/5" />
                        <div className="h-2 rounded bg-white/10" />
                        <div className="h-2 rounded bg-white/10" />
                        <div className="h-2 rounded bg-white/10" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
