"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { ExternalIcon } from "@/app/components/icons";
import { projects } from "@/app/data/projects";

interface ProjectsSectionProps {
  dark: boolean;
  setHovering: (v: boolean) => void;
}

export function ProjectsSection({ dark, setHovering }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      style={{
        padding: "120px clamp(24px,7vw,100px)",
        background: "var(--bg)",
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: 880 }}>
        <Reveal>
          <p
            className="mono font-medium uppercase tracking-[0.12em]"
            style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}
          >
            Work
          </p>
          <h2
            className="serif font-semibold leading-[1.05]"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              color: "var(--text)",
              marginBottom: 44,
            }}
          >
            Live Projects
          </h2>
        </Reveal>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}
        >
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div
                className="lift rounded-[22px] overflow-hidden flex flex-col h-full"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  transition: "background 0.4s, border-color 0.4s",
                }}
              >
                {/* Card header with pattern */}
                <div
                  className="relative shrink-0 overflow-hidden"
                  style={{
                    height: 180,
                    background: dark
                      ? `linear-gradient(135deg,${p.bar}22,${p.bar}44)`
                      : `linear-gradient(135deg,${p.bar}18,${p.bar}38)`,
                  }}
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: dark ? 0.12 : 0.08 }}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id={`grid-${p.name.replace(/\s/g, "")}`}
                        width="24"
                        height="24"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 24 0 L 0 0 0 24"
                          fill="none"
                          stroke={p.bar}
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#grid-${p.name.replace(/\s/g, "")})`}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="float"
                      style={{
                        fontSize: 56,
                        filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.15))",
                      }}
                    >
                      {p.emoji}
                    </span>
                  </div>

                  <span
                    className="mono absolute top-3 right-3 font-medium"
                    style={{
                      fontSize: 10,
                      padding: "3px 9px",
                      borderRadius: 100,
                      background: dark
                        ? "rgba(0,0,0,0.45)"
                        : "rgba(255,255,255,0.7)",
                      color: "var(--accent)",
                      border: "1px solid var(--border)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {p.status}
                  </span>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{ background: p.bar }}
                  />
                </div>

                {/* Card body */}
                <div className="flex-1 flex flex-col" style={{ padding: 28 }}>
                  <h3
                    className="text-base font-bold"
                    style={{ color: "var(--text)", marginBottom: 8 }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="flex-1"
                    style={{
                      color: "var(--muted)",
                      fontSize: 13,
                      lineHeight: 1.72,
                      marginBottom: 20,
                    }}
                  >
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2" style={{ marginBottom: 20 }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="mono"
                        style={{
                          fontSize: 10,
                          padding: "4px 9px",
                          background: "var(--accent-soft)",
                          color: "var(--tag-text)",
                          borderRadius: 4,
                          border: "1px solid var(--border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link !== "#" ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold no-underline"
                      style={{ color: "var(--accent)", fontSize: 13 }}
                    >
                      View Project <ExternalIcon />
                    </a>
                  ) : (
                    <span style={{ color: "var(--muted)", fontSize: 12 }}>
                      Private / Work Project
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
