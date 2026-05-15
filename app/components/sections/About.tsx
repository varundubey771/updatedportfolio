"use client";

import { Reveal } from "@/app/components/ui/Reveal";

interface AboutProps {
  setHovering: (v: boolean) => void;
}


export function About({ setHovering }: AboutProps) {
  return (
    <section
      id="about"
      style={{
        padding: "120px clamp(24px,7vw,100px)",
        background: "var(--bg-alt)",
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: 880 }}>
        <Reveal>
          <p
            className="mono font-medium uppercase tracking-[0.12em]"
            style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}
          >
            About
          </p>
          <h2
            className="serif font-semibold leading-[1.05]"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              color: "var(--text)",
              marginBottom: 40,
            }}
          >
            Crafting intelligent,
            <br />
            <em>resilient software.</em>
          </h2>
        </Reveal>

        <div style={{ maxWidth: 540 }}>
          <Reveal delay={0.1}>
            <div>
              <p
                className="leading-[1.88]"
                style={{
                  color: "var(--muted)",
                  fontSize: 15,
                  marginBottom: 36,
                }}
              >
                Backend-leaning engineer with a track record in distributed
                systems and AI platforms. At{" "}
                <strong style={{ color: "var(--text)" }}>ZS Associates</strong>{" "}
                I build AI-powered enterprise tooling; before that at{" "}
                <strong style={{ color: "var(--text)" }}>Jio</strong> I owned
                large-scale cloud observability modules.
              </p>
              <a
                href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="inline-flex items-center gap-2 rounded-[9px] font-semibold no-underline"
                style={{
                  padding: "11px 22px",
                  fontSize: 14,
                  cursor: "none",
                  background:
                    "linear-gradient(135deg, var(--accent), var(--grad-end))",
                  color: "var(--btn-text)",
                }}
              >
                View CV ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
