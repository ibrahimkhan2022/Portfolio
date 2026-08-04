import { Link } from 'react-router-dom'

type DemoTopBarProps = {
  accent?: string
}

export default function DemoTopBar({ accent = '#ffffff' }: DemoTopBarProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-[100] flex h-11 items-center justify-between gap-3 border-b border-white/10 bg-black/80 px-4 backdrop-blur-md sm:px-6">
      <Link
        to="/"
        className="flex items-center gap-2 text-xs font-medium text-white/80 transition-colors hover:text-white sm:text-sm"
      >
        <span aria-hidden="true">←</span>
        Back to Portfolio
      </Link>
      <span
        className="rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs"
        style={{ borderColor: `${accent}55` }}
      >
        Example Page · Not Live · Not Made For A Client
      </span>
    </div>
  )
}
