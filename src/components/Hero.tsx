import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, Download } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const headline = headlineRef.current
    const sub = subRef.current
    const cta = ctaRef.current
    const stats = statsRef.current
    if (!section || !headline || !sub || !cta || !stats) return

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    // Headlines animation
    const lines = headline.querySelectorAll('.line')
    tl.fromTo(
      lines,
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
    )
    tl.fromTo(
      sub,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    )
    tl.fromTo(
      cta.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      '-=0.3'
    )
    tl.fromTo(
      stats.children,
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15 },
      '-=0.4'
    )

    // Scroll-based fade out
    gsap.to(headline, {
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: -100,
      opacity: 0,
    })

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()) }
  }, [])

  const handleScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault()
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100dvh] flex flex-col justify-center px-6 lg:px-12 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#c8ff00]/5 blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#05d9e8]/5 blur-[100px]" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Pre-headline tag */}
        <div className="mb-6 flex items-center gap-3">
          <span className="w-2 h-2 bg-[#c8ff00] rounded-full animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#888]">
            Available for opportunities
          </span>
        </div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-hero font-black leading-[0.9] tracking-tight mb-8"
        >
          <span className="line block overflow-hidden">
            <span className="block text-gradient-accent">I Write Code.</span>
          </span>
          <span className="line block overflow-hidden">
            <span className="block text-gradient-accent">I Close Deals.</span>
          </span>
          <span className="line block overflow-hidden">
            <span className="block text-[#e5e5e5]">I Build Growth.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="max-w-xl text-base md:text-lg text-[#888] leading-relaxed mb-10"
        >
          Business Developer by experience. Computer Scientist by training. I combine
          Fortune 500 sales execution with full-stack technical fluency to build
          tools, pipelines, and partnerships that scale.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest px-8 py-4 bg-[#c8ff00] text-[#050505] font-bold hover:glow-accent transition-all duration-300"
          >
            View Projects
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="mailto:serdar.saglam@outlook.de"
            className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest px-8 py-4 border border-[#333] text-[#e5e5e5] hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-300"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {[
            { value: '1,300+', label: 'Customers Acquired' },
            { value: '+21%', label: 'Territory Growth' },
            { value: '340', label: 'Vehicles Sold' },
            { value: '5+', label: 'Languages' },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="font-mono text-3xl md:text-4xl font-bold text-[#c8ff00] mb-1 group-hover:text-gradient-accent transition-all">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#666]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#444]">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#c8ff00] to-transparent" />
      </div>
    </section>
  )
}
