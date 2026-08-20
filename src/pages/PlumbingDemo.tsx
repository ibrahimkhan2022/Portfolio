import { motion } from 'framer-motion'
import {
  TbDroplet,
  TbFlame,
  TbAlertTriangle,
  TbTool,
  TbBolt,
  TbBath,
  TbShieldCheck,
  TbClock,
  TbAward,
  TbStarFilled,
  TbQuote,
  TbPhoneCall,
  TbMapPin,
  TbArrowRight,
  TbChevronRight,
} from 'react-icons/tb'
import DemoTopBar from '../components/DemoTopBar'
import heaterImg from '../assets/plumbing/plumbing.png'
import pipesImg from '../assets/plumbing/plumbingpipes.png'
import sinkImg from '../assets/plumbing/plumbsink.png'

const NAVY = '#0B1D33'
const NAVY_2 = '#12213A'
const ORANGE = '#FF6B35'

const bebas = { fontFamily: '"Bebas Neue", sans-serif' }
const inter = { fontFamily: '"Inter", sans-serif' }

const services = [
  { icon: TbDroplet, title: 'Drain Cleaning', desc: 'Fast, thorough clearing for slow or blocked drains — no guesswork, no repeat visits.' },
  { icon: TbFlame, title: 'Water Heater Repair & Install', desc: 'Tank and tankless systems, serviced or replaced by technicians who know both.' },
  { icon: TbAlertTriangle, title: 'Leak Detection & Repair', desc: 'Pinpoint diagnostics that find the source before it becomes a bigger problem.' },
  { icon: TbTool, title: 'Pipe Repiping', desc: 'Whole-home repiping for aging or failing supply lines, done with minimal disruption.' },
  { icon: TbBolt, title: 'Emergency Plumbing', desc: 'Burst pipes and major leaks don’t wait for business hours — neither do we.' },
  { icon: TbBath, title: 'Bathroom & Kitchen Fixtures', desc: 'Sinks, tubs, and fixture installs for remodels or straightforward swaps.' },
]

const jobs = [
  { title: 'Water Heater Installation', place: 'Millbrook, TX', image: heaterImg },
  { title: 'Full Home Repipe', place: 'Downtown Loft District', image: pipesImg },
  { title: 'Emergency Under-Sink Repair', place: 'Same-day, Riverside', image: sinkImg },
]

const reviews = [
  {
    name: 'Karen D.',
    text: 'Called at 9pm with a burst pipe and someone was at my door in 40 minutes. Fixed it right, explained everything, fair price.',
  },
  {
    name: 'Mike T.',
    text: 'Repiped our whole house over two days. Clean work, showed up when they said they would, no surprise charges at the end.',
  },
  {
    name: 'Priya R.',
    text: 'Third time using Ironclad for rental property issues. Always straightforward about what actually needs fixing.',
  },
]

