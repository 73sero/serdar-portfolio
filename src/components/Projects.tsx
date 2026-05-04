import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Folder } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const allProjects = [
  {
    id: 1,
    title: 'Corporate Website',
    tagline: 'FS Automobile Digital Presence',
    stack: ['HTML5', 'CSS3', 'JS', 'GitHub Pages'],
    description: 'Fully responsive corporate website for the automotive dealership. Mobile-first CSS grid, optimized image loading, custom contact form with validation.',
    outcome: 'Replaced outdated template with branded, fast storefront.',
    color: '#c8ff00',
  },
  {
    id: 2,
    title: 'MarketScout',
    tagline: 'B2B Lead Scraper & Analyzer',
    stack: ['Python', 'BeautifulSoup', 'Pandas', 'Matplotlib'],
    description: 'Python scraper ingesting business directories into analyzable datasets. Duplicate detection and industry segmentation via Pandas pipelines.',
    outcome: 'Reduced manual prospecting time by ~70%.',
    color: '#05d9e8',
  },
  {
    id: 3,
    title: 'InventoryIQ',
    tagline: 'Desktop Inventory Manager',
    stack: ['Java 17', 'JavaFX', 'SQLite', 'Maven'],
    description: 'Cross-platform desktop app for inventory tracking, supplier data, and reorder thresholds. Clean JavaFX UI with CRUD and real-time alerts.',
    outcome: 'Functional standalone system with OOP architecture.',
    color: '#c8ff00',
  },
  {
    id: 4,
    title: 'TUDB Student Records',
    tagline: 'Database Design & Implementation',
    stack: ['PostgreSQL', 'SQL', 'Python', 'psycopg2'],
    description: 'Relational database schema for student enrollment, courses, and grades. Complex SQL with JOINs, CTEs, aggregates, and transactions.',
    outcome: 'Full academic-grade DB from ER diagram to seeded data.',
    color: '#05d9e8',
  },
  {
    id: 5,
    title: 'TerritoryView',
    tagline: 'B2B Sales Dashboard',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    description: 'Interactive sales dashboard simulating PMI-level KPI visibility. Dynamic filters, drill-down tables, trend charts, revenue pacing, heatmaps.',
    outcome: 'B2B territory management reporting prototype.',
    color: '#c8ff00',
  },
  {
    id: 6,
    title: 'AutoNotify',
    tagline: 'Personal Sales Automation Pipeline',
    stack: ['Python', 'smtplib', 'Google Sheets API'],
    description: 'Lightweight automation reading Google Sheet follow-ups and auto-sending personalized reminder emails via SMTP at scheduled intervals.',
    outcome: 'Automates ~30 weekly follow-up tasks with zero dropout.',
    color: '#05d9e8',
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const grid = gridRef.current
    if (!section || !grid) return

    gsap.fromTo(
      grid.children,
      { y: 100, opacity: 0, rotateX: 10 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.15,
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
    <section ref={sectionRef} id="projects" className="relative py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#c8ff00] block mb-4">
            04 / Projects
          </span>
          <h2 className="text-section font-bold leading-tight tracking-tight text-[#e5e5e5] mb-4">
            Selected Work
          </h2>
          <p className="text-[#888] max-w-xl text-sm">
            A mix of technical coursework, independent builds, and business-driven tooling. Each project reflects the same mindset: solve real problems, measure outcomes, ship clean work.
          </p>
        </div>

        {/* Project Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#c8ff00]/30 transition-all duration-500 p-6 md:p-8 flex flex-col min-h-[320px]"
            >
              {/* Top row: icon + number */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-[#111] border border-[#222] group-hover:border-[#c8ff00]/30 transition-colors">
                  <Folder size={18} className="text-[#c8ff00]" />
                </div>
                <span className="font-mono text-xs text-[#333] group-hover:text-[#c8ff00] transition-colors">
                  0{project.id}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#e5e5e5] mb-1 group-hover:text-[#c8ff00] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#05d9e8] mb-4">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#888] leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-[#c8ff00]/70 italic">
                  {project.outcome}
                </p>
              </div>

              {/* Bottom: Tags */}
              <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#111] text-[#666] border border-[#222]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              {hoveredId === project.id && (
                <div
                  className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15 0%, transparent 70%)`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
