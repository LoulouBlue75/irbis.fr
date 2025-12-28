"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  const textColors =
    variant === "light"
      ? { primary: "text-white", accent: "text-white/70" }
      : { primary: "text-[#0d121b]", accent: "text-[#1152d4]" };

  // Fallback to text logo if image fails
  if (imageError) {
    return (
      <Link href="/" className={`flex items-center gap-3 ${className}`}>
        {/* Icon */}
        <div className={`size-8 ${variant === "light" ? "text-white" : "text-[#1152d4]"}`}>
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_330)">
              <path
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_330">
                <rect fill="white" height="48" width="48" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className={`${textColors.primary} text-xl font-bold leading-tight tracking-tight`}>
          Irbis Partners
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/irbis-partners-logo.png"
        alt="Irbis Partners"
        width={180}
        height={48}
        className={`h-12 w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
        onError={() => setImageError(true)}
        priority
      />
    </Link>
  );
}
