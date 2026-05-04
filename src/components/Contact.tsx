import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, ExternalLink, Phone, MapPin, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    gsap.fromTo(
      content.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
    <section ref={sectionRef} id="contact" className="relative py-32 px-6 lg:px-12">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="text-[15vw] font-black text-[#0a0a0a] select-none whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#c8ff00] block mb-4">
          06 / Contact
        </span>

        {/* Big CTA Headline */}
        <h2 className="text-section font-bold leading-tight tracking-tight text-[#e5e5e5] mb-6 max-w-3xl">
          Want to build something together? Or just talk shop about sales automation and database design?
        </h2>

        <p className="text-[#888] max-w-xl mb-12 text-base">
          I'm currently open to opportunities in B2B SaaS, sales engineering, or technical business development roles. Let's connect.
        </p>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <a
            href="mailto:serdar.saglam@outlook.de"
            className="group p-5 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#c8ff00]/30 hover:glow-accent transition-all duration-500"
          >
            <Mail size={18} className="text-[#c8ff00] mb-3" />
            <div className="font-mono text-xs uppercase tracking-wider text-[#666] mb-1">Email</div>
            <div className="text-sm text-[#e5e5e5] group-hover:text-[#c8ff00] transition-colors flex items-center gap-2">
              serdar.saglam@outlook.de
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>

          <a
            href="https://linkedin.com/in/serdar-saglam"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#05d9e8]/30 transition-all duration-500"
          >
            <ExternalLink size={18} className="text-[#05d9e8] mb-3" />
            <div className="font-mono text-xs uppercase tracking-wider text-[#666] mb-1">LinkedIn</div>
            <div className="text-sm text-[#e5e5e5] group-hover:text-[#05d9e8] transition-colors flex items-center gap-2">
              linkedin.com/in/serdar-saglam
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>

          <div className="p-5 bg-[#0a0a0a] border border-[#1a1a1a]">
            <Phone size={18} className="text-[#c8ff00] mb-3" />
            <div className="font-mono text-xs uppercase tracking-wider text-[#666] mb-1">Phone</div>
            <div className="text-sm text-[#e5e5e5]">+49 176 80485453</div>
          </div>

          <div className="p-5 bg-[#0a0a0a] border border-[#1a1a1a]">
            <MapPin size={18} className="text-[#c8ff00] mb-3" />
            <div className="font-mono text-xs uppercase tracking-wider text-[#666] mb-1">Location</div>
            <div className="text-sm text-[#e5e5e5]">Frankfurt, Germany</div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="font-mono text-sm text-[#c8ff00]">
            &lt;serdar /&gt;
          </div>
          <div className="font-mono text-xs text-[#444] uppercase tracking-wider">
            Built with React + Tailwind + GSAP + Lenis
          </div>
          <div className="font-mono text-xs text-[#444]">
            &copy; {new Date().getFullYear()} Serdar Saglam
          </div>
        </div>
      </div>
    </section>
  )
}
