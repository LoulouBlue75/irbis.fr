"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitSectionProps {
  layout: "image-left" | "image-right";
  image: {
    src: string;
    alt: string;
  };
  content: {
    label?: string;
    title: string;
    description: string | React.ReactNode;
    cta?: {
      label: string;
      href: string;
    };
  };
  background?: "cream" | "white";
  className?: string;
}

export function SplitSection({
  layout,
  image,
  content,
  background = "cream",
  className,
}: SplitSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        x: layout === "image-left" ? -50 : 50,
        opacity: 0,
        duration: 1,
      });

      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
        x: layout === "image-left" ? 50 : -50,
        opacity: 0,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [layout]);

  const bgClass = background === "cream" ? "bg-paper-cream" : "bg-paper-white";

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-24 lg:py-32 px-6 lg:px-12",
        bgClass,
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            layout === "image-right" && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden">
              {/* Paper shadow effect */}
              <div className="absolute inset-0 bg-ink-navy translate-x-3 translate-y-3 opacity-5" />
              <img
                src={image.src}
                alt={image.alt}
                className="relative w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="flex flex-col justify-center">
            {content.label && (
              <p className="font-mono text-xs uppercase tracking-widest text-foil-bronze mb-6">
                {content.label}
              </p>
            )}

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-ink-navy tracking-tight mb-6 italic">
              {content.title}
            </h2>

            {/* Gold line */}
            <div className="w-16 h-px bg-gradient-to-r from-foil-gold to-transparent mb-8" />

            <div className="text-lg text-ink-light leading-relaxed mb-8">
              {content.description}
            </div>

            {content.cta && (
              <Link
                href={content.cta.href}
                className="inline-flex items-center gap-3 text-sm font-semibold text-foil-gold hover:text-foil-bronze transition-colors group"
              >
                {content.cta.label}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
