"use client";
import React from 'react';
import { useTranslation } from '@/context/TranslationContext';

const ServiceCard = ({ icon, title, description, highlighted = false, delay = "0.1s", badge = "" }) => {
  return (
    <div className={`service-card p-8 rounded-2xl reveal relative overflow-hidden group ${highlighted ? 'border-secondary/30 ring-1 ring-secondary/20' : ''}`} style={{ animationDelay: delay }}>
      {badge && (
        <div className="absolute top-4 right-4">
          <span className="bg-secondary/20 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-secondary/30">{badge}</span>
        </div>
      )}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 float-element ${highlighted ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="font-headline text-2xl font-bold mb-4 text-on-surface">{title}</h3>
      <p className="text-on-surface-variant text-base leading-relaxed mb-8">{description}</p>
      <div className={`h-1 w-12 rounded-full transition-all duration-500 group-hover:w-24 ${highlighted ? 'bg-secondary' : 'bg-primary'}`}></div>
    </div>
  );
};

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    { icon: "payments", title: t.services.items[0].title, description: t.services.items[0].desc, delay: "0.1s" },
    { icon: "terminal", title: t.services.items[1].title, description: t.services.items[1].desc, highlighted: true, badge: "Core", delay: "0.2s" },
    { icon: "rule", title: t.services.items[2].title, description: t.services.items[2].desc, delay: "0.3s" },
    { icon: "cloud_upload", title: t.services.items[3].title, description: t.services.items[3].desc, delay: "0.4s" },
    { icon: "install_mobile", title: t.services.items[4].title, description: t.services.items[4].desc, delay: "0.5s" },
    { icon: "speed", title: t.services.items[5].title, description: t.services.items[5].desc, delay: "0.6s" },
  ];

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 animate-slide-right">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            {t.services.title}<span className="text-secondary">{t.services.titleAccent}</span>
          </h2>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">{t.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-secondary/10 to-primary/10 blur-[130px] rounded-full -z-0 rotating-gradient"></div>
    </section>
  );
};

export default Services;
