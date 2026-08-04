import { TbBrandLinkedin, TbBrandGithub, TbMail, TbArrowUpRight } from 'react-icons/tb'
import Reveal from '../Reveal'
import { profile } from '../../data/content'

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-svh w-full flex-col justify-center px-6 py-28 sm:px-12 lg:px-24">
      <Reveal>
        <span className="font-mono text-sm uppercase tracking-[0.35em] text-neon-dim">Let&rsquo;s talk</span>
        <h2 className="mt-3 max-w-3xl text-glow font-display text-4xl font-black uppercase leading-tight text-ink sm:text-6xl">
          Got a project? Let&rsquo;s build it.
        </h2>
        <p className="mt-5 max-w-xl font-body text-lg text-mute">
          Whether it&rsquo;s a product idea, a business site, or just to talk code and guitars —
          reach out.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mt-12 flex flex-col gap-4 sm:flex-row">
        <a
          href={`mailto:${profile.email}`}
          className="box-glow-strong group flex items-center justify-between gap-6 rounded-2xl bg-neon px-7 py-5 text-[#060806] transition-transform hover:scale-[1.02]"
        >
          <span className="flex items-center gap-3">
            <TbMail className="h-6 w-6" />
            <span className="font-display text-base font-bold">{profile.email}</span>
          </span>
          <TbArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-6 rounded-2xl border border-neon/30 px-7 py-5 text-ink transition-colors hover:bg-neon/10"
        >
          <span className="flex items-center gap-3">
            <TbBrandLinkedin className="h-6 w-6 text-neon" />
            <span className="font-display text-base font-bold">LinkedIn</span>
          </span>
          <TbArrowUpRight className="h-5 w-5 text-neon transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-6 rounded-2xl border border-neon/30 px-7 py-5 text-ink transition-colors hover:bg-neon/10"
        >
          <span className="flex items-center gap-3">
            <TbBrandGithub className="h-6 w-6 text-neon" />
            <span className="font-display text-base font-bold">GitHub</span>
          </span>
          <TbArrowUpRight className="h-5 w-5 text-neon transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </Reveal>

      <Reveal delay={0.3} className="mt-20 border-t border-neon/10 pt-6">
        <p className="font-mono text-xs uppercase tracking-widest text-mute">
          {profile.name} — built with React, TypeScript &amp; a lot of glow.
        </p>
      </Reveal>
    </section>
  )
}
