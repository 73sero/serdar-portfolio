import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, ChevronRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    id: 1,
    company: 'Philip Morris International',
    role: 'B2B Territory Manager (Project Role)',
    previous: 'Sales Representative / Field Sales Executive',
    location: 'Frankfurt am Main, Germany',
    dates: 'Jun 2024 \u2013 Present',
    promoted: 'Oct 2025',
    highlights: [
      'Acquired 1,300+ new B2C customers in 18 months through field sales and POS network building.',
      'Promoted to B2B Territory Manager after growing territory distribution by +21% in 5 months.',
      'Managed ~65 commercial accounts using Salesforce CRM, Power BI & KPI dashboards.',
      'Balanced full-time CS studies with part-time sales leadership.',
    ],
    tags: ['Salesforce', 'Power BI', 'B2B', 'B2C'],
    metrics: [
      { label: 'Customers', value: '1300+' },
      { label: 'Growth', value: '+21%' },
      { label: 'Accounts', value: '65' },
    ],
    color: '#c8ff00',
  },
  {
    id: 2,
    company: 'FS Automobile',
    role: 'Automotive Sales Consultant',
    location: 'Frankfurt am Main, Germany',
    dates: 'Apr 2020 \u2013 Apr 2022',
    highlights: [
      'Sold 340 vehicles across 24 months (\u20ac10K \u2013 \u20ac110K price range).',
      'Managed full sales lifecycle: advisory, negotiation, financing, closing.',
      'Built strong referral base through trust-based advisory.',
    ],
    tags: ['Consultative Sales', 'Finance'],
    metrics: [
      { label: 'Vehicles', value: '340+' },
      { label: 'Range', value: '\u20ac10K\u2013\u20ac110K' },
      { label: 'Tenure', value: '24 Mo' },
    ],
    color: '#05d9e8',
  },
  {
    id: 3,
    company: 'GoNetwork GmbH',
    role: 'Administrative Intern \u2014 Real Estate',
    location: 'Darmstadt, Germany',
    dates: 'Aug 2018 \u2013 Jun 2019',
    highlights: [
      'Managed bookkeeping with Lexware for 100+ unit portfolio.',
      'First-point-of-contact for tenants, coordinating maintenance.',
    ],
    tags: ['Lexware', 'Property Mgmt'],
    metrics: [
      { label: 'Units', value: '100+' },
      { label: 'Duration', value: '10 Mo' },
    ],
    color: '#c8ff00',
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current
    if (!section || !cards) return

    gsap.fromTo(
      cards.children,
      { x: -60, opacity: 0, skewX: -2 },
      {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 1,
        stagger: 0.2,
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
    <section ref={sectionRef} id="experience" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#c8ff00] block mb-4">
              02 / Experience
            </span>
            <h2 className="text-section font-bold leading-tight tracking-tight text-[#e5e5e5]">
              Where I've<br />Delivered Results
            </h2>
          </div>
          <p className="text-[#888] max-w-sm text-sm">
            From Fortune 500 field sales to automotive retail to real estate ops — every role sharpened a different edge.
          </p>
        </div>

        {/* Experience Cards */}
        <div ref={cardsRef} className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`group relative p-6 md:p-8 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[${exp.color}]/30 transition-all duration-500 cursor-pointer ${activeIndex === idx ? 'glow-accent' : ''}`}
            >
              <div className="grid md:grid-cols-12 gap-6 items-start">
                {/* Left: Company & Date */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={14} className="text-[#666]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#666]">
                      {exp.dates}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#e5e5e5] mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-[#888]">{exp.location}</p>
                  {exp.promoted && (
                    <span className="inline-block mt-2 font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/20">
                      Promoted {exp.promoted}
                    </span>
                  )}
                </div>

                {/* Middle: Role & Highlights */}
                <div className="md:col-span-6">
                  <h4 className="text-lg font-semibold text-[#c8ff00] mb-3">
                    {exp.role}
                    {exp.previous && (
                      <span className="text-sm font-normal text-[#666] block mt-1">
                        Previously: {exp.previous}
                      </span>
                    )}
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#888]">
                        <ChevronRight size={14} className="text-[#c8ff00] mt-0.5 flex-shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Metrics */}
                <div className="md:col-span-3 flex flex-wrap gap-4 md:justify-end">
                  {exp.metrics?.map((m) => (
                    <div key={m.label} className="text-right">
                      <div className="font-mono text-2xl font-bold" style={{ color: exp.color }}>
                        {m.value}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-[#666]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 pt-4 border-t border-[#1a1a1a] flex gap-2 flex-wrap">
                {exp.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#111] text-[#666] border border-[#222] group-hover:border-[#c8ff00]/20 group-hover:text-[#c8ff00] transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
