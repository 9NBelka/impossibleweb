'use client';

import { useState, useEffect, useRef } from 'react';
import scss from './Header.module.scss';
import { BsList, BsXLg } from 'react-icons/bs';
import Navigation from './Navigation/Navigation';
import LangLink from '../LangLink/LangLink';

interface NavLink {
  title: string;
  linkToPage: string;
}

interface HeaderProps {
  onHeaderTextLinks: NavLink[];
  lang: string;
  isScrolled: boolean;
  scrollToSection: (id: string) => void;
}

export default function Header({
  onHeaderTextLinks,
  lang,
  isScrolled,
  scrollToSection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(`.${scss.menuToggle}`)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`${scss.header} ${isScrolled ? scss.scrolled : ''}`}>
      <div className={scss.container}>
        <div className={scss.logo}>
          <LangLink to='/'>
            impossible<strong>WEB</strong>
          </LangLink>
        </div>

        <Navigation
          navRef={navRef}
          isMenuOpen={isMenuOpen}
          onHeaderTextLinks={onHeaderTextLinks}
          scrollToSection={(id) => {
            scrollToSection(id);
            setIsMenuOpen(false);
          }}
          lang={lang}
        />

        <button
          className={scss.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Menu'>
          {isMenuOpen ? <BsXLg className={scss.menuIcon} /> : <BsList className={scss.menuIcon} />}
        </button>
      </div>
    </header>
  );
}
