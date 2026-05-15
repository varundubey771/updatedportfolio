"use client";

import { Reveal } from "@/app/components/ui/Reveal";

interface HeroProps {
  dark: boolean;
  go: (id: string) => void;
  setHovering: (v: boolean) => void;
}

export function Hero({ dark, go, setHovering }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: "80px clamp(24px,7vw,100px)" }}
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            background: "var(--accent)",
            filter: "blur(140px)",
            opacity: dark ? 0.09 : 0.07,
            top: "-150px",
            right: "5%",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 450,
            height: 450,
            background: "var(--accent)",
            filter: "blur(100px)",
            opacity: dark ? 0.07 : 0.05,
            bottom: "0",
            left: "-80px",
          }}
        />
      </div>

      <div className="relative z-10" style={{ maxWidth: 880 }}>
        <Reveal delay={0.1}>
          <h1
            className="serif font-semibold leading-[1.0]"
            style={{
              fontSize: "clamp(54px,9.5vw,108px)",
              color: "var(--text)",
              letterSpacing: "-0.01em",
              marginBottom: 28,
            }}
          >
            Building systems
            <br />
            <em className="grad-text not-italic">that scale.</em>
          </h1>
        </Reveal>

        <Reveal delay={0.25}>
          <p
            style={{
              fontSize: "clamp(15px,1.8vw,18px)",
              color: "var(--muted)",
              maxWidth: 480,
              lineHeight: 1.82,
              marginBottom: 40,
            }}
          >
            Senior SWE · Distributed systems, AI/LLM platforms, high-performance
            microservices. Currently at{" "}
            <strong className="font-semibold" style={{ color: "var(--text)" }}>
              ZS Associates
            </strong>
            , Bangalore.
          </p>
        </Reveal>

        <Reveal delay={0.38}>
          <div className="flex gap-3.5 flex-wrap">
            <button
              onClick={() => go("projects")}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="rounded-[10px] font-semibold border-none"
              style={{
                padding: "13px 28px",
                fontSize: 14,
                fontFamily: "inherit",
                background:
                  "linear-gradient(135deg, var(--accent), var(--grad-end))",
                color: "var(--btn-text)",
              }}
            >
              View Projects →
            </button>
            <button
              onClick={() => go("about")}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="rounded-[10px] font-semibold"
              style={{
                padding: "13px 28px",
                fontSize: 14,
                fontFamily: "inherit",
                background: "none",
                border: "1.5px solid var(--border)",
                color: "var(--muted)",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              About Me
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
