"use client";
import React, { useState } from 'react';
import { useTranslation } from '@/context/TranslationContext';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { t, lang, setLang } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const languages = [
    { code: 'FR', label: 'Français' },
    { code: 'EN', label: 'English' },
    { code: 'AR', label: 'العربية', rtl: true }
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <nav className="glass-nav rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            alt="Deploily"
            className="h-9 w-auto transition-transform group-hover:scale-110 duration-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhFE0bGIJ90Rk59sjRypv8iVUbGJptk8CxuISJt5sF0ZsIdZ38qZ3jfZ4aSVnOLNG2O2NrypZIhHACy57LfrHxmxopF9QNp5EltJDZDdPGwpn6J8Zei2Hq2Z9B5o6RmLBX5brIiqh2WBhbk4ckZtAgHJgXrSSfddF20sB2QObiTADYUahLS2Z9zH3gEgH_5v9oMAlUTpF5ctIAfhnF79PQDtIUAJpKHuaSslsGBUlkrHctKQIMHDZXcoU8z4EkWzxUPDiE3nI2qSw"
          />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-secondary font-headline">Deploily</span>
        </div>

        {/* Action Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 group shadow-lg"
            aria-label="Toggle Theme"
          >
            <span className={`material-symbols-outlined text-[20px] transition-all duration-500 ${theme === 'dark' ? 'text-secondary rotate-0' : 'text-primary rotate-[360deg]'}`}>
              {theme === 'dark' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          {/* Language Selector */}
          <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer group">
              <span className={`text-xs font-bold text-on-surface uppercase ${lang === 'AR' ? 'order-2' : ''}`}>{lang}</span>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-secondary transition-colors">language</span>
            </div>
            
            {/* Language Dropdown */}
            <div className={`absolute top-full right-0 mt-2 w-40 bg-surface brightness-125 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 z-[60] ${isHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
              <div className="p-2 px-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-white/5">{t.nav.selectLang}</div>
              {languages.map((l) => (
                <button 
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setIsHovered(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm hover:bg-secondary/10 hover:text-secondary transition-all flex items-center justify-between group/lang ${lang === l.code ? 'bg-secondary/15 text-secondary' : 'text-on-surface'}`}
                >
                  <span className={`font-medium ${l.rtl ? 'w-full text-right font-arabic uppercase' : ''}`} dir={l.rtl ? 'rtl' : 'ltr'}>{l.label}</span>
                  {lang === l.code && (
                    <span className="material-symbols-outlined text-sm ml-2">check</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;
