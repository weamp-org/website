"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VISIBILITY_THRESHOLD = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > VISIBILITY_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={cn(
        "fixed right-4 bottom-4 z-50 transition-all duration-300 sm:right-6 sm:bottom-6",
        visible
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
      )}
    >
      <ArrowUp className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
