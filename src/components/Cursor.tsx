import { useEffect, useState } from 'react'

export function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div
        className="fixed w-2 h-2 bg-green rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="fixed w-9 h-9 rounded-full border border-green/40 pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  )
}