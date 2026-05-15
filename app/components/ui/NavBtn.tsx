"use client";

import { useState, useEffect, useRef } from "react";
import type { NavBtnProps } from "@/app/types";

export function NavBtn({
  icon,
  label,
  href,
  onClick,
  showTooltip = true,
  onHoverChange,
}: NavBtnProps) {
  const [hov, setHov] = useState(false);
  const canHover = useRef(false);

  useEffect(() => {
    // Only enable hover effects on devices that actually support hover
    canHover.current = matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  const handleEnter = () => {
    if (!canHover.current) return;
    setHov(true);
    onHoverChange?.(true);
  };
  const handleLeave = () => {
    if (!canHover.current) return;
    setHov(false);
    onHoverChange?.(false);
  };

  const innerStyle: Record<string, string | number> = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,
    borderRadius: 11,
    position: "relative" as const,
    color: hov ? "var(--accent)" : "var(--muted)",
    background: hov ? "var(--accent-soft)" : "transparent",
    transform: hov ? "scale(1.08)" : "scale(1)",
    transition: "color 0.2s, background 0.2s, transform 0.18s",
  };

  const tooltip = showTooltip && (
    <span
      className="whitespace-nowrap pointer-events-none z-10"
      style={{
        position: "absolute",
        left: "calc(100% + 14px)",
        top: "50%",
        transform: "translateY(-50%)",
        background: "var(--surface)",
        color: "var(--text)",
        padding: "5px 10px",
        borderRadius: 7,
        fontSize: 12,
        fontWeight: 500,
        border: "1px solid var(--border)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        opacity: hov ? 1 : 0,
        transition: "opacity 0.15s",
      }}
    >
      {label}
    </span>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="inline-flex p-0"
        style={{ background: "none", border: "none" }}
        aria-label={label}
      >
        <span style={innerStyle}>
          {icon}
          {tooltip}
        </span>
      </button>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="inline-flex no-underline"
      style={{ textDecoration: "none" }}
      aria-label={label}
    >
      <span style={innerStyle}>
        {icon}
        {tooltip}
      </span>
    </a>
  );
}
