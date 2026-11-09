"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackingLinkProps = {
  href: string;
  event: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export default function TrackingLink({
  href,
  event,
  children,
  className,
  target,
  rel,
}: TrackingLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={
        target === "_blank"
          ? "noopener noreferrer"
          : rel
      }
      className={className}
      onClick={() =>
        window.gtag?.("event", event, {
          page_path: window.location.pathname,
        })
      }
    >
      {children}
    </a>
  );
}
