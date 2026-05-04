import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    title: 'Sales & Business Operations',
    color: '#c8ff00',
    items: [
      { name: 'Salesforce CRM', level: 90 },
      { name: 'Power BI', level: 85 },
      { name: 'Excel', level: 85 },
      { name: 'KPI Reporting', level: 85 },
      { name: 'Lexware', level: 60 },
    ],
  },
  {
    title: 'Software & Development',
    color: '#05d9e8',
    items: [
      { name: 'Python', level: 70 },
      { name: 'SQL', level: 70 },
      { name: 'Java', level: 65 },
      { name: 'HTML / CSS / JS', level: 70 },
      { name: 'Git & GitHub', level: 65 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current
    if (!section || !cards) return

    // Animate cards in
    gsap.fromTo(
      cards.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Animate bars after cards appear
    const bars = cards.querySelectorAll('.skill-bar-fill')
    bars.forEach((bar) => {
      const target = (bar as HTMLElement).dataset.level
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${target}%`,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#c8ff00] block mb-4">
            03 / Skills & Tools
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-section font-bold leading-tight tracking-tight text-[#e5e5e5]">
              My Tech Stack.<br />My Sales Stack.
            </h2>
            <p className="text-[#888] max-w-sm text-sm">
              I don't list tools I "touched once." These are systems and languages I use daily or shipped real work with.
            </p>
          </div>
        </div>

        {/* Skill Categories */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 md:p-8 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[${cat.color}]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                <h3 className="font-mono text-sm uppercase tracking-widest text-[#e5e5e5]">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-5">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#aaa] group-hover:text-[#e5e5e5] transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-[#666]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-[#111] overflow-hidden">
                      <div
                        className="skill-bar-fill h-full transition-all duration-1000"
                        data-level={skill.level}
                        style={{
                          width: '0%',
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Other */}
        <div className="mt-8 p-6 md:p-8 bg-[#0a0a0a] border border-[#1a1a1a]">
          <h3 className="font-mono text-sm uppercase tracking-widest text-[#e5e5e5] mb-6">Languages & Other</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'German', level: 'Native' },
              { name: 'Kurdish', level: 'Native' },
              { name: 'English', level: 'Fluent' },
              { name: 'Turkish', level: 'Basic' },
              { name: 'French', level: 'Basic' },
              { name: 'Driver License A & B', level: 'Active' },
            ].map((lang) => (
              <div key={lang.name} className="p-4 bg-[#111] border border-[#222] hover:border-[#c8ff00]/30 transition-colors">
                <div className="font-mono text-xs text-[#c8ff00] mb-1">{lang.level}</div>
                <div className="text-sm text-[#aaa]">{lang.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
