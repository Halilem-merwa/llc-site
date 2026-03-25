"use client";
import React from 'react';
import { useTranslation } from '@/context/TranslationContext';

const Confidence = () => {
  const { t } = useTranslation();
  return (
    <section className="py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative reveal">
          <div className="aspect-square rounded-3xl signature-gradient relative flex items-center justify-center overflow-hidden premium-shadow float-element">
            <div className="absolute inset-0 opacity-20 flex flex-col gap-6 p-10">
              <div className="h-2 bg-white rounded-full w-3/4"></div>
              <div className="h-2 bg-white rounded-full w-1/2"></div>
              <div className="h-2 bg-white rounded-full w-2/3"></div>
              <div className="h-2 bg-white rounded-full w-5/6"></div>
              <div className="h-2 bg-white rounded-full w-1/3"></div>
            </div>
            <div className="z-10 bg-white/10 backdrop-blur-2xl p-12 rounded-3xl border border-white/20 scale-reveal">
              <span className="material-symbols-outlined text-white text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
          </div>
          {/* Status Chip */}
          <div className="absolute -bottom-6 -right-6 bg-surface px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 scale-reveal" style={{ animationDelay: '0.5s' }}>
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse shadow-[0_0_15px_#f97316]"></div>
            <span className="font-bold text-sm text-on-surface uppercase tracking-widest">{t.confidence.status}</span>
          </div>
        </div>
        <div className="space-y-10 reveal" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-headline text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">{t.confidence.title}<span className="text-primary text-gradient">{t.confidence.titleAccent}</span></h2>
          <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
            {t.confidence.p1}
          </p>
          <p className="text-on-surface-variant/80 leading-relaxed text-lg">
            {t.confidence.p2}
          </p>
          <div className="pt-10 grid grid-cols-2 gap-12 border-t border-white/5">
            <div>
              <div className="text-primary font-headline text-5xl font-extrabold mb-2">100%</div>
              <div className="text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em]">{t.confidence.stat1}</div>
            </div>
            <div>
              <div className="text-secondary font-headline text-5xl font-extrabold mb-2">24/7</div>
              <div className="text-on-surface-variant text-xs font-bold uppercase tracking-[0.2em]">{t.confidence.stat2}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
    const { t, lang } = useTranslation();
    const steps = [
        { num: 1, title: t.methodology.steps[0].title, desc: t.methodology.steps[0].desc },
        { num: 2, title: t.methodology.steps[1].title, desc: t.methodology.steps[1].desc },
        { num: 3, title: t.methodology.steps[2].title, desc: t.methodology.steps[2].desc },
        { num: 4, title: t.methodology.steps[3].title, desc: t.methodology.steps[3].desc, highlighted: true },
    ];

    return (
        <section className="py-32 px-6 bg-background relative overflow-hidden" id="process">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-28 reveal">
                    <h2 className="font-headline text-5xl md:text-6xl font-extrabold mb-6 transition-all duration-300">{t.methodology.title}</h2>
                    <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">{t.methodology.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal" style={{ animationDelay: '0.3s' }}>
                    {steps.map((step, index) => (
                        <div key={index} className="group relative p-8 rounded-3xl bg-surface border border-white/5 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2 premium-shadow hover:premium-shadow-hover">
                            <div className="mb-8 flex items-center justify-between relative">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${step.highlighted ? 'bg-secondary text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 'bg-background border border-white/10 text-primary group-hover:border-primary/50'}`}>{step.num}</div>
                                {index < steps.length - 1 && (
                                    <div className={`hidden lg:block absolute ${lang === 'AR' ? 'left-[-1.5rem]' : 'right-[-1.5rem]'} top-1/2 -translate-y-1/2 z-20`}>
                                        <div className="w-8 h-8 rounded-full bg-background border border-white/10 flex items-center justify-center shadow-lg group-hover:border-secondary/30 transition-all duration-500">
                                            <span className="material-symbols-outlined text-secondary text-base font-bold">
                                                {lang === 'AR' ? 'west' : 'east'}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-secondary transition-colors duration-300">{step.title}</h3>
                            <p className="text-on-surface-variant text-base leading-relaxed group-hover:text-on-surface transition-colors duration-300">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Dark gradient blend */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background -z-0"></div>
        </section>
    );
};

export { Confidence, Methodology };
