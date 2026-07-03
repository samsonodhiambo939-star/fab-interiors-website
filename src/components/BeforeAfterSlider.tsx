"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}
export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);
  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };
  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden select-none cursor-ew-resize group"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {" "}
      <Image
        src={afterImage}
        alt="After renovation result by FAB INTERIORS Nairobi"
        fill
        className="object-cover pointer-events-none"
        sizes="100vw"
      />{" "}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {" "}
        <Image
          src={beforeImage}
          alt="Before renovation original state by FAB INTERIORS Nairobi"
          fill
          className="object-cover pointer-events-none"
          sizes="100vw"
        />{" "}
      </div>{" "}
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        {" "}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          {" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-white"
          >
            {" "}
            <path
              d="M10 3L6 8L10 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>{" "}
        </div>{" "}
      </div>{" "}
      <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-semibold backdrop-blur-sm">
        {" "}
        {beforeLabel}{" "}
      </span>{" "}
      <span className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-semibold backdrop-blur-sm">
        {" "}
        {afterLabel}{" "}
      </span>{" "}
    </div>
  );
}
