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
      ? { primary: "text-white", accent: "text-[#BF9E59]" }
      : { primary: "text-[#0F1A2E]", accent: "text-[#BF9E59]" };

  // Fallback to text logo if image fails
  if (imageError) {
    return (
      <Link href="/" className={`flex items-center gap-2 font-bold text-xl ${className}`}>
        <span className={textColors.primary}>IRBIS</span>
        <span className={textColors.accent}>PARTNERS</span>
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
