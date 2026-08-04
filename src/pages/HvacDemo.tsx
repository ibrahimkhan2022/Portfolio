import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  TbAirConditioning,
  TbTool,
  TbWind,
  TbGauge,
  TbLeaf,
  TbBolt,
  TbSnowflake,
  TbFlame,
  TbThermometer,
  TbStarFilled,
  TbPhoneCall,
  TbCheck,
  TbArrowRight,
} from 'react-icons/tb'
import DemoTopBar from '../components/DemoTopBar'

const BLUE = '#1D6FE0'
const AMBER = '#F5A623'
const INK = '#0F1C2E'
const MUTE = '#62748A'
const GRADIENT = `linear-gradient(120deg, ${BLUE}, ${AMBER})`

const rajdhani = { fontFamily: '"Rajdhani", sans-serif', fontWeight: 700 }
const inter = { fontFamily: '"Inter", sans-serif' }

const services = [
  { icon: TbAirConditioning, title: 'AC Installation', desc: 'Right-sized systems installed by techs who don’t guess on load calculations.' },
  { icon: TbTool, title: 'Repair & Maintenance', desc: 'Seasonal tune-ups and fast repairs that keep small issues from becoming big bills.' },
  { icon: TbWind, title: 'Duct Cleaning & Sealing', desc: 'Better airflow, fewer hot and cold spots, lower energy bills.' },
  { icon: TbGauge, title: 'Smart Thermostats', desc: 'Setup and integration for thermostats that actually learn your schedule.' },
  { icon: TbLeaf, title: 'Indoor Air Quality', desc: 'Filtration and humidity control for homes with allergies or dust concerns.' },
  { icon: TbBolt, title: 'Emergency HVAC', desc: 'System down in a heatwave or cold snap? Same-day response, year-round.' },
]

const plans = [
  { name: 'Basic', price: '$12', features: ['Annual tune-up', 'Filter check', 'Priority scheduling'] },
  { name: 'Comfort', price: '$22', features: ['2 tune-ups/year', 'Priority scheduling', '15% off repairs', 'Duct inspection'], featured: true },
  { name: 'Premium', price: '$34', features: ['2 tune-ups/year', '24/7 priority response', '20% off repairs', 'Free filter replacements'] },
]

const reviews = [
  { name: 'Dana W.', text: 'Our AC died during a heatwave and they had someone out same afternoon. Explained the repair clearly, no upsell pressure.' },
  { name: 'Carlos M.', text: 'Switched to the Comfort plan two years ago. Zero surprise breakdowns since, and the tune-up techs are always on time.' },
  { name: 'Aisha B.', text: 'They fixed a duct issue two other companies missed. Genuinely knew what they were doing.' },
]

const stats = [
  { target: 15000, suffix: '+', label: 'Systems Serviced' },
  { target: 98, suffix: '%', label: 'Same-Day Response' },
  { target: 24, suffix: '', label: 'Years in Business' },
  { target: 4.8, suffix: '★', label: 'Average Rating', decimals: 1 },
]

