"use client";
import { useState, useEffect, useRef, type ReactNode } from "react";

// ─── Icons ────────────────────────────────────────────────────────────────────
const Logo = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
    <path d="M6 18 L14 8 L22 18 L14 28 Z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
    <path d="M14 8 L30 8 L30 28 L14 28" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
    <circle cx="22" cy="18" r="2.5" fill="currentColor"/>
  </svg>
);
const MailIcon    = () => <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7L12 13 2 7"/></svg>;
// const GithubIcon  = () => <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
const LinkedInIcon= () => <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const ResumeIcon  = () => <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
const SunIcon     = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
const MoonIcon    = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
// const LeetCodeIcon= () => <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>;
const ExternalIcon= () => <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>;

// ─── Types ────────────────────────────────────────────────────────────────────
interface AvatarProps {
  size: number;
  accentColor: string;
  borderColor: string;
  shadowColor: string;
}

interface TopHeaderProps {
  dark: boolean;
  setDark: (fn: (v: boolean) => boolean) => void;
  setHovering: (v: boolean) => void;
  go: (id: string) => void;
  activeSection: string;
}

interface NavBtnProps {
  icon: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  showTooltip?: boolean;
  onHoverChange?: (v: boolean) => void;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

// ─── Avatar with image directory loading + fallback ───────────────────────────
function AvatarImage({ size, accentColor, borderColor, shadowColor }: AvatarProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
        border: `2px solid ${borderColor}`,
        boxShadow: `0 0 0 3px ${shadowColor}, 0 4px 20px rgba(0,0,0,0.3)`,
        background: "color-mix(in srgb, var(--accent) 13%, transparent)",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
    >
      {!error && (
        <img
          src="/images/varun.jpg"
          alt="Varun Dubey"
          onError={() => setError(true)}
          className="block h-full w-full object-cover object-top"
        />
      )}

      {error && (
        <div
          className="absolute inset-0 flex items-center justify-center select-none"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            fontSize: size * 0.34,
            color: accentColor,
            letterSpacing: "-0.02em",
          }}
        >
          VD
        </div>
      )}
    </div>
  );
}

