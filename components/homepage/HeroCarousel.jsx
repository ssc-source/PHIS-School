'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  Pause, 
  Play, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Building, 
  Users, 
  Trophy 
} from 'lucide-react';
import { heroSlides } from '@/config/siteData';

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const totalSlides = heroSlides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide]);

  const active = heroSlides[currentSlide];

  return (
    <section 
      className="relative w-full h-[88vh] min-h-[620px] max-h-[850px] bg-slate-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Photographic Slides */}
      {heroSlides.map((slide, index) => {
        const isCurrent = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-7000 ease-out"
            />

            {/* PHIS Royal Blue + Dark Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/60 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/40 to-transparent" />
          </div>
        );
      })}

      {/* Slide Foreground Content */}
      <div className="relative z-20 container-custom h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
        <div className="max-w-4xl flex flex-col items-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/80 backdrop-blur-md border border-amber-400/40 text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 shadow-xl text-amber-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{active.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6 drop-shadow-2xl text-white">
            {active.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl font-normal text-blue-100 max-w-3xl leading-relaxed mb-8 drop-shadow-md">
            {active.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={active.cta ? active.cta.href : "/admission"}
              className="btn-phis-gold text-sm sm:text-base py-3.5 px-8 shadow-xl hover:scale-105 transition-transform font-black"
            >
              <span>{active.cta ? active.cta.text : "Admissions 2026-27"}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link
              href="/facilities"
              className="inline-flex items-center justify-center font-bold text-white bg-blue-800/60 hover:bg-blue-800/90 backdrop-blur-md border border-blue-400/40 rounded-full px-7 py-3.5 text-sm sm:text-base transition-all duration-200 hover:scale-105"
            >
              <span>Campus Tour & Facilities</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-blue-950/60 hover:bg-amber-400 hover:text-blue-950 text-white backdrop-blur-md border border-blue-400/30 transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-blue-950/60 hover:bg-amber-400 hover:text-blue-950 text-white backdrop-blur-md border border-blue-400/30 transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Bar */}
      <div className="absolute bottom-6 inset-x-0 z-30 flex flex-col sm:flex-row items-center justify-between container-custom gap-3">
        {/* Slide Counter */}
        <div className="text-xs font-mono font-bold tracking-wider text-blue-200 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800 backdrop-blur-sm">
          <span className="text-amber-400">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(totalSlides).padStart(2, '0')}
        </div>

        {/* Dots */}
        <div className="flex items-center gap-1.5 bg-blue-950/80 px-4 py-2 rounded-full border border-blue-800 backdrop-blur-sm">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/50' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Play/Pause */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className="p-2 rounded-full bg-blue-950/80 hover:bg-blue-900 text-white border border-blue-800 backdrop-blur-sm transition-colors text-xs flex items-center gap-1.5 px-3.5"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          <span className="hidden md:inline text-[11px] font-medium">{isPlaying ? 'Playing' : 'Paused'}</span>
        </button>
      </div>
    </section>
  );
}
