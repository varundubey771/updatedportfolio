"use client";

import { useScrollState } from "@/app/hooks/useScrollState";
import { AvatarImage } from "@/app/components/ui/Avatar";
import { SunIcon, MoonIcon } from "@/app/components/icons";
import type { TopHeaderProps } from "@/app/types";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
] as const;

export function TopHeader({
  dark,
  setDark,
  setHovering,
  go,
  activeSection,
}: TopHeaderProps) {
  const scrolled = useScrollState();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[400] flex items-center justify-between"
      style={{
        padding: "0 clamp(16px, 5vw, 48px)",
        height: "clamp(58px, 7vw, 70px)",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition:
          "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <div className="flex items-center gap-[clamp(8px,1.5vw,14px)]">
        <AvatarImage
          size={38}
          accentColor="var(--accent)"
          borderColor="var(--accent)"
          shadowColor="var(--accent-soft)"
        />
        <div className="flex flex-col leading-[1.15]">
          <span
            className="serif font-semibold whitespace-nowrap"
            style={{
              fontSize: "clamp(17px, 2vw, 22px)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
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

      <nav className="header-nav flex items-center gap-1.5" role="navigation" aria-label="Main navigation">
        {NAV_ITEMS.map(({ id, label }) => {
          const active = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => go(id)}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="mono rounded-lg whitespace-nowrap font-medium"
              aria-current={active ? "true" : undefined}
              style={{
                background: active ? "var(--accent-soft)" : "none",
                border: `1px solid ${
                  active ? "var(--border)" : "transparent"
                }`,
                padding: "5px 10px",
                fontSize: 11,
                fontWeight: 500,
                color: active ? "var(--accent)" : "var(--muted)",
                transition: "all 0.2s ease",
              }}
            >
              {label}
            </button>
          );
        })}
        <button
          onClick={() => setDark((v) => !v)}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="flex items-center ml-1 rounded-lg"
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            background: "none",
            border: "1px solid var(--border)",
            padding: "5px 9px",
            color: "var(--muted)",
            transition: "border-color 0.2s, color 0.2s",
          }}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>
    </header>
  );
}
