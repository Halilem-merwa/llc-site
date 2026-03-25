'use client';
import React, { useState } from 'react';
import { useTranslation } from '@/context/TranslationContext';

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mzdjnowr", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto reveal relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{t.contact.title}<span className="text-secondary">{t.contact.titleAccent}</span></h2>
          <p className="text-on-surface-variant text-xl max-w-2xl mx-auto leading-relaxed">{t.contact.subtitle}</p>
        </div>

        {status === 'SUCCESS' ? (
          <div className="bg-surface border border-secondary/20 p-16 rounded-3xl text-center reveal scale-reveal shadow-2xl">
            <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="text-3xl font-black mb-4 font-headline uppercase tracking-tight">{t.contact.successTitle}</h3>
            <p className="text-on-surface-variant text-lg">{t.contact.successDesc}</p>
            <button 
              onClick={() => setStatus('')}
              className="mt-10 text-secondary font-bold hover:text-primary transition-colors flex items-center justify-center gap-2 mx-auto decoration-2"
            >
              {t.contact.retry}
              <span className="material-symbols-outlined text-sm">refresh</span>
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="space-y-8 bg-surface p-10 md:p-16 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold text-secondary uppercase tracking-[0.2em] font-label ml-1">{t.contact.name}</label>
                <input 
                  name="name"
                  required
                  className="w-full bg-surface-container border border-on-surface/5 rounded-xl p-5 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all outline-none text-on-surface font-label placeholder:text-on-surface-variant/50 text-start shadow-inner" 
                  placeholder={t.contact.placeholderName}
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-secondary uppercase tracking-[0.2em] font-label ml-1">{t.contact.email}</label>
                <input 
                  name="email"
                  required
                  className="w-full bg-surface-container border border-on-surface/5 rounded-xl p-5 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all outline-none text-on-surface font-label placeholder:text-on-surface-variant/50 text-start shadow-inner" 
                  placeholder={t.contact.placeholderEmail} 
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-secondary uppercase tracking-[0.2em] font-label ml-1">{t.contact.project}</label>
              <textarea 
                name="message"
                required
                className="w-full bg-surface-container border border-on-surface/5 rounded-xl p-5 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all outline-none text-on-surface font-label placeholder:text-on-surface-variant/50 text-start shadow-inner" 
                placeholder={t.contact.placeholderProject} 
                rows="5"
              ></textarea>
            </div>
            {status === 'ERROR' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-bold flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">error</span>
                {t.contact.errorMessage || "Une erreur s'est produite. Veuillez réessayer."}
              </div>
            )}
            <input type="hidden" name="_subject" value="New Inquiry from Deploily Website" />
            <button className="w-full bg-gradient-to-r from-secondary to-secondary-container text-white font-black py-6 rounded-xl hover:premium-shadow-hover hover:-translate-y-1 transition-all premium-shadow flex items-center justify-center gap-3 font-headline text-xl" type="submit">
              {t.contact.submit}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </form>
        )}
      </div>
      {/* Background patterns */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-0"></div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-background border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <img 
                  alt="Deploily" 
                  className="h-6 w-auto" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhFE0bGIJ90Rk59sjRypv8iVUbGJptk8CxuISJt5sF0ZsIdZ38qZ3jfZ4aSVnOLNG2O2NrypZIhHACy57LfrHxmxopF9QNp5EltJDZDdPGwpn6J8Zei2Hq2Z9B5o6RmLBX5brIiqh2WBhbk4ckZtAgHJgXrSSfddF20sB2QObiTADYUahLS2Z9zH3gEgH_5v9oMAlUTpF5ctIAfhnF79PQDtIUAJpKHuaSslsGBUlkrHctKQIMHDZXcoU8z4EkWzxUPDiE3nI2qSw"
                />
              </div>
              <span className="text-2xl font-black text-on-surface font-headline tracking-tight">Deploily</span>
            </div>
            <p className="text-on-surface-variant text-base leading-relaxed font-medium">
              {t.footer.tagline}
            </p>
            <div className="flex gap-5">
              <a className="w-10 h-10 rounded-xl bg-surface border border-white/5 flex items-center justify-center text-on-surface-variant hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300" href="#">
                <span className="material-symbols-outlined text-lg">language</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-[0.3em] text-secondary font-headline">Company</h4>
              <nav className="flex flex-col gap-4 font-label">
                <a className="text-on-surface-variant text-sm hover:text-on-surface transition-colors" href="#">About Us</a>
                <a className="text-on-surface-variant text-sm hover:text-on-surface transition-colors" href="#">Careers</a>
                <a className="text-on-surface-variant text-sm hover:text-on-surface transition-colors" href="#">Blog</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-[0.3em] text-secondary font-headline">Platform</h4>
              <nav className="flex flex-col gap-4 font-label">
                <a className="text-on-surface-variant text-sm hover:text-on-surface transition-colors" href="#services">Services</a>
                <a className="text-on-surface-variant text-sm hover:text-on-surface transition-colors" href="#process">Methodology</a>
                <a className="text-on-surface-variant text-sm hover:text-on-surface transition-colors" href="#">Partners</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-sm uppercase tracking-[0.3em] text-secondary font-headline">Legal</h4>
              <nav className="flex flex-col gap-4 font-label">
                <a className="text-on-surface-variant text-sm hover:text-on-surface transition-colors" href="#">Privacy</a>
                <a className="text-on-surface-variant text-sm hover:text-on-surface transition-colors" href="#">Terms</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-28 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant/50 text-xs font-label">{t.footer.copyright}</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-on-surface-variant/50 text-xs font-label uppercase tracking-widest">{t.footer.status}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };
