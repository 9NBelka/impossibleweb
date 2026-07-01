'use client';

import scss from './AboutUsHero.module.scss';
import { getT } from '@/lib/i18n';

interface HeroProps {
  lang: string;
}

export default function AboutUsHero({ lang }: HeroProps) {
  const t = getT(lang).aboutUsPage.hero;

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={scss.aboutUsHero}>
      <div className={scss.heroGradient} />
      <div className={scss.container}>
        <div className={scss.contentFlexRow}>
          <div className={scss.content}>
            <h2 className={scss.title}>
              <span className={scss.brand}>{t.title} </span>
              <br /> impossibleWEB
            </h2>
            <p className={scss.subtitle}>{t.subtitle}</p>
            <div className={scss.ctaBlock}>
              <button className={scss.ctaButton} onClick={scrollToContact}>
                {t.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
