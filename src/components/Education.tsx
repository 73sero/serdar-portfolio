import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const schools = [
  {
    name: 'Technical University of Darmstadt',
    degree: 'B.Sc. Computer Science',
    dates: 'Oct 2023 \u2013 Expected 2026',
    note: 'Transferred from Goethe University Frankfurt for specialization.',
    active: true,
  },
  {
    name: 'Goethe University Frankfurt',
    degree: 'B.Sc. Computer Science',
    dates: 'Apr 2022 \u2013 Oct 2023',
    note: 'Completed foundational coursework; transferred to TU Darmstadt.',
    active: false,
  },
  {
    name: 'ProGrenius Private School',
    degree: 'University Entrance Qualification (Fachhochschulreife)',
    dates: 'Aug 2017 \u2013 Jun 2019',
    note: '',
    active: false,
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const timeline = timelineRef.current
    if (!section || !timeline) return

    gsap.fromTo(
      timeline.children,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.25,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} id="education" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#c8ff00] block mb-4">
            05 / Education
          </span>
          <h2 className="text-section font-bold leading-tight tracking-tight text-[#e5e5e5]">
            Where I Learned<br />to Think
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative space-y-8">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#c8ff00]/50 via-[#c8ff00]/20 to-transparent" />

          {schools.map((school) => (
            <div key={school.name} className="relative pl-12 md:pl-16">
              {/* Dot */}
              <div
                className={`absolute left-[11px] md:left-[19px] top-2 w-3 h-3 rounded-full border-2 ${
                  school.active
                    ? 'bg-[#050505] border-[#c8ff00] shadow-[0_0_12px_rgba(200,255,0,0.5)]'
                    : 'bg-[#050505] border-[#333]'
                }`}
              />

              {/* Card */}
              <div className="p-6 md:p-8 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#c8ff00]/20 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={14} className="text-[#c8ff00]" />
                      <span className="font-mono text-xs uppercase tracking-widest text-[#666]">
                        {school.dates}
                      </span>
                      {school.active && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/20">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#e5e5e5] mb-1">
                      {school.name}
                    </h3>
                    <p className="text-sm text-[#888]">{school.degree}</p>
                  </div>
                </div>
                {school.note && (
                  <p className="text-sm text-[#666] italic border-l-2 border-[#333] pl-4">
                    {school.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
