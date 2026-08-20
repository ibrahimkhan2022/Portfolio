import { motion, type Variants } from 'framer-motion'
import { profile } from '../../data/content'

const NAME = profile.name

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
}

const letter: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -70 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const words = NAME.split(' ')

  return (
    <section
      id="hero"
      className="relative flex min-h-svh w-full flex-col justify-center px-6 sm:px-12 lg:px-24"
    >
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-neon-dim sm:text-base"
      >
        Hello, I&rsquo;m
      </motion.p>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        style={{ perspective: 800 }}
        className="max-w-5xl text-glow font-display text-[13vw] font-black uppercase leading-[0.95] text-ink sm:text-[9vw] lg:text-[7.2rem]"
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block"
                style={{ transformOrigin: 'bottom' }}
              >
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-6 max-w-xl font-body text-lg text-mute sm:text-xl"
      >
        Developer, guitarist, YouTuber, and 3rd dan black belt taekwondo instructor.
        I build things on screen and teach things on the mat.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="box-glow-strong rounded-full bg-neon px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-[#060806] transition-transform hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-neon/40 px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-neon transition-colors hover:bg-neon/10"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-10 left-6 flex items-center gap-3 sm:left-12 lg:left-24"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-neon/40 p-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-neon"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-mute">Scroll</span>
      </motion.div>
    </section>
  )
}
