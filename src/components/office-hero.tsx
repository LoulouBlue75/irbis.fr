'use client';

import React from 'react';
import './office-hero.css';

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

export function OfficeHero({ boards = defaultBoards }: OfficeHeroProps) {
  return (
    <section className="hero-office">
      {/* Layer 0: Bureau Background (Placeholder gradient) */}
      <div className="office-base">
        <div className="office-placeholder" />
      </div>
      
      {/* Layer 1: Windows Light Overlay */}
      <div className="windows-overlay">
        <div className="window window-1" />
        <div className="window window-2" />
        <div className="window window-3" />
      </div>
      
      {/* Layer 2: Shutters (Initially off-screen) */}
      <div className="shutters">
        <div className="shutter shutter-1" />
        <div className="shutter shutter-2" />
        <div className="shutter shutter-3" />
      </div>
      
      {/* Layer 3: Lamps (Initially off) */}
      <div className="lamps">
        <div className="lamp lamp-1">
          <div className="lamp-glow" />
        </div>
        <div className="lamp lamp-2">
          <div className="lamp-glow" />
        </div>
      </div>
      
      {/* Layer 4: Service Boards (Bookshelves) */}
      <div className="service-boards">
        {boards.map((board) => (
          <a
            key={board.id}
            href={board.link || '#'}
            className={`board board-${board.id}`}
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
