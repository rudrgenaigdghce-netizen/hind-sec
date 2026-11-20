"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis | null;
  }
}

let sharedLenis: Lenis | null = null;
let animationFrameId: number | null = null;

export default function SmoothScroll() {
  const pathname = usePathname();
  const prevPathnameRef = useRef<string>(pathname);

  // Initialize Lenis once as a shared singleton
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (!sharedLenis) {
      sharedLenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });

      window.__lenis = sharedLenis;

      function raf(time: number) {
        if (sharedLenis) {
          sharedLenis.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        }
      }

      animationFrameId = requestAnimationFrame(raf);
    }
  }, []);

  // Reset scroll to top (or scroll to valid target element for hashes) on route change
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToTargetOrTop = () => {
      const hash = window.location.hash;
      if (hash) {
        try {
          const target = document.querySelector(hash);
          if (target) {
            if (sharedLenis) {
              sharedLenis.scrollTo(target as HTMLElement, { offset: -90, immediate: true });
            } else {
              target.scrollIntoView({ behavior: "smooth" });
            }
            return;
          }
        } catch {
          // ignore invalid selector
        }
      }

      // If no hash or target element is absent, scroll to the top immediately
      if (sharedLenis) {
        sharedLenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediate execution on pathname change
    scrollToTargetOrTop();

    // Secondary execution after DOM paint to guarantee top placement
    const timeout = setTimeout(scrollToTargetOrTop, 80);
    prevPathnameRef.current = pathname;

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