// ─── Top Header Bar ───────────────────────────────────────────────────────────
function TopHeader({ dark, setDark, setHovering, go, activeSection }: TopHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[400] flex items-center justify-between"
      style={{
        padding: "0 clamp(16px, 5vw, 48px)",
        height: "clamp(58px, 7vw, 70px)",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <div className="flex items-center gap-[clamp(8px,1.5vw,14px)]">
        <AvatarImage
          size={38}
          accentColor="var(--accent)"
          borderColor="var(--accent)"
          shadowColor="var(--accent-soft)"
        />
        <div className="flex flex-col leading-[1.2]">
          <span
            className="serif font-semibold whitespace-nowrap"
            style={{
              fontSize: "clamp(14px, 1.6vw, 17px)",
              color: "var(--text)",
              letterSpacing: "-0.01em",
            }}
          >
            Varun Dubey
          </span>
          <span
            className="mono header-subtitle"
            style={{
              fontSize: "clamp(9px, 1vw, 11px)",
              color: "var(--muted)",
              letterSpacing: "0.05em",
            }}
          >
            Senior Software Engineer
          </span>
        </div>
      </div>

      <div className="header-nav flex items-center gap-1.5">
        {(["home","about","skills","experience","projects","connect"] as const).map(id => {
          const active = activeSection === id;
          const labels: Record<string, string> = { home:"Home", about:"About", skills:"Stack", experience:"Experience", projects:"Projects", connect:"Connect" };
          return (
            <button key={id} onClick={() => go(id)}
              onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
              className="mono rounded-lg whitespace-nowrap font-medium"
              style={{
                background: active ? "var(--accent-soft)" : "none",
                border: `1px solid ${active ? "var(--border)" : "transparent"}`,
                cursor: "none",
                padding: "5px 10px",
                fontSize: 11,
                fontWeight: 500,
                color: active ? "var(--accent)" : "var(--muted)",
                transition: "all 0.2s ease",
              }}>
              {labels[id]}
            </button>
          );
        })}
        <button onClick={() => setDark(v => !v)}
          onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
          className="flex items-center ml-1 rounded-lg"
          style={{
            background: "none",
            border: "1px solid var(--border)",
            cursor: "none",
            padding: "5px 9px",
            color: "var(--muted)",
            transition: "border-color 0.2s, color 0.2s",
          }}>
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}

// ─── NavBtn ───────────────────────────────────────────────────────────────────
function NavBtn({ icon, label, href, onClick, showTooltip = true, onHoverChange }: NavBtnProps) {
  const [hov, setHov] = useState(false);

  const handleEnter = () => { setHov(true);  onHoverChange?.(true);  };
  const handleLeave = () => { setHov(false); onHoverChange?.(false); };

  const innerStyle: Record<string, string | number> = {
    display: "flex", alignItems: "center", justifyContent: "center",
    width: 42, height: 42, borderRadius: 11, position: "relative" as const,
    color: hov ? "var(--accent)" : "var(--muted)",
    background: hov ? "var(--accent-soft)" : "transparent",
    transform: hov ? "scale(1.08)" : "scale(1)",
    transition: "color 0.2s, background 0.2s, transform 0.18s",
  };

  const tooltip = showTooltip && (
    <span
      className="whitespace-nowrap pointer-events-none z-10"
      style={{
        position: "absolute", left: "calc(100% + 14px)", top: "50%", transform: "translateY(-50%)",
        background: "var(--surface)", color: "var(--text)",
        padding: "5px 10px", borderRadius: 7,
        fontSize: 12, fontWeight: 500,
        border: "1px solid var(--border)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        opacity: hov ? 1 : 0,
        transition: "opacity 0.15s",
      }}
    >{label}</span>
  );

  if (onClick) return (
    <button onClick={onClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}
      className="inline-flex p-0"
      style={{ background: "none", border: "none", cursor: "none" }}>
      <span style={{ ...innerStyle, cursor: "none" }}>{icon}{tooltip}</span>
    </button>
  );

  return (
    <a href={href} target={href?.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}
      className="inline-flex no-underline"
      style={{ textDecoration: "none", cursor: "none" }}>
      <span style={{ ...innerStyle, cursor: "none" }}>{icon}{tooltip}</span>
    </a>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const skills: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  "Technologies & Tools": [
    "FastAPI","Flask","Next.js","React","Docker","Kubernetes","Kafka","Redis",
    "Elasticsearch","PostgreSQL","MySQL","Oracle","LangChain","LangGraph","LangFuse",
    "SQLAlchemy","Kibana","Zabbix","Azure DevOps","CI/CD","Agile","Gen AI / LLM","NoSQL","Excalidraw"
  ]
};

interface Experience {
  company: string;
  location: string;
  period: string;
  title: string;
  highlights: string[];
}

const experience: Experience[] = [
  {
    company: "ZS Associates", location: "Bangalore", period: "Nov 2024 – Present", title: "Senior Software Engineer",
    highlights: [
      "Leading Quill — an AI medical-legal review platform processing 150k+ docs with RAG retrieval and multi-agent orchestration.",
      "Migrated a legacy monolith to event-driven microservices (FastAPI, Celery, Redis, pgvector) deployed on Kubernetes.",
      "Built a multi-agent PoC with LangGraph; integrated Langfuse for real-time LLM observability and prompt tuning.",
    ]
  },
  {
    company: "Jio", location: "Navi Mumbai", period: "Jul 2022 – Nov 2024", title: "Software Development Engineer",
    highlights: [
      "Cut API response times from 60s → <500ms across 50+ endpoints via Python concurrency and Elasticsearch optimisation.",
      "Onboarded and monitored 1500+ government servers; built Kafka event streams and Kubernetes KPI microservices.",
      "Achieved ~100% network topology visibility through ARP data collection pipelines and graph visualisation.",
    ]
  }
];

interface Project {
  name: string;
  emoji: string;
  status: string;
  description: string;
  tags: string[];
  link: string;
  bar: string;
}

const projects: Project[] = [
  { name: "Dream Source",         emoji: "🌙", status: "Live",         description: "AI dream journaling — agentic Python backend (Groq) that uncovers patterns and symbols across your dream history.", tags: ["Python","Groq","AI Agents","Next.js"], link: "https://dream-source.app",          bar: "#a07050" },
  { name: "Dream Source POC",     emoji: "✨", status: "Archived",     description: "The original POC that sparked Dream Source. Early AI dream interpretation experiment, not actively maintained.",   tags: ["Python","AI","Dream Analysis"],       link: "https://dream-source-poc.vercel.app", bar: "#7a6248" },
  { name: "Quill — AI Review",    emoji: "📄", status: "Work Project", description: "Medical-legal document review platform with sentence-level RAG referencing across 150k+ docs.",                   tags: ["LangGraph","RAG","FastAPI","pgvector"],link: "#",                                  bar: "#6a5840" },
  { name: "Network Intelligence", emoji: "📡", status: "Work Project", description: "Real-time network monitoring for 1500+ government servers — KPI tracking, Kafka streams, topology graphs.",       tags: ["FastAPI","Kafka","Elasticsearch"],    link: "#",                                  bar: "#8c7050" },
];

// ─── Reveal hook ──────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function Reveal({ children, delay = 0 }: RevealProps) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(30px)",
      transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [dark, setDark]               = useState(true);

  // Sync dark mode to <html> data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  const [activeSection, setActiveSection] = useState("home");
  const [cursorSmooth, setCursorSmooth]   = useState({ x: -200, y: -200 });
  const [cursorRaw, setCursorRaw]         = useState({ x: -200, y: -200 });
  const [hovering, setHovering]           = useState(false);
  const cursorTarget = useRef({ x: -200, y: -200 });
  const rafId        = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };
      setCursorRaw({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);
    const tick = () => {
      setCursorSmooth(prev => ({
        x: prev.x + (cursorTarget.current.x - prev.x) * 0.1,
        y: prev.y + (cursorTarget.current.y - prev.y) * 0.1,
      }));
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); if (rafId.current !== null) cancelAnimationFrame(rafId.current); };
  }, []);

  const sectionIds = ["home","about","skills","experience","projects","connect"];
  useEffect(() => {
    const fn = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) { const r = el.getBoundingClientRect(); if (r.top <= 140 && r.bottom >= 140) { setActiveSection(id); break; } }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--bg)", color: "var(--text)", transition: "background 0.4s, color 0.4s" }}>

      {/* ── Grain overlay ── */}
      <div className="grain-overlay" />

      {/* ── Ambient light glow ── */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          left: cursorRaw.x - 300,
          top: cursorRaw.y - 300,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-soft) 0%, transparent 60%)",
          filter: "blur(80px)",
          transition: "background 0.3s",
        }}
      />

      {/* ── Custom cursor ── */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          left: cursorSmooth.x - 18,
          top: cursorSmooth.y - 18,
          width: 36,
          height: 36,
          border: "1.5px solid var(--accent)",
          opacity: hovering ? 0.9 : 0.4,
          transform: `scale(${hovering ? 1.7 : 1})`,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      />
      <div
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          left: cursorRaw.x - 3,
          top: cursorRaw.y - 3,
          width: 6,
          height: 6,
          background: "var(--accent)",
          opacity: hovering ? 0 : 0.9,
          transition: "opacity 0.2s",
        }}
      />

      {/* ══ TOP HEADER ══ */}
      <TopHeader
        dark={dark} setDark={setDark}
        setHovering={setHovering} go={go}
        activeSection={activeSection}
      />

      {/* ══ DESKTOP SIDE NAV ══ */}
      <div className="side-nav fixed right-6 top-1/2 -translate-y-1/2 z-[300]">
        <div
          className="flex flex-col items-center gap-0.5 rounded-[20px] px-1.5 py-2"
          style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
            transition: "background 0.4s, border-color 0.4s",
          }}
        >
          <NavBtn icon={<MailIcon />}     label="Email"    href="mailto:varundubey771@gmail.com" onHoverChange={setHovering} />
          {/* <NavBtn icon={<GithubIcon />}   label="GitHub"   href="https://github.com/" onHoverChange={setHovering} /> */}
          <NavBtn icon={<LinkedInIcon />} label="LinkedIn" href="https://www.linkedin.com/in/" onHoverChange={setHovering} />
          <NavBtn icon={<ResumeIcon />}   label="Resume"   href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0" onHoverChange={setHovering} />
        </div>
      </div>

      {/* ══ MOBILE BOTTOM BAR ══ */}
      <div
        className="mobile-bar fixed bottom-4 left-1/2 -translate-x-1/2 z-[300] rounded-[20px] px-2 py-1.5 flex flex-row items-center gap-0"
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow)",
          transition: "background 0.4s, border-color 0.4s",
        }}
      >
        <NavBtn showTooltip={false} icon={<MailIcon />}     label="Email"    href="mailto:varundubey771@gmail.com" onHoverChange={setHovering} />
        {/* <NavBtn showTooltip={false} icon={<GithubIcon />}   label="GitHub"   href="https://github.com/" onHoverChange={setHovering} /> */}
        <NavBtn showTooltip={false} icon={<LinkedInIcon />} label="LinkedIn" href="https://www.linkedin.com/in/" onHoverChange={setHovering} />
        <NavBtn showTooltip={false} icon={<ResumeIcon />}   label="Resume"   href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0" onHoverChange={setHovering} />
        <NavBtn showTooltip={false} icon={dark ? <SunIcon /> : <MoonIcon />} label="Theme" onClick={() => setDark(v => !v)} onHoverChange={setHovering} />
      </div>

      {/* ══════════ SECTIONS ══════════ */}
      <main style={{ paddingTop: "clamp(58px, 7vw, 70px)" }}>

        {/* ── HERO ── */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
          style={{ padding: "80px clamp(24px,7vw,100px)" }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                width: 700, height: 700,
                background: "var(--accent)",
                filter: "blur(140px)",
                opacity: dark ? 0.09 : 0.07,
                top: "-150px", right: "5%",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: 450, height: 450,
                background: "var(--accent)",
                filter: "blur(100px)",
                opacity: dark ? 0.07 : 0.05,
                bottom: "0", left: "-80px",
              }}
            />
          </div>
          <div className="relative z-10" style={{ maxWidth: 880 }}>
            <Reveal delay={0.1}>
              <h1 className="serif font-semibold leading-[1.0]"
                style={{
                  fontSize: "clamp(54px,9.5vw,108px)",
                  color: "var(--text)",
                  letterSpacing: "-0.01em",
                  marginBottom: 28,
                }}>
                Building systems<br /><em className="grad-text not-italic">that scale.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p style={{ fontSize: "clamp(15px,1.8vw,18px)", color: "var(--muted)", maxWidth: 480, lineHeight: 1.82, marginBottom: 40 }}>
                Senior SWE · Distributed systems, AI/LLM platforms, high-performance microservices. Currently at <strong className="font-semibold" style={{ color: "var(--text)" }}>ZS Associates</strong>, Bangalore.
              </p>
            </Reveal>
            <Reveal delay={0.38}>
              <div className="flex gap-3.5 flex-wrap">
                <button onClick={() => go("projects")} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                  className="rounded-[10px] font-semibold border-none"
                  style={{
                    padding: "13px 28px", fontSize: 14, cursor: "none",
                    fontFamily: "inherit",
                    background: "linear-gradient(135deg, var(--accent), var(--grad-end))",
                    color: "var(--btn-text)",
                  }}>
                  View Projects →
                </button>
                <button onClick={() => go("about")} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
                  className="rounded-[10px] font-semibold"
                  style={{
                    padding: "13px 28px", fontSize: 14, cursor: "none",
                    fontFamily: "inherit", background: "none",
                    border: "1.5px solid var(--border)",
                    color: "var(--muted)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseOver={e=>{e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent)";}}
                  onMouseOut={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--muted)";}}>
                  About Me
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about"
          style={{
            padding: "120px clamp(24px,7vw,100px)",
            background: "var(--bg-alt)",
            transition: "background 0.4s",
          }}>
          <div style={{ maxWidth: 880 }}>
            <Reveal>
              <p className="mono font-medium uppercase tracking-[0.12em]" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}>About</p>
              <h2 className="serif font-semibold leading-[1.05]"
                style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--text)", marginBottom: 40 }}>
                Crafting intelligent,<br /><em>resilient software.</em>
              </h2>
            </Reveal>
            <div style={{ maxWidth: 540 }}>
              <Reveal delay={0.1}>
                <div>
                  <p className="leading-[1.88]" style={{ color: "var(--muted)", fontSize: 15, marginBottom: 36 }}>
                    Backend-leaning engineer with a track record in distributed systems and AI platforms. At <strong style={{ color: "var(--text)" }}>ZS Associates</strong> I build AI-powered enterprise tooling; before that at <strong style={{ color: "var(--text)" }}>Jio</strong> I owned large-scale network intelligence infrastructure.
                  </p>
                  <a href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0" target="_blank" rel="noreferrer" onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
                    className="inline-flex items-center gap-2 rounded-[9px] font-semibold no-underline"
                    style={{
                      padding: "11px 22px", fontSize: 14, cursor: "none",
                      background: "linear-gradient(135deg, var(--accent), var(--grad-end))",
                      color: "var(--btn-text)",
                    }}>
                    View CV ↗
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills"
          style={{
            padding: "120px clamp(24px,7vw,100px)",
            background: "var(--bg)",
            transition: "background 0.4s",
          }}>
          <div style={{ maxWidth: 880 }}>
            <Reveal>
              <p className="mono font-medium uppercase tracking-[0.12em]" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}>Toolkit</p>
              <h2 className="serif font-semibold leading-[1.05]"
                style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--text)", marginBottom: 40 }}>Stack</h2>
            </Reveal>
            {Object.entries(skills).map(([cat, items], i) => (
              <Reveal key={cat} delay={i * 0.1}>
                <div
                  className="rounded-[18px]"
                  style={{
                    padding: 36,
                    marginBottom: 24,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    transition: "background 0.4s, border-color 0.4s",
                  }}>
                  <h3 className="mono font-medium tracking-[0.07em]" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 20 }}>
                    {cat === "Languages" ? "// languages" : "// technologies, tools & methods"}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map(s => (
                      <span key={s} className="mono inline-block font-medium"
                        onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
                        style={{
                          fontSize: 12, padding: "6px 14px", borderRadius: 6,
                          background: "var(--accent-soft)", color: "var(--tag-text)",
                          border: "1px solid var(--border)",
                          transition: "background 0.15s, transform 0.15s",
                        }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience"
          style={{
            padding: "120px clamp(24px,7vw,100px)",
            background: "var(--bg-alt)",
            transition: "background 0.4s",
          }}>
          <div style={{ maxWidth: 880 }}>
            <Reveal>
              <p className="mono font-medium uppercase tracking-[0.12em]" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}>Career</p>
              <h2 className="serif font-semibold leading-[1.05]"
                style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--text)", marginBottom: 44 }}>
                Experience
              </h2>
            </Reveal>
            <div>
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 0.12}>
                  <div style={{ marginBottom: 40 }}>
                    <div className="lift rounded-[18px]"
                      onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
                      style={{
                        padding: 36,
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        transition: "background 0.4s, border-color 0.4s",
                      }}>
                      <div className="flex justify-between items-start flex-wrap gap-3" style={{ marginBottom: 12 }}>
                        <div>
                          <h3 className="text-lg font-bold" style={{ color: "var(--text)", marginBottom: 4 }}>{job.title}</h3>
                          <div className="flex items-center gap-3">
                            <span className="font-semibold" style={{ color: "var(--accent)", fontSize: 14 }}>{job.company}</span>
                            <span style={{ color: "var(--muted)", fontSize: 12 }}>· {job.location}</span>
                          </div>
                        </div>
                        <span className="mono whitespace-nowrap font-medium"
                          style={{
                            background: "var(--accent-soft)", color: "var(--accent)",
                            padding: "4px 12px", borderRadius: 100, fontSize: 11,
                            border: "1px solid var(--border)",
                          }}>{job.period}</span>
                      </div>
                      <ul className="list-none flex flex-col gap-3" style={{ marginTop: 20 }}>
                        {job.highlights.map((h, j) => (
                          <li key={j} className="flex gap-3" style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.72 }}>
                            <span className="shrink-0 mt-[3px]" style={{ color: "var(--accent)", opacity: 0.65 }}>→</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects"
          style={{
            padding: "120px clamp(24px,7vw,100px)",
            background: "var(--bg)",
            transition: "background 0.4s",
          }}>
          <div style={{ maxWidth: 880 }}>
            <Reveal>
              <p className="mono font-medium uppercase tracking-[0.12em]" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}>Work</p>
              <h2 className="serif font-semibold leading-[1.05]"
                style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--text)", marginBottom: 44 }}>Live Projects</h2>
            </Reveal>
            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
              {projects.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.07}>
                  <div className="lift rounded-[22px] overflow-hidden flex flex-col h-full"
                    onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      transition: "background 0.4s, border-color 0.4s",
                    }}>
                    <div className="relative shrink-0 overflow-hidden"
                      style={{
                        height: 180,
                        background: dark ? `linear-gradient(135deg,${p.bar}22,${p.bar}44)` : `linear-gradient(135deg,${p.bar}18,${p.bar}38)`,
                      }}>
                      <svg className="absolute inset-0 w-full h-full" style={{ opacity: dark ? 0.12 : 0.08 }} xmlns="http://www.w3.org/2000/svg">
                        <defs><pattern id={`grid-${p.name.replace(/\s/g,"")}`} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke={p.bar} strokeWidth="0.5"/></pattern></defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${p.name.replace(/\s/g,"")})`}/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="float" style={{ fontSize: 56, filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.15))" }}>{p.emoji}</span>
                      </div>
                      <span className="mono absolute top-3 right-3 font-medium"
                        style={{
                          fontSize: 10, padding: "3px 9px", borderRadius: 100,
                          background: dark ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.7)",
                          color: "var(--accent)", border: "1px solid var(--border)",
                          backdropFilter: "blur(6px)",
                        }}>{p.status}</span>
                      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: p.bar }} />
                    </div>
                    <div className="flex-1 flex flex-col"
                      style={{ padding: 28 }}>
                      <h3 className="text-base font-bold" style={{ color: "var(--text)", marginBottom: 8 }}>{p.name}</h3>
                      <p className="flex-1" style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.72, marginBottom: 20 }}>{p.description}</p>
                      <div className="flex flex-wrap gap-2" style={{ marginBottom: 20 }}>
                        {p.tags.map(t => <span key={t} className="mono" style={{ fontSize: 10, padding: "4px 9px", background: "var(--accent-soft)", color: "var(--tag-text)", borderRadius: 4, border: "1px solid var(--border)" }}>{t}</span>)}
                      </div>
                      {p.link !== "#"
                        ? <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold no-underline" style={{ color: "var(--accent)", fontSize: 13, cursor: "none" }}>View Project <ExternalIcon /></a>
                        : <span style={{ color: "var(--muted)", fontSize: 12 }}>Private / Work Project</span>
                      }
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONNECT ── */}
        <section id="connect"
          style={{
            padding: "120px clamp(24px,7vw,100px)",
            background: "var(--bg-alt)",
            transition: "background 0.4s",
          }}>
          <div style={{ maxWidth: 680 }}>
            <Reveal>
              <p className="mono font-medium uppercase tracking-[0.12em]" style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}>Connect</p>
              <h2 className="serif font-semibold leading-[1.05]"
                style={{ fontSize: "clamp(36px,5vw,64px)", color: "var(--text)", marginBottom: 20 }}>
                Let's build<br /><em className="grad-text">something great.</em>
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.85, maxWidth: 400, marginBottom: 40 }}>
                Open to senior roles and interesting collaborations.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex gap-3 flex-wrap" style={{ marginBottom: 32 }}>
                {[
                  { label:"LinkedIn",  icon:<LinkedInIcon />,  href:"https://www.linkedin.com/in/" },
                  // { label:"LeetCode",  icon:<LeetCodeIcon />,  href:"https://leetcode.com/" },
                  // { label:"GitHub",    icon:<GithubIcon />,    href:"https://github.com/" },
                  { label:"Email",     icon:<MailIcon />,      href:"mailto:varundubey771@gmail.com" },
                ].map(({ label, icon, href }) => (
                  <a key={label} href={href} target={href.startsWith("mailto")?undefined:"_blank"} rel="noreferrer"
                    onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
                    className="flex items-center gap-[9px] rounded-[10px] no-underline font-semibold"
                    style={{
                      padding: "11px 20px", fontSize: 14, cursor: "none",
                      background: "var(--accent-soft)", color: "var(--accent)",
                      border: "1px solid var(--border)",
                      transition: "background 0.2s, transform 0.2s",
                    }}
                    onMouseOver={e=>{e.currentTarget.style.background="var(--accent)";e.currentTarget.style.color="var(--btn-text)";e.currentTarget.style.transform="translateY(-2px)";}}
                    onMouseOut={e=>{e.currentTarget.style.background="var(--accent-soft)";e.currentTarget.style.color="var(--accent)";e.currentTarget.style.transform="translateY(0)";}}>
                    {icon} {label}
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0" target="_blank" rel="noreferrer"
                onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
                className="inline-flex items-center gap-2 rounded-[10px] font-semibold no-underline"
                style={{
                  padding: "13px 26px", fontSize: 14, cursor: "none",
                  background: "linear-gradient(135deg, var(--accent), var(--grad-end))",
                  color: "var(--btn-text)",
                }}>
                View Full CV / Résumé ↗
              </a>
            </Reveal>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          className="flex justify-between items-center flex-wrap gap-3"
          style={{
            padding: "26px clamp(24px,7vw,100px)",
            borderTop: "1px solid var(--border)",
            background: "var(--bg)",
            transition: "background 0.4s",
          }}>
          <div className="flex items-center gap-[10px]" style={{ color: "var(--text)" }}>
            <Logo size={22} />
            <span className="serif font-semibold text-[15px]">Varun Dubey</span>
          </div>
          <p className="mono" style={{ color: "var(--muted)", fontSize: 11 }}>varundubeyyy.com · {new Date().getFullYear()}</p>
        </footer>

      </main>
    </div>
  );
}