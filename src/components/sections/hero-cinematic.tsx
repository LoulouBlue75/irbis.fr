'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);

  const handleScrollToContent = () => {
    const heroHeight = containerRef.current?.offsetHeight || window.innerHeight;
    window.scrollTo({
      top: heroHeight + window.innerHeight * 1.5, // After the pinned section
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    const vignette = vignetteRef.current;

    if (!container || !image || !overlay || !content || !vignette) return;

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Main timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=150%', // 1.5x viewport height of scroll
          pin: true,
          scrub: 1, // Smooth scrubbing
          anticipatePin: 1,
        },
      });

      // Phase 1: Zoom into the focal area (between panther, Camus, Federer)
      tl.to(
        image,
        {
          scale: 2.8,
          // Transform origin: center-right area (between panther head, Camus portrait, Federer book)
          transformOrigin: '60% 58%',
          duration: 0.7,
          ease: 'power2.inOut',
        },
        0
      );

      // Phase 2: Vignette intensifies during zoom (0% - 50%)
      tl.to(
        vignette,
        {
          opacity: 0.6,
          duration: 0.5,
        },
        0
      );

      // Phase 3: Vignette fades to reveal content (50% - 80%)
      tl.to(
        vignette,
        {
          opacity: 0,
          duration: 0.3,
        },
        0.5
      );

      // Phase 4: Overlay (cream background) fades in (60% - 90%)
      tl.to(
        overlay,
        {
          opacity: 0.92,
          duration: 0.3,
        },
        0.6
      );

      // Phase 5: Content appears (70% - 100%)
      tl.to(
        content,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        },
        0.7
      );
    }, container);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-ink-navy"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          backgroundImage: 'url(/images/hero-2mb.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Vignette Effect */}
      <div
        ref={vignetteRef}
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{
          background:
            'radial-gradient(ellipse at 60% 58%, transparent 20%, rgba(11, 17, 33, 0.8) 70%)',
        }}
      />

      {/* Cream Overlay (fades in at end) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-paper-cream opacity-0"
      />

      {/* Content — Option A: Minimal Portal */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-8"
      >
        {/* Official Logo */}
        <img
          src="/images/Irbis_Logo_full.svg"
          alt="Irbis Partners"
          className="h-16 md:h-20 lg:h-24 mb-12"
        />

        {/* Gold Line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mb-12" />

        {/* CTA */}
        <button
          onClick={handleScrollToContent}
          className="group inline-flex flex-col items-center gap-4 text-ink-navy transition-all duration-500 hover:text-foil-gold"
        >
          <span className="text-sm font-semibold tracking-widest uppercase">
            Enter the ecosystem
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Initial hint overlay - visible before scroll */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-paper-white/80 text-center animate-pulse">
        <p className="font-mono text-xs uppercase tracking-widest mb-2">
          Scroll to enter
        </p>
        <div className="w-6 h-10 border-2 border-paper-white/40 rounded-full mx-auto flex justify-center">
          <div className="w-1 h-3 bg-paper-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
