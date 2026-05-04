import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Handshake, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  { icon: Code, label: 'Code', desc: 'Python, SQL, Java, HTML/CSS' },
  { icon: Handshake, label: 'Deals', desc: 'Fortune 500 B2B sales' },
  { icon: TrendingUp, label: 'Growth', desc: '+21% territory expansion' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const pillarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const pillarsEl = pillarsRef.current
    if (!section || !text || !pillarsEl) return

    const words = text.querySelectorAll('.reveal-word')
    gsap.fromTo(
      words,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    gsap.fromTo(
      pillarsEl.children,
      { y: 60, opacity: 0, rotateX: 15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pillarsEl,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Section label */}
      <div className="max-w-7xl mx-auto mb-6">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#c8ff00]">
          01 / About
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Text */}
        <div ref={textRef}>
          <h2 className="text-section font-bold leading-tight tracking-tight mb-8 text-[#e5e5e5]">
            The kind of person who automates at 2 AM and closes a deal at 10 AM.
          </h2>

          <div className="space-y-6 text-base md:text-lg text-[#888] leading-relaxed">
            <p className="reveal-word">
              I'm the kind of person who automates a sales report at 2 AM and closes a six-figure deal at 10 AM the same day.
            </p>
            <p className="reveal-word">
              My journey started in automotive retail — 340 vehicles sold, €10k to €110k price points, end-to-end ownership from first handshake to financing paperwork.
            </p>
            <p className="reveal-word">
              Today, I'm a B2B Territory Manager at Philip Morris International while finishing my B.Sc. in Computer Science at TU Darmstadt. I don't just use CRMs — I think about how to improve them.
            </p>
            <p className="reveal-word text-[#c8ff00] font-medium">
              I believe the future of high-performing teams belongs to people who can speak both languages: business and code.
            </p>
          </div>
        </div>

        {/* Right: Pillars */}
        <div ref={pillarsRef} className="flex flex-col gap-6 lg:pt-20">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className="group relative p-6 md:p-8 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#c8ff00]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#c8ff00]/10 to-transparent" />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#111] border border-[#222] group-hover:border-[#c8ff00]/40 transition-colors">
                  <p.icon size={22} className="text-[#c8ff00]" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[#666] mb-1">
                    0{[1, 4, 7][i]} / {p.label}
                  </div>
                  <div className="text-lg font-semibold text-[#e5e5e5] mb-2">
                    {p.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
