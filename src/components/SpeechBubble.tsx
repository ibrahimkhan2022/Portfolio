import { AnimatePresence, motion } from 'framer-motion'

type SpeechBubbleProps = {
  text: string | null
  side: 'left' | 'right'
}

export default function SpeechBubble({ text, side }: SpeechBubbleProps) {
  return (
    <div
      className="pointer-events-none absolute top-[-1.1rem] w-56 sm:w-64"
      style={
        side === 'right'
          ? { left: '100%', marginLeft: '0.75rem' }
          : { right: '100%', marginRight: '0.75rem' }
      }
    >
      <AnimatePresence mode="wait">
        {text && (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.94 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="glass-panel box-glow relative rounded-2xl px-4 py-3 text-left font-body text-sm text-ink"
          >
            {text}
            <span
              className="absolute top-5 h-3 w-3 rotate-45 border border-neon/15 bg-[#141c13]"
              style={
                side === 'right'
                  ? { left: '-6px', borderRight: 'none', borderTop: 'none' }
                  : { right: '-6px', borderLeft: 'none', borderBottom: 'none' }
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
