import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        philosophy: "Philosophy",
        blog: "Blog",
        gallery: "Gallery",
        contact: "Contact"
      },
      hero: {
        tagline: "Bridging Engineering & Purpose",
        title: "Technical Program Manager & Purpose-Driven Innovator",
        subtitle: "From Kitale's curiosity to Berlin's innovation – Engineering with Purpose",
        cta: "Let's Energize Change Together ⚡",
        scroll: "Discover My Journey"
      },
      about: {
        title: "The Journey of a Hybrid Innovator",
        intro: "I'm Clifford Ondieki, a Technical Program Manager who believes true innovation springs from deeply understanding systems—whether they're power grids or human connections. My journey, from the vibrant communities of Kitale, Kenya, to the dynamic tech landscape of Berlin, has been a continuous path of engineering solutions and embodying purpose."
      },
      contact: {
        title: "Let's Create the Future Together",
        subtitle: "Currently exploring Technical Program Manager and Product Leadership roles in Berlin's energy-tech and renewable sectors",
        cta: "Let's Energize Change Together ⚡",
        location: "Based in Berlin, Germany"
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: "Start",
        about: "Über mich",
        projects: "Projekte",
        philosophy: "Philosophie",
        blog: "Blog",
        gallery: "Galerie",
        contact: "Kontakt"
      },
      hero: {
        tagline: "Technik & Zweck verbinden",
        title: "Technical Program Manager & Purpose-Driven Innovator",
        subtitle: "Von Kitales Neugier zu Berlins Innovation – Technik mit Zweck",
        cta: "Lassen Sie uns gemeinsam Veränderungen energetisieren ⚡",
        scroll: "Entdecken Sie meine Reise"
      },
      about: {
        title: "Die Reise eines Hybrid-Innovators",
        intro: "Ich bin Clifford Ondieki, ein Technical Program Manager, der glaubt, dass wahre Innovation daraus entspringt, Systeme tiefgreifend zu verstehen – seien es Stromnetze oder menschliche Verbindungen."
      },
      contact: {
        title: "Lassen Sie uns gemeinsam die Zukunft gestalten",
        subtitle: "Derzeit auf der Suche nach Technical Program Manager und Product Leadership Rollen in Berlins Energie-Tech und erneuerbaren Sektoren",
        cta: "Lassen Sie uns gemeinsam Veränderungen energetisieren ⚡",
        location: "Ansässig in Berlin, Deutschland"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;