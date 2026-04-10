import React from 'react';

const CTA = () => {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto bg-primary-container rounded-xl p-16 md:p-24 text-center text-on-primary-container relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 italic italic italic">Ready for Launch?</h2>
          <p className="text-xl md:text-2xl font-body max-w-2xl mx-auto mb-12 opacity-90">
            Join 200+ companies who trust Deploily with their mission-critical infrastructure.
          </p>
          <button className="bg-white text-primary px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">Start Your Project</button>
        </div>
        {/* Abstract Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full rounded-t-[3rem] py-16 px-12 bg-surface-container-low mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <img alt="Deploily" className="h-8 w-auto" src="/logo.png" />
            <span className="font-black text-xl text-on-surface font-headline">Deploily</span>
          </div>
          <p className="text-on-surface-variant font-headline text-sm tracking-wide max-w-xs mb-8">
            Engineering fluid infrastructure for the next generation of software architects.
          </p>
          <p className="text-on-surface-variant font-headline text-sm tracking-wide">
            © 2024 Deploily LLC. Engineered for Fluidity.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-on-surface font-bold font-headline">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <a className="text-on-surface-variant text-sm hover:text-primary transition-all font-headline" href="#">Platform</a>
              <a className="text-on-surface-variant text-sm hover:text-primary transition-all font-headline" href="#">Solutions</a>
              <a className="text-on-surface-variant text-sm hover:text-primary transition-all font-headline" href="#">Network</a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-on-surface font-bold font-headline">Legal</h4>
            <nav className="flex flex-col gap-2">
              <a className="text-on-surface-variant text-sm hover:text-primary transition-all font-headline" href="#">Company</a>
              <a className="text-on-surface-variant text-sm hover:text-primary transition-all font-headline" href="#">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { CTA, Footer };
