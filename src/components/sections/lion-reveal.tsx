'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function LionReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const cta = ctaRef.current;

    if (!section || !image || !cta) return;

    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        image,
        {
          opacity: 0,
          scale: 0.95,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'center center',
            scrub: 1,
          },
        }
      );

      // CTAs fade in after image
      gsap.fromTo(
        cta,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'center 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 px-6 lg:px-12 bg-paper-cream overflow-hidden"
    >
      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-ink-navy/5"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-ink-navy/5"></div>
      </div>

      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        {/* Gold line top */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mb-16" />

        {/* Lion Image */}
        <div
          ref={imageRef}
          className="relative mb-16 will-change-transform"
        >
          {/* Paper shadow effect */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-ink-navy/10 blur-sm"></div>

          {/* Image container */}
          <div className="relative bg-paper-white p-4 shadow-lg">
            <img
              src="/images/home_2.png"
              alt="Irbis Partners"
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8"
        >
          <Link
            href="/clients"
            className="group inline-flex items-center justify-center px-12 py-5 bg-transparent text-foil-gold text-sm font-medium tracking-[0.1em] uppercase border border-foil-gold transition-all duration-300 hover:bg-foil-gold hover:text-ink-navy hover:-translate-y-0.5"
          >
            Clients
          </Link>
          <Link
            href="/talents"
            className="group inline-flex items-center justify-center px-12 py-5 bg-transparent text-foil-gold text-sm font-medium tracking-[0.1em] uppercase border border-foil-gold transition-all duration-300 hover:bg-foil-gold hover:text-ink-navy hover:-translate-y-0.5"
          >
            Talents
          </Link>
        </div>

        {/* Gold line bottom */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mt-16" />
      </div>
    </section>
  );
}
