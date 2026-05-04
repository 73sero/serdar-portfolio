import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const onEnterInteractive = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.5, duration: 0.3, borderColor: '#c8ff00' })
      gsap.to(dot, { scale: 0.5, backgroundColor: '#c8ff00', duration: 0.3 })
    }

    const onLeaveInteractive = () => {
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: 'rgba(200,255,0,0.4)', duration: 0.3 })
      gsap.to(dot, { scale: 1, backgroundColor: '#c8ff00', duration: 0.3 })
    }

    window.addEventListener('mousemove', onMove)

    // Track interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    let rafId: number
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15

      dot.style.transform = `translate(${target.current.x - 4}px, ${target.current.y - 4}px)`
      ring.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`

      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#c8ff00] pointer-events-none z-[9999] mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[rgba(200,255,0,0.4)] pointer-events-none z-[9998] transition-colors duration-300"
      />
    </>
  )
}
