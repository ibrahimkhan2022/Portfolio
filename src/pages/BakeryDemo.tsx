import { motion } from 'framer-motion'
import { TbLeaf, TbStarFilled, TbQuote, TbMapPin, TbClock, TbArrowRight } from 'react-icons/tb'
import DemoTopBar from '../components/DemoTopBar'
import breadImg from '../assets/bakery/bread.png'
import bagelImg from '../assets/bakery/bagel.webp'
import croissantImg from '../assets/bakery/crossiant.png'
import fruitImg from '../assets/bakery/fruit.webp'
import rollsImg from '../assets/bakery/rolls.webp'
import cupcakeImg from '../assets/bakery/cupcake.png'

const TERRACOTTA = '#C1613F'
const GOLD = '#C9A227'
const CREAM = '#FBF3E7'
const INK = '#3A2A1E'
const MUTE = '#8A7364'

const fraunces = { fontFamily: '"Fraunces", serif' }
const frauncesItalic = { fontFamily: '"Fraunces", serif', fontStyle: 'italic' as const }
const inter = { fontFamily: '"Inter", sans-serif' }

const menu = [
  { image: breadImg, name: 'Classic Sourdough Loaf', desc: '48-hour fermented, crackling crust.', price: '$8' },
  { image: croissantImg, name: 'Pain au Chocolat', desc: 'Laminated fresh each morning.', price: '$4.50' },
  { image: rollsImg, name: 'Cinnamon Morning Rolls', desc: 'Brown sugar and orange zest.', price: '$5' },
  { image: fruitImg, name: 'Seasonal Fruit Tarts', desc: 'Whatever’s ripe this week.', price: '$6.50' },
  { image: bagelImg, name: 'Fresh Bagels', desc: 'Boiled and baked in small batches.', price: '$3.50' },
  { image: cupcakeImg, name: 'Strawberry Shortcake Cupcakes', desc: 'Vanilla bean, real strawberries.', price: '$4.75' },
]

const gallery = [
  { image: breadImg, label: 'Baked before sunrise, every day', span: 'lg:row-span-2 lg:col-span-1' },
  { image: cupcakeImg, label: 'Made for celebrations', span: '' },
  { image: rollsImg, label: 'A weekend favorite', span: '' },
  { image: croissantImg, label: 'Laminated by hand', span: '' },
  { image: fruitImg, label: 'Whatever fruit is ripe that week', span: '' },
]

const reviews = [
  { name: 'Nora J.', text: 'The sourdough alone is worth the drive. Been coming every Saturday for two years.' },
  { name: 'Theo P.', text: 'Ordered a custom cake for my daughter’s birthday — better than the photo I sent them.' },
  { name: 'Simone K.', text: 'Small place, huge flavor. The morning buns sell out by 9am for a reason.' },
]

