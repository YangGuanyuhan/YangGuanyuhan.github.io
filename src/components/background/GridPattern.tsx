export default function GridPattern() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.4]"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    />
  )
}
