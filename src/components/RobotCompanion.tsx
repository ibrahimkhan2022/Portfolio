import { useEffect, useRef, useState } from 'react'
import Robot from './Robot'
import SpeechBubble from './SpeechBubble'
import { useActiveSection } from '../hooks/useActiveSection'
import { sectionSpeech } from '../data/content'

type Anchor = { xPct: number; yPct: number; side: 'left' | 'right' }

export const SECTION_IDS = ['hero', 'hobbies', 'projects', 'clientWork', 'contact']

const DESKTOP_ANCHORS: Record<string, Anchor> = {
  hero: { xPct: 91, yPct: 62, side: 'left' },
  hobbies: { xPct: 7, yPct: 22, side: 'right' },
  projects: { xPct: 93, yPct: 20, side: 'left' },
  clientWork: { xPct: 7, yPct: 18, side: 'right' },
  contact: { xPct: 91, yPct: 30, side: 'left' },
}

const MOBILE_ANCHORS: Record<string, Anchor> = {
  hero: { xPct: 85, yPct: 10, side: 'left' },
  hobbies: { xPct: 85, yPct: 7, side: 'left' },
  projects: { xPct: 85, yPct: 7, side: 'left' },
  clientWork: { xPct: 85, yPct: 7, side: 'left' },
  contact: { xPct: 85, yPct: 7, side: 'left' },
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return isMobile
}

export default function RobotCompanion() {
  const activeId = useActiveSection(SECTION_IDS)
  const isMobile = useIsMobile()
  const anchors = isMobile ? MOBILE_ANCHORS : DESKTOP_ANCHORS
  const anchor = anchors[activeId] ?? anchors.hero

  const wrapperRef = useRef<HTMLDivElement>(null)
  const [pupil, setPupil] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let raf = 0
    function handleMove(e: MouseEvent) {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = wrapperRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height * 0.4
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.hypot(dx, dy) || 1
        // Offsets are applied inside the robot's SVG viewBox (1000 units), not screen px.
        const maxOffset = 28
        const pull = Math.min(1, dist / 260)
        setPupil({ x: (dx / dist) * maxOffset * pull, y: (dy / dist) * maxOffset * pull })
      })
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const [lineIndex, setLineIndex] = useState(0)
  const [speaking, setSpeaking] = useState(false)

  useEffect(() => {
    setLineIndex(0)
  }, [activeId])

  const lines = sectionSpeech[activeId] ?? []
  const currentLine = lines[lineIndex] ?? null

  useEffect(() => {
    if (!currentLine) return
    setSpeaking(true)
    const speakTimer = setTimeout(() => setSpeaking(false), 900)
    const nextTimer = setTimeout(() => {
      setLineIndex((i) => (i + 1 < lines.length ? i + 1 : i))
    }, 4200)
    return () => {
      clearTimeout(speakTimer)
      clearTimeout(nextTimer)
    }
  }, [currentLine, lines.length])

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: isMobile ? 76 : 136,
        left: `${anchor.xPct}%`,
        top: `${anchor.yPct}%`,
        transition: 'left 0.9s cubic-bezier(0.22, 1, 0.36, 1), top 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div className="relative animate-float">
        <Robot
          pupilX={pupil.x}
          pupilY={pupil.y}
          speaking={speaking}
          className="w-full drop-shadow-[0_0_22px_rgba(166,255,0,0.22)]"
        />
        <SpeechBubble text={currentLine} side={anchor.side} />
      </div>
    </div>
  )
}
