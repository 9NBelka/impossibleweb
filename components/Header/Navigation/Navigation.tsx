'use client';

import scss from './Navigation.module.scss';
import LangLink from '../../LangLink/LangLink';
import LangSwitcher from '../../LangSwitcher/LangSwitcher';
import { getT } from '@/lib/i18n';

interface NavLink {
  title: string;
  linkToPage: string;
}

interface NavigationProps {
  navRef: React.RefObject<HTMLElement>;
  isMenuOpen: boolean;
  onHeaderTextLinks: NavLink[];
  scrollToSection: (id: string) => void;
  lang: string;
}

export default function Navigation({
  navRef,
  isMenuOpen,
  onHeaderTextLinks,
  scrollToSection,
  lang,
}: NavigationProps) {
  const t = getT(lang);

  return (
    <div className={scss.phoneAndButtonBlock}>
      <nav ref={navRef} className={`${scss.nav} ${isMenuOpen ? scss.navOpen : ''}`}>
        {onHeaderTextLinks.map((info, idx) => (
          <LangLink key={idx} to={info.linkToPage}>
            {info.title}
          </LangLink>
        ))}

        <button className={scss.ctaButtonPhone} onClick={() => scrollToSection('contacts')}>
          {t.header.startProject}
        </button>
      </nav>

      <a
        className={scss.linkToPhone}
        href='tel:+380734516972'
        id='callToPhoneOnHeader'
        target='_blank'
        rel='noopener noreferrer'>
        {t.header.phone}
      </a>

      <LangSwitcher currentLang={lang} />

      <button className={scss.ctaButton} onClick={() => scrollToSection('contacts')}>
        {t.header.startProject}
      </button>
    </div>
  );
}