function Counter({ target, suffix, decimals = 0 }: { target: number; suffix: string; decimals?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <span ref={ref} style={rajdhani} className="text-4xl text-white sm:text-5xl">
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

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

export default function HvacDemo() {
  return (
    <div style={{ ...inter, color: INK }} className="min-h-screen bg-[#F7F9FC]">
      <DemoTopBar accent={BLUE} />

      <div style={{ paddingTop: 44 }}>
        {/* Nav */}
        <nav className="sticky top-11 z-40 flex items-center justify-between border-b border-black/5 bg-white/90 px-6 py-4 backdrop-blur-md lg:px-16">
          <span style={rajdhani} className="text-xl" >
            AERO<span style={{ color: BLUE }}>TEMP</span>
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {['Services', 'Plans', 'Reviews', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium transition-colors" style={{ color: MUTE }}>
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105" style={{ background: GRADIENT }}>
            Schedule Service
          </a>
        </nav>

        {/* Hero */}
        <header className="relative overflow-hidden px-6 py-20 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white"
                  style={{ background: GRADIENT }}
                >
                  Residential &amp; Commercial HVAC
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 style={rajdhani} className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                  Comfort, engineered{' '}
                  <span style={{ background: GRADIENT, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                    for every season
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-lg text-lg" style={{ color: MUTE }}>
                  Heating, cooling, and air quality systems installed and maintained by technicians
                  who explain what they're doing — and why.
                </p>
              </Reveal>
              <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105" style={{ background: GRADIENT }}>
                  Free Estimate <TbArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:5550194821"
                  className="flex items-center gap-2 rounded-full border px-6 py-3.5 font-bold"
                  style={{ borderColor: `${BLUE}55`, color: BLUE }}
                >
                  <TbPhoneCall className="h-5 w-5" /> (555) 019-4821
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full opacity-20 blur-2xl" style={{ background: GRADIENT }} />
              <div className="absolute inset-4 rounded-full border-2 border-dashed" style={{ borderColor: `${BLUE}33` }} />
              <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-xl">
                <TbThermometer className="h-16 w-16" style={{ color: BLUE }} />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-2 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg"
              >
                <TbSnowflake className="h-6 w-6" style={{ color: BLUE }} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -right-2 bottom-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg"
              >
                <TbFlame className="h-6 w-6" style={{ color: AMBER }} />
              </motion.div>
            </Reveal>
          </div>
        </header>

        {/* Stats */}
        <section style={{ background: INK }} className="px-6 py-14 lg:px-16">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <Counter target={stat.target} suffix={stat.suffix} decimals={stat.decimals} />
                <p className="mt-2 text-xs uppercase tracking-widest text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="px-6 py-20 lg:px-16 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BLUE }}>
              What We Do
            </span>
            <h2 style={rajdhani} className="mt-3 text-3xl sm:text-4xl">
              Heating &amp; cooling, handled end to end
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-2xl border border-black/5 bg-white/70 p-7 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: GRADIENT }}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: MUTE }}>
                    {desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="px-6 py-20 lg:px-16 lg:py-28" style={{ background: '#EEF2F9' }}>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BLUE }}>
              Maintenance Plans
            </span>
            <h2 style={rajdhani} className="mt-3 text-3xl sm:text-4xl">
              Skip the surprise breakdowns
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div
                  className={`h-full rounded-2xl p-7 ${plan.featured ? 'text-white shadow-xl' : 'border border-black/5 bg-white'}`}
                  style={plan.featured ? { background: GRADIENT } : undefined}
                >
                  {plan.featured && (
                    <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="mt-2 text-3xl font-black">
                    {plan.price}
                    <span className="text-sm font-medium opacity-70">/mo</span>
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <TbCheck className="h-4 w-4 shrink-0" style={{ color: plan.featured ? '#fff' : BLUE }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="px-6 py-20 lg:px-16 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: BLUE }}>
              Customer Reviews
            </span>
            <h2 style={rajdhani} className="mt-3 text-3xl sm:text-4xl">
              Trusted by homeowners across the region
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ background: GRADIENT }}
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <TbStarFilled key={idx} className="h-4 w-4" style={{ color: AMBER }} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#374151' }}>
                    {review.text}
                  </p>
                  <p className="mt-4 text-sm font-bold">{review.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section style={{ background: GRADIENT }} className="px-6 py-14 text-center text-white lg:px-16">
          <Reveal>
            <h2 style={rajdhani} className="text-3xl sm:text-4xl">
              Stay comfortable all year. Schedule your service today.
            </h2>
            <a href="tel:5550194821" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold" style={{ color: BLUE }}>
              <TbPhoneCall className="h-5 w-5" /> (555) 019-4821
            </a>
          </Reveal>
        </section>

        {/* Footer */}
        <footer id="contact" style={{ background: INK }} className="px-6 py-14 text-white/60 lg:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <span style={rajdhani} className="text-lg text-white">
                AERO<span style={{ color: AMBER }}>TEMP</span>
              </span>
              <p className="mt-3 text-sm">1140 Coldwater Ave, Millbrook, TX 75001</p>
              <p className="mt-1 text-sm">(555) 019-4821 &middot; service@aerotempcomfort.com</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Hours</h4>
              <p className="mt-3 text-sm">Emergency service: 24/7</p>
              <p className="mt-1 text-sm">Office: Mon&ndash;Fri, 8am&ndash;6pm</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Service Area</h4>
              <p className="mt-3 text-sm">Millbrook and surrounding counties, residential &amp; light commercial</p>
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs text-white/30">
            This is an example page built to showcase web design work. It is not live, and it was not built for an actual client.
          </div>
        </footer>
      </div>
    </div>
  )
}