function Reveal({ children, delay = 0, className, x }: { children: React.ReactNode; delay?: number; className?: string; x?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: x === undefined ? 26 : 0, x: x ?? 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function BakeryDemo() {
  return (
    <div style={{ ...inter, background: CREAM, color: INK }} className="min-h-screen">
      <DemoTopBar accent={TERRACOTTA} />

      <div style={{ paddingTop: 44 }}>
        {/* Nav */}
        <nav className="sticky top-11 z-40 flex items-center justify-between border-b border-black/5 bg-[#FBF3E7]/90 px-6 py-4 backdrop-blur-md lg:px-16">
          <span style={frauncesItalic} className="text-2xl" >
            Marigold
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {['Menu', 'Story', 'Gallery', 'Reviews', 'Visit'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium transition-colors" style={{ color: MUTE }}>
                {item}
              </a>
            ))}
          </div>
          <a href="#visit" className="rounded-full px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105" style={{ background: TERRACOTTA }}>
            Order Online
          </a>
        </nav>

        {/* Hero */}
        <header className="px-6 py-20 text-center lg:px-16 lg:py-28">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
              Artisan Bakery &middot; Est. 2016
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 style={fraunces} className="mx-auto mt-5 max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Baked fresh, every single morning.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg text-lg" style={{ color: MUTE }}>
              Small-batch bread, pastry, and cake from a neighborhood bakehouse that still does
              things the slow way.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#menu" className="flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-white shadow-lg transition-transform hover:scale-105" style={{ background: TERRACOTTA }}>
              See Today&rsquo;s Menu <TbArrowRight className="h-4 w-4" />
            </a>
            <a href="#visit" className="flex items-center gap-2 rounded-full border px-6 py-3.5 font-bold" style={{ borderColor: `${TERRACOTTA}55`, color: TERRACOTTA }}>
              Visit Us
            </a>
          </Reveal>

          <Reveal delay={0.4} className="mx-auto mt-16 flex max-w-2xl flex-wrap justify-center gap-6">
            {menu.map(({ image, name }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-16 overflow-hidden rounded-full border-2 shadow-sm"
                  style={{ borderColor: `${GOLD}55` }}
                >
                  <img src={image} alt={name} className="h-full w-full object-cover" />
                </div>
                <span className="max-w-[6rem] text-center text-xs" style={{ color: MUTE }}>
                  {name}
                </span>
              </div>
            ))}
          </Reveal>
        </header>

        {/* Menu */}
        <section id="menu" className="px-6 py-20 lg:px-16 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
              Today&rsquo;s Favorites
            </span>
            <h2 style={fraunces} className="mt-3 text-4xl sm:text-5xl">
              From the case
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map(({ image, name, desc, price }, i) => (
              <Reveal key={name} delay={(i % 3) * 0.08}>
                <div className="group h-full overflow-hidden rounded-2xl border border-black/5 bg-white/60 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 style={fraunces} className="text-lg">
                        {name}
                      </h3>
                      <span className="font-bold" style={{ color: GOLD }}>
                        {price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm" style={{ color: MUTE }}>
                      {desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Story */}
        <section id="story" className="px-6 py-20 lg:px-16 lg:py-28" style={{ background: '#F3E6D3' }}>
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal x={-40}>
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
                Our Story
              </span>
              <h2 style={fraunces} className="mt-3 text-3xl sm:text-4xl">
                Started in a home kitchen. Still baked the same way.
              </h2>
              <p className="mt-5 leading-relaxed" style={{ color: '#5B4636' }}>
                Marigold started as a Saturday farmers-market stand in 2016 — a folding table, two
                sourdough loaves, and a lot of trial and error. A few hundred loaves later, we
                opened our doors on Elm Street. The recipes haven&rsquo;t changed much. Everything
                is still mixed, shaped, and baked in-house before sunrise.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <TbLeaf className="h-5 w-5" style={{ color: TERRACOTTA }} />
                <span className="text-sm font-medium" style={{ color: '#5B4636' }}>
                  Locally sourced flour &amp; seasonal fruit, whenever we can get it.
                </span>
              </div>
            </Reveal>

            <Reveal x={40} delay={0.1} className="relative mx-auto flex h-72 w-72 items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `${GOLD}55` }} />
              <div className="absolute inset-6 rounded-full opacity-30 blur-xl" style={{ background: TERRACOTTA }} />
              <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <img src={breadImg} alt="Fresh bread" className="h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="px-6 py-20 lg:px-16 lg:py-28">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
              A Peek Inside
            </span>
            <h2 style={fraunces} className="mt-3 text-4xl sm:text-5xl">
              What we&rsquo;re known for
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl auto-rows-[160px] grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.map(({ image, label, span }, i) => (
              <Reveal key={label} delay={i * 0.08} className={span}>
                <div className="group relative h-full overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <span className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="px-6 py-20 lg:px-16 lg:py-28" style={{ background: '#F3E6D3' }}>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: TERRACOTTA }}>
              Kind Words
            </span>
            <h2 style={fraunces} className="mt-3 text-4xl sm:text-5xl">
              From our regulars
            </h2>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm">
                  <TbQuote className="h-6 w-6" style={{ color: GOLD }} />
                  <p style={frauncesItalic} className="mt-3 text-lg leading-relaxed">
                    {review.text}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-bold">{review.name}</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <TbStarFilled key={idx} className="h-3.5 w-3.5" style={{ color: GOLD }} />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Visit */}
        <footer id="visit" style={{ background: INK }} className="px-6 py-16 text-white/70 lg:px-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span style={frauncesItalic} className="text-2xl text-white">
              Marigold Bakehouse
            </span>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm">
              <TbMapPin className="h-4 w-4" style={{ color: GOLD }} /> 214 Elm Street, Millbrook, TX 75001
            </p>
            <p className="mt-2 flex items-center justify-center gap-2 text-sm">
              <TbClock className="h-4 w-4" style={{ color: GOLD }} /> Tue&ndash;Sun, 7am&ndash;3pm &middot; Closed Mondays
            </p>
            <a
              href="#menu"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white"
              style={{ background: TERRACOTTA }}
            >
              Order Ahead <TbArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-white/30">
            This is an example page built to showcase web design work. It is not live, and it was not built for an actual client.
          </div>
        </footer>
      </div>
    </div>
  )
}
