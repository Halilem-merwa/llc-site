"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  EN: {
    nav: { start: "Get Started", selectLang: "Select Language" },
    hero: {
      badge: "Deploily LLC",
      title: "AI Code, ",
      titleGradient: "Production Ready.",
      subtitle: "We bridge the gap between AI-generated code and production-grade software architecture.",
      cta: "Get Started"
    },
    services: {
      title: "Our ",
      titleAccent: "Services",
      subtitle: "Engineering excellence for the next generation of software development.",
      items: [
        { title: "E-Payment Integration", desc: "Seamless and secure integration of high-volume online payment systems and global gateways." },
        { title: "Code Review & Refactoring", desc: "We audit, fix, and optimize LLM-generated code to meet strict production security and performance standards." },
        { title: "End-to-End Testing", desc: "Automated testing suites that ensure your application works flawlessly across every possible user journey." },
        { title: "Cloud Infrastructure", desc: "Scalable deployment on AWS, Vercel, or GCP with a focus on CI/CD automation and zero-downtime." },
        { title: "Mobile Publishing", desc: "Expert navigation through App Store and Google Play requirements for a smooth launch experience." },
        { title: "API Load Testing", desc: "Simulated high-traffic scenarios to identify bottlenecks before your users do. Guaranteed scalability." }
      ]
    },
    confidence: {
      title: "Confidence ",
      titleAccent: "at Scale.",
      status: "Active Audit",
      p1: "As AI accelerates development, production standards often lag. We ensure your velocity doesn't come at the cost of stability.",
      p2: "Deploily provides the safety net modern engineering teams need. From deep code audits to complex cloud orchestration, we specialize in the \"last mile\" of software delivery.",
      stat1: "Audit Success",
      stat2: "Live Monitoring"
    },
    methodology: {
      title: "Our Methodology",
      subtitle: "A systematic approach to engineering excellence.",
      steps: [
        { title: "Analyze", desc: "Deep dive into your codebase, security posture, and cloud architecture." },
        { title: "Optimize", desc: "Strategic refactoring and performance tuning for critical paths." },
        { title: "Validate", desc: "Stress testing and automated security scans under realistic load." },
        { title: "Ship", desc: "Controlled rollout with full observability and automated rollbacks." }
      ]
    },
    contact: {
      title: "Let's build something ",
      titleAccent: "stable.",
      subtitle: "Tell us about your technical challenges and we'll design a solution.",
      name: "Full Name",
      email: "Email Address",
      project: "Project Details",
      placeholderName: "John Doe",
      placeholderEmail: "john@company.com",
      placeholderProject: "What are your current bottlenecks?",
      submit: "Send Inquiry",
      successTitle: "Message Sent!",
      successDesc: "Thank you for your interest. We will get back to you shortly.",
      retry: "Send another message",
      errorMessage: "Something went wrong. Please try again or email us directly at contact@deploily.com."
    },
    footer: {
      tagline: "Bridging the gap between AI development and production-grade stability. Engineered with precision.",
      copyright: "© 2024 Deploily LLC. All rights reserved.",
      status: "System Status: Operational"
    }
  },
  FR: {
    nav: { start: "Démarrer", selectLang: "Choisir la langue" },
    hero: {
      badge: "Deploily LLC",
      title: "Code IA, ",
      titleGradient: "Prêt pour la Prod.",
      subtitle: "Nous comblons le fossé entre le code généré par l'IA et l'architecture logicielle de production.",
      cta: "Commencer"
    },
    services: {
      title: "Nos ",
      titleAccent: "Services",
      subtitle: "L'excellence en ingénierie pour la prochaine génération de développement logiciel.",
      items: [
        { title: "Intégration Paiement", desc: "Intégration fluide et sécurisée de systèmes de paiement en ligne à haut volume." },
        { title: "Audit & Refactoring", desc: "Nous auditons, corrigeons et optimisons le code généré par LLM pour la production." },
        { title: "Tests de Bout en Bout", desc: "Suites de tests automatisés garantissant le bon fonctionnement de votre application." },
        { title: "Infrastructure Cloud", desc: "Déploiement évolutif sur AWS, Vercel ou GCP avec automatisation CI/CD." },
        { title: "Publication Mobile", desc: "Navigation experte dans les exigences de l'App Store et Google Play." },
        { title: "Tests de Charge API", desc: "Scénarios de trafic élevé simulés pour identifier les goulots d'étranglement." }
      ]
    },
    confidence: {
      title: "Confiance ",
      titleAccent: "à Grande Échelle.",
      status: "Audit Actif",
      p1: "Alors que l'IA accélère le développement, les standards de production sont souvent à la traîne. Nous garantissons que votre vitesse ne se fait pas au détriment de la stabilité.",
      p2: "Deploily fournit le filet de sécurité dont les équipes d'ingénierie modernes ont besoin. Des audits de code profonds à l'orchestration cloud complexe.",
      stat1: "Succès d'Audit",
      stat2: "Surveillance 24/7"
    },
    methodology: {
      title: "Notre Méthodologie",
      subtitle: "Une approche systématique de l'excellence en ingénierie.",
      steps: [
        { title: "Analyser", desc: "Plongée profonde dans votre code, votre sécurité et votre architecture cloud." },
        { title: "Optimiser", desc: "Refactoring stratégique et réglage des performances pour les chemins critiques." },
        { title: "Valider", desc: "Tests de stress et scans de sécurité automatisés sous charge réelle." },
        { title: "Livrer", desc: "Déploiement contrôlé avec observabilité totale et retours en arrière automatisés." }
      ]
    },
    contact: {
      title: "Bâtissons quelque chose de ",
      titleAccent: "stable.",
      subtitle: "Parlez-nous de vos défis techniques et nous concevrons une solution.",
      name: "Nom Complet",
      email: "Adresse Email",
      project: "Détails du Projet",
      placeholderName: "Jean Dupont",
      placeholderEmail: "jean@entreprise.com",
      placeholderProject: "Quels sont vos goulots d'étranglement actuels ?",
      submit: "Envoyer la Demande",
      successTitle: "Message Envoyé !",
      successDesc: "Merci de votre intérêt. Nous vous recontacterons sous peu.",
      retry: "Envoyer un autre message",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer ou nous contacter à contact@deploily.com."
    },
    footer: {
      tagline: "Combler le fossé entre le développement IA et la stabilité de production. Conçu avec précision.",
      copyright: "© 2024 Deploily LLC. Tous droits réservés.",
      status: "Statut du Système : Opérationnel"
    }
  },
  AR: {
    nav: { start: "ابدأ الآن", selectLang: "اختر اللغة" },
    hero: {
      badge: "ديبلويلي LLC",
      title: "برمجة الذكاء الاصطناعي، ",
      titleGradient: "جاهزة للإنتاج.",
      subtitle: "نحن نسد الفجوة بين الكود المولد بالذكاء الاصطناعي ومعايير هندسة البرمجيات للإنتاج.",
      cta: "ابدأ الآن"
    },
    services: {
      title: "خدماتنا ",
      titleAccent: "",
      subtitle: "التميز الهندسي للجيل القادم من تطوير البرمجيات.",
      items: [
        { title: "تكامل الدفع الإلكتروني", desc: "تكامل سلس وآمن لأنظمة الدفع عبر الإنترنت عالية الحجم والبوابات العالمية." },
        { title: "مراجعة وتحسين الكود", desc: "نقوم بتدقيق وإصلاح وتحسين الكود المولد بواسطة نماذج اللغة الكبيرة لتلبية معايير الإنتاج." },
        { title: "الاختبار الشامل", desc: "مجموعات اختبار مؤتمتة تضمن عمل تطبيقك بسلاسة عبر كل رحلات المستخدم المحتملة." },
        { title: "البنية التحتية السحابية", desc: "نشر قابل للتوسع على AWS أو Vercel أو GCP مع التركيز على أتمتة CI/CD." },
        { title: "النشر على الموبايل", desc: "خبرة في التنقل عبر متطلبات App Store و Google Play لتجربة إطلاق سلسة." },
        { title: "اختبار تحميل API", desc: "محاكاة سيناريوهات حركة المرور العالية لتحديد الاختناقات قبل وصول المستخدمين." }
      ]
    },
    confidence: {
      title: "ثقة ",
      titleAccent: "على نطاق واسع.",
      status: "تدقيق نشط",
      p1: "بينما يسرع الذكاء الاصطناعي من عملية التطوير، غالبًا ما تتخلف معايير الإنتاج. نحن نضمن ألا تأتي سرعتك على حساب الاستقرار.",
      p2: "توفر ديبلويلي شبكة الأمان التي تحتاجها فرق الهندسة الحديثة. من عمليات تدقيق الكود العميقة إلى تنسيق السحابة المعقد.",
      stat1: "نجاح التدقيق",
      stat2: "مراقبة مباشرة"
    },
    methodology: {
      title: "منهجيتنا",
      subtitle: "نهج منهجي للتميز الهندسي.",
      steps: [
        { title: "تحليل", desc: "تعمق في قاعدة التعليمات البرمجية والأمان وهندسة السحابة." },
        { title: "تحسين", desc: "إعادة بناء البرمجة الإستراتيجية وضبط الأداء للمسارات الحرجة." },
        { title: "تحقق", desc: "اختبار الإجهاد وفحوصات الأمان المؤتمتة تحت تحميل واقعي." },
        { title: "شحن", desc: "نشر محكوم مع إمكانية مراقبة كاملة وعمليات تراجع مؤتمتة." }
      ]
    },
    contact: {
      title: "دعونا نبني شيئًا ",
      titleAccent: "مستقرًا.",
      subtitle: "أخبرنا عن تحدياتك التقنية وسنقوم بتصميم حل.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      project: "تفاصيل المشروع",
      placeholderName: "أحمد محمد",
      placeholderEmail: "ahmed@company.com",
      placeholderProject: "ما هي العوائق الحالية لديك؟",
      submit: "إرسال الاستفسار",
      successTitle: "تم إرسال الرسالة!",
      successDesc: "شكرًا لاهتمامك. سنقوم بالرد عليك قريبًا.",
      retry: "إرسال رسالة أخرى",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على contact@deploily.com."
    },
    footer: {
      tagline: "سد الفجوة بين تطوير الذكاء الاصطناعي واستقرار معايير الإنتاج. تم هندستها بدقة.",
      copyright: "© 2024 ديبلويلي LLC. جميع الحقوق محفوظة.",
      status: "حالة النظام: يعمل بشكل طبيعي"
    }
  }
};

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [lang, setLang] = useState('FR');

  const t = translations[lang];

  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      <div dir={lang === 'AR' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
