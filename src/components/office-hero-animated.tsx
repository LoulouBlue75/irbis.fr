'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './office-hero.css';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceBoard {
  id: string;
  title: string;
  description: string;
  link?: string;
}

interface OfficeHeroProps {
  boards?: ServiceBoard[];
}

const defaultBoards: ServiceBoard[] = [
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'Transform your business with decisive appointments',
    link: '/executive-search'
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Digital solutions for modern challenges',
    link: '/executive-search'
  },
  {
    id: 'growth',
    title: 'Growth',
    description: 'Scale your impact with exceptional talent',
    link: '/executive-search'
  }
];

export function OfficeHeroAnimated({ boards = defaultBoards }: OfficeHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create the timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%', // Scroll distance: 3x viewport height
          scrub: 1, // Smooth scrubbing
          pin: true,
          anticipatePin: 1,
        }
      });

      tlRef.current = tl;

      // 1. Shutters closing (Day -> Night transition starts)
      // 0% to 40% of scroll
      tl.to('.shutter', {
        x: '0%',
        stagger: 0.05,
        duration: 4,
        ease: 'power2.inOut'
      }, 0);

      // 2. Light dimming (Window light fades out)
      // 0% to 40%
      tl.to('.windows-overlay', {
        opacity: 0.2,
        duration: 4,
        ease: 'power1.inOut'
      }, 0);

      // 3. Hero text fade out
      // 0% to 30%
      tl.to('.hero-content', {
        opacity: 0,
        y: -50,
        duration: 3,
        ease: 'power1.out'
      }, 0);

      // 4. Lamps turning on
      // 40% to 50%
      tl.to('.lamp', {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      }, 4);

      // 5. Boards revealing
      // 50% to 80%
      tl.fromTo('.board', 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          stagger: 0.5,
          ease: 'back.out(1.2)'
        },
        5
      );

      // 6. Final state hold (80% to 100%)
      // Just to keep the scene visible for a moment before unpinning
      tl.to({}, { duration: 2 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="hero-office">
      {/* Layer 0: Bureau Background */}
      <div className="office-base">
        <div className="office-placeholder" />
        {/* Future: <Image src="/images/office-day.webp" ... /> */}
      </div>
      
      {/* Layer 1: Windows Light Overlay */}
      <div className="windows-overlay">
        <div className="window window-1" />
        <div className="window window-2" />
        <div className="window window-3" />
      </div>
      
      {/* Layer 2: Shutters */}
      <div className="shutters">
        <div className="shutter shutter-1" />
        <div className="shutter shutter-2" />
        <div className="shutter shutter-3" />
      </div>
      
      {/* Layer 3: Lamps */}
      <div className="lamps">
        <div className="lamp lamp-1">
          <div className="lamp-glow" />
        </div>
        <div className="lamp lamp-2">
          <div className="lamp-glow" />
        </div>
      </div>
      
      {/* Layer 4: Service Boards */}
      <div className="service-boards">
        {boards.map((board) => (
          <a
            key={board.id}
            href={board.link || '#'}
            className={`board board-${board.id}`}
            // Initial state handled by GSAP fromTo, but good to have CSS fallback
            style={{ opacity: 0 }} 
          >
            <div className="board-frame">
              <h3 className="board-title">{board.title}</h3>
              <p className="board-description">{board.description}</p>
            </div>
          </a>
        ))}
      </div>
      
      {/* Layer 5: Hero Content Overlay */}
      <div className="hero-content">
        <h1 className="hero-title">
          IRBIS<span className="hero-dot">.</span>
        </h1>
        <p className="hero-subtitle">
          High standards. Shared ambition.
        </p>
        <div className="hero-scroll-indicator">
          <span>Scroll to explore</span>
          <svg 
            className="scroll-arrow" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
