"use client";

import { Reveal } from "@/app/components/ui/Reveal";
import { MailIcon, LinkedInIcon } from "@/app/components/icons";

interface ConnectProps {
  setHovering: (v: boolean) => void;
}

const LINKS = [
  {
    label: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/",
  },
  {
    label: "Email",
    icon: <MailIcon />,
    href: "mailto:varundubey771@gmail.com",
  },
] as const;

export function Connect({ setHovering }: ConnectProps) {
  return (
    <section
      id="connect"
      style={{
        padding: "120px clamp(24px,7vw,100px)",
        background: "var(--bg-alt)",
        transition: "background 0.4s",
      }}
    >
      <div style={{ maxWidth: 680 }}>
        <Reveal>
          <p
            className="mono font-medium uppercase tracking-[0.12em]"
            style={{ fontSize: 11, color: "var(--accent)", marginBottom: 14 }}
          >
            Connect
          </p>
          <h2
            className="serif font-semibold leading-[1.05]"
            style={{
              fontSize: "clamp(36px,5vw,64px)",
              color: "var(--text)",
              marginBottom: 20,
            }}
          >
            Let's build
            <br />
            <em className="grad-text">something great.</em>
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 15,
              lineHeight: 1.85,
              maxWidth: 400,
              marginBottom: 40,
            }}
          >
            Open to senior roles and interesting collaborations.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex gap-3 flex-wrap" style={{ marginBottom: 32 }}>
            {LINKS.map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="flex items-center gap-[9px] rounded-[10px] no-underline font-semibold"
                style={{
                  padding: "11px 20px",
                  fontSize: 14,
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  border: "1px solid var(--border)",
                  transition: "background 0.2s, transform 0.2s",
                }}
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="https://docs.google.com/document/d/1zONOvPZMG0a4zGpZel6r0mduLhkxmYtbjl64KGY9AQI/edit?pli=1&tab=t.0"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="inline-flex items-center gap-2 rounded-[10px] font-semibold no-underline"
            style={{
              padding: "13px 26px",
              fontSize: 14,
              background:
                "linear-gradient(135deg, var(--accent), var(--grad-end))",
              color: "var(--btn-text)",
            }}
          >
            View Full CV / Résumé ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
