'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '../Header/Header';

interface NavLink {
  title: string;
  linkToPage: string;
}

interface ImpossibleWebClientProps {
  lang: string;
  navLinks: NavLink[];
  startProject: string;
  phone: string;
}

export default function ImpossibleWebClient({
  lang,
  navLinks,
  startProject,
  phone,
}: ImpossibleWebClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem('scrollTo');
    const hash = window.location.hash?.split('#').filter(Boolean)[0];
    if (stored) sessionStorage.removeItem('scrollTo');

    const sectionId = stored || hash;
    if (!sectionId) return;

    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 30) {
        requestAnimationFrame(() => tryScroll(attempts + 1));
      }
    };

    requestAnimationFrame(() => tryScroll());
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Header
      onHeaderTextLinks={navLinks}
      lang={lang}
      isScrolled={isScrolled}
      scrollToSection={scrollToSection}
      startProject={startProject}
      phone={phone}
    />
  );
}
