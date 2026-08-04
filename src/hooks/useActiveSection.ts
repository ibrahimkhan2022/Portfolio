import { useEffect, useState } from 'react'

/**
 * Classic scrollspy: the active section is the last one (in document order)
 * whose top has crossed the reference line. Recomputed directly from scroll
 * position on every tick, so — unlike an IntersectionObserver threshold
 * approach — a short section can never get skipped between two callback
 * batches during a fast scroll.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    function updateActive() {
      const reference = window.innerHeight * 0.4
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= reference) {
          current = id
        }
      }
      setActiveId(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [sectionIds])

  return activeId
}
