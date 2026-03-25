// Tailwind Configuration
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "tertiary": "#a33200",
          "surface-container-high": "#e6e8ea",
          "surface-container-highest": "#e0e3e5",
          "on-secondary-fixed-variant": "#7c2e00",
          "surface-container-lowest": "#ffffff",
          "secondary": "#fe6500",
          "primary": "#0050cb",
          "on-surface-variant": "#475569",
          "error": "#ba1a1a",
          "on-secondary-container": "#541d00",
          "on-background": "#0f172a",
          "background": "#f8fafc",
          "on-primary-fixed-variant": "#003fa4",
          "tertiary-fixed-dim": "#ffb59d",
          "primary-fixed": "#dae1ff",
          "primary-container": "#0066ff",
          "on-secondary-fixed": "#360f00",
          "surface-variant": "#f1f5f9",
          "on-error": "#ffffff",
          "on-tertiary-container": "#fff6f4",
          "on-secondary": "#ffffff",
          "outline": "#94a3b8",
          "error-container": "#ffdad6",
          "surface-container-low": "#ffffff",
          "secondary-fixed-dim": "#ffb596",
          "inverse-primary": "#b3c5ff",
          "on-primary-container": "#f8f7ff",
          "inverse-surface": "#0f172a",
          "on-tertiary": "#ffffff",
          "surface-tint": "#0054d6",
          "on-error-container": "#93000a",
          "secondary-fixed": "#ffdbcd",
          "on-surface": "#0f172a",
          "outline-variant": "#e2e8f0",
          "on-primary-fixed": "#001849",
          "secondary-container": "#fff7ed",
          "inverse-on-surface": "#f8fafc",
          "primary-fixed-dim": "#b3c5ff",
          "surface-container": "#f1f5f9",
          "surface": "#ffffff",
          "tertiary-container": "#cc4204",
          "on-tertiary-fixed": "#390c00",
          "surface-bright": "#ffffff",
          "on-tertiary-fixed-variant": "#832600",
          "tertiary-fixed": "#ffdbd0",
          "surface-dim": "#f1f5f9",
          "on-primary": "#ffffff"
        },
        fontFamily: {
          "headline": ["Manrope", "Inter", "sans-serif"],
          "body": ["Inter", "sans-serif"],
          "label": ["Inter", "sans-serif"]
        },
        borderRadius: { "DEFAULT": "0.75rem", "lg": "1.25rem", "xl": "2rem", "full": "9999px" },
      },
    },
  };
}

// Reveal animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  
  // Mobile menu toggle (if applicable)
  const menuBtn = document.querySelector('button.md\\:hidden');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      console.log('Menu clicked');
      // Add logic here if a mobile menu was present in the original design
    });
  }
});
