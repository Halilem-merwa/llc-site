"use client";
import React from 'react';
import { useTranslation } from '@/context/TranslationContext';

const Hero = () => {
  const { t, lang } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-6 overflow-hidden">
      {/* Decorative Top Accent (from user image) */}
      <div className="absolute top-0 left-0 w-64 h-24 bg-secondary -skew-x-[45deg] -translate-x-32 -z-20 shadow-[0_0_50px_rgba(249,115,22,0.3)]"></div>
      
      {/* Top Gradient Glow - Intensified */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-secondary/30 via-secondary/10 to-transparent -z-10 animate-pulse-slow"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-secondary/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Logo Anchor */}
        <div className="mb-4 transition-transform hover:scale-110 duration-700 float-element">
          <div className="absolute inset-0 bg-secondary/20 blur-[60px] rounded-full -z-10 animate-pulse-slow"></div>
          <img 
            alt="Deploily LLC Logo" 
            className="h-28 md:h-40 w-auto drop-shadow-[0_0_70px_rgba(249,115,22,0.6)]" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhFE0bGIJ90Rk59sjRypv8iVUbGJptk8CxuISJt5sF0ZsIdZ38qZ3jfZ4aSVnOLNG2O2NrypZIhHACy57LfrHxmxopF9QNp5EltJDZDdPGwpn6J8Zei2Hq2Z9B5o6RmLBX5brIiqh2WBhbk4ckZtAgHJgXrSSfddF20sB2QObiTADYUahLS2Z9zH3gEgH_5v9oMAlUTpF5ctIAfhnF79PQDtIUAJpKHuaSslsGBUlkrHctKQIMHDZXcoU8z4EkWzxUPDiE3nI2qSw"
          />
        </div>
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-xs mb-8 tracking-[0.1em] uppercase border border-secondary/20 reveal" style={{ animationDelay: '0.1s' }}>
          <span className="material-symbols-outlined text-[14px] mr-1.5" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          {t.hero.badge}
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 max-w-5xl leading-[1.05] animate-slide-left" style={{ animationDelay: '0.2s' }}>
          {t.hero.title}<span className="text-gradient">{t.hero.titleGradient}</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-medium mb-12 max-w-2xl leading-relaxed animate-slide-right" style={{ animationDelay: '0.3s' }}>
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center reveal" style={{ animationDelay: '0.4s' }}>
          <a className="bg-gradient-to-r from-secondary to-secondary-container text-white px-12 py-5 rounded-full font-bold text-xl premium-shadow hover:premium-shadow-hover hover:-translate-y-1 hover:scale-105 transition-all duration-300 shimmer-bg" href="#contact" style={{ backgroundImage: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #f97316 100%)', backgroundSize: '200% auto' }}>
            {t.hero.cta}
          </a>
        </div>
      </div>
      {/* Atmospheric Depth Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-20 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-secondary/10 blur-[150px] rounded-full pulse-element"></div>
        <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pulse-element" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
