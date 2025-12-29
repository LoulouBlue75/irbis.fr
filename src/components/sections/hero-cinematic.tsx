'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

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

      // Phase 1: Zoom into the portfolio (0% - 70%)
      tl.to(
        image,
        {
          scale: 2.8,
          // Transform origin: focus on the panther logo (approximately 60% from left, 70% from top)
          transformOrigin: '70% 78%',
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
          backgroundImage: 'url(/images/home_page.jpg)',
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
            'radial-gradient(ellipse at 70% 78%, transparent 20%, rgba(11, 17, 33, 0.8) 70%)',
        }}
      />

      {/* Cream Overlay (fades in at end) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-paper-cream opacity-0"
      />

      {/* Content (Header + CTAs) */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-8"
      >
        {/* Logo / Brand */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 border-2 border-foil-gold rounded-full flex items-center justify-center">
            {/* Panther icon placeholder - can be replaced with actual SVG */}
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 text-foil-gold"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ink-navy text-center tracking-tight">
            <span className="block italic font-light">Irbis</span>
            <span className="block font-medium">Partners</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-ink-light text-lg md:text-xl text-center max-w-xl mb-12 px-6">
          Executive Search with Adaptive Precision.
          <br />
          <span className="text-foil-bronze italic">
            The alliance of instinct & methodology.
          </span>
        </p>

        {/* Gold Line */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mb-12" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink-navy text-paper-cream text-sm font-semibold tracking-wide transition-all duration-500 hover:bg-ink-black hover:-translate-y-1 hover:shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            Start a conversation
          </Link>
          <Link
            href="/approach"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-ink-navy text-sm font-semibold tracking-wide border border-ink-navy/20 transition-all duration-500 hover:border-foil-gold hover:text-foil-gold hover:-translate-y-1"
          >
            Discover the 8D method
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Scroll indicator (optional, subtle) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <p className="font-mono text-[10px] text-ink-light/50 uppercase tracking-widest">
            Scroll to explore
          </p>
        </div>
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