const badges = [
  { icon: TbShieldCheck, label: 'Licensed & Insured' },
  { icon: TbClock, label: '24/7 Emergency Service' },
  { icon: TbAward, label: '15+ Years Experience' },
  { icon: TbStarFilled, label: '4.9 Rating · 312 Reviews' },
]

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function PlumbingDemo() {
  return (
    <div style={inter} className="min-h-screen bg-[#F4F6F8] text-[#101820]">
      <DemoTopBar accent={ORANGE} />

      <div style={{ paddingTop: 44 }}>
        {/* Utility strip */}
        <div style={{ background: NAVY_2 }} className="hidden items-center justify-between px-6 py-1.5 text-xs text-white/70 sm:flex lg:px-16">
          <span>Serving Millbrook &amp; the surrounding area</span>
          <span className="flex items-center gap-1.5">
            <TbPhoneCall className="h-3.5 w-3.5" /> (555) 018-2947 &middot; Open 24/7
          </span>
        </div>

        {/* Nav */}
        <nav style={{ background: NAVY }} className="sticky top-11 z-40 flex items-center justify-between px-6 py-4 lg:px-16">
          <span style={bebas} className="text-2xl tracking-wide text-white">
            IRON<span style={{ color: ORANGE }}>CLAD</span> PLUMBING
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {['Services', 'Work', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a
            href="tel:5550182947"
            className="rounded-lg px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105"
            style={{ background: ORANGE }}
          >
            Call Now
          </a>
        </nav>

        {/* Hero */}
        <header className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-16 lg:pb-32 lg:pt-24">
          <img src={pipesImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(160deg, ${NAVY}ee, ${NAVY_2}f2)` }}
          />
          <TbDroplet className="pointer-events-none absolute -right-16 top-10 h-96 w-96 opacity-[0.06]" style={{ color: ORANGE }} />
          <div className="relative mx-auto max-w-3xl">
            <Reveal>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
                Licensed &middot; Insured &middot; Family-Owned Since 2009
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 style={bebas} className="mt-5 text-5xl leading-[0.95] tracking-wide text-white sm:text-6xl lg:text-7xl">
                PLUMBING PROBLEMS DON&rsquo;T WAIT.
                <br />
                <span style={{ color: ORANGE }}>NEITHER DO WE.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-white/70">
                24/7 emergency repairs, upfront pricing, and plumbers who actually show up when they say
                they will — serving Millbrook and the surrounding area.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:5550182947"
                className="flex items-center gap-2 rounded-lg px-6 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105"
                style={{ background: ORANGE }}
              >
                <TbPhoneCall className="h-5 w-5" /> (555) 018-2947
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/10"
              >
                Get a Free Quote
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="relative mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-5 text-center">
                <Icon className="h-6 w-6" style={{ color: ORANGE }} />
                <span className="text-xs font-medium text-white/80">{label}</span>
              </div>
            ))}
          </Reveal>
        </header>

        {/* Services */}
        <section id="services" className="px-6 py-20 lg:px-16 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: ORANGE }}>
              What We Do
            </span>
            <h2 style={bebas} className="mt-3 text-4xl tracking-wide text-[#0B1D33] sm:text-5xl">
              FULL-SERVICE RESIDENTIAL &amp; COMMERCIAL PLUMBING
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${ORANGE}1a` }}>
                    <Icon className="h-6 w-6" style={{ color: ORANGE }} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#101820]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5B6675]">{desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: ORANGE }}>
                    Learn more
                    <TbChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Work */}
        <section id="work" style={{ background: NAVY }} className="px-6 py-20 lg:px-16 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: ORANGE }}>
              Recent Jobs
            </span>
            <h2 style={bebas} className="mt-3 text-4xl tracking-wide text-white sm:text-5xl">
              WORK WE&rsquo;VE DONE AROUND TOWN
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
            {jobs.map(({ image, title, place }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="group relative h-64 overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-white/70">
                      <TbMapPin className="h-3.5 w-3.5" /> {place}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="px-6 py-20 lg:px-16 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: ORANGE }}>
              Customer Reviews
            </span>
            <h2 style={bebas} className="mt-3 text-4xl tracking-wide text-[#0B1D33] sm:text-5xl">
              WHAT THE NEIGHBORHOOD SAYS
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                  <TbQuote className="h-6 w-6" style={{ color: ORANGE }} />
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <TbStarFilled key={idx} className="h-4 w-4" style={{ color: ORANGE }} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#3B4552]">{review.text}</p>
                  <p className="mt-4 text-sm font-bold text-[#101820]">{review.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section style={{ background: ORANGE }} className="px-6 py-14 text-center lg:px-16">
          <Reveal>
            <h2 style={bebas} className="text-3xl tracking-wide text-white sm:text-4xl">
              GOT A PLUMBING EMERGENCY? WE&rsquo;RE ONE CALL AWAY.
            </h2>
            <a
              href="tel:5550182947"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-bold"
              style={{ color: ORANGE }}
            >
              <TbPhoneCall className="h-5 w-5" /> (555) 018-2947
              <TbArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </section>

        {/* Footer / contact */}
        <footer id="contact" style={{ background: NAVY_2 }} className="px-6 py-14 text-white/70 lg:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <span style={bebas} className="text-xl tracking-wide text-white">
                IRON<span style={{ color: ORANGE }}>CLAD</span> PLUMBING
              </span>
              <p className="mt-3 text-sm">482 Foundry Rd, Millbrook, TX 75001</p>
              <p className="mt-1 text-sm">(555) 018-2947 &middot; hello@ironcladplumbingco.com</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Hours</h4>
              <p className="mt-3 text-sm">Emergency service: 24/7</p>
              <p className="mt-1 text-sm">Office: Mon&ndash;Sat, 7am&ndash;7pm</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Service Area</h4>
              <p className="mt-3 text-sm">Millbrook, Oakview, Riverside, and the Downtown Loft District</p>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/40">
            This is an example page built to showcase web design work. It is not live, and it was not built for an actual client.
          </div>
        </footer>
      </div>
    </div>
  )
}
