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
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    const vignette = vignetteRef.current;

    if (!container || !image || !overlay || !content || !vignette) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Zoom towards right side (panther + Camus + Federer)
      tl.to(
        image,
        {
          scale: 2.8,
          transformOrigin: '72% 50%',
          duration: 0.7,
          ease: 'power2.inOut',
        },
        0
      );

      tl.to(vignette, { opacity: 0.6, duration: 0.5 }, 0);
      tl.to(vignette, { opacity: 0, duration: 0.3 }, 0.5);
      tl.to(overlay, { opacity: 0.94, duration: 0.3 }, 0.6);
      tl.to(content, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, 0.7);
    }, container);

    return () => ctx.revert();
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
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Vignette Effect */}
      <div
        ref={vignetteRef}
        className="absolute inset-0 pointer-events-none opacity-0"
        style={{
          background: 'radial-gradient(ellipse at 72% 50%, transparent 20%, rgba(11, 17, 33, 0.8) 70%)',
        }}
      />

      {/* Cream Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-paper-cream opacity-0"
      />

      {/* Content — New Yorker Editorial Style */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-8"
      >
        {/* Brand Name — New Yorker Typography */}
        <h1 className="font-display text-center mb-6">
          <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl italic font-light text-ink-navy tracking-tight">
            Irbis
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-foil-gold tracking-[0.3em] uppercase mt-2">
            Partners
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-display text-lg md:text-xl text-ink-light italic mb-12">
          Executive Search with Adaptive Precision
        </p>

        {/* Gold Line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-foil-gold to-transparent mb-12" />

        {/* CTA — The Hunt Begins */}
        <button
          onClick={handleScrollToContent}
          className="group inline-flex flex-col items-center gap-4 text-ink-navy transition-all duration-500 hover:text-foil-gold"
        >
          <span className="font-display text-lg md:text-xl italic tracking-wide">
            The hunt begins
          </span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Initial scroll hint */}
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
