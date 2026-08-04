export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 grid-fade" />

      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-neon-deep/25 blur-[140px]" />
      <div className="absolute top-[35%] -right-52 h-[600px] w-[600px] rounded-full bg-neon/10 blur-[160px]" />
      <div className="absolute bottom-[-10%] left-[20%] h-[460px] w-[460px] rounded-full bg-neon-dim/15 blur-[150px]" />

      <div className="absolute inset-0 noise-bg" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />
    </div>
  )
}
