'use client';

import scss from './Hero.module.scss';
import LangLink from '../../../LangLink/LangLink';
import { getT } from '@/lib/i18n';

interface HeroProps {
  lang: string;
}

export default function Hero({ lang }: HeroProps) {
  const t = getT(lang);

  const scrollToContact = () => {
    const element = document.getElementById('contacts');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={scss.hero} id='hero'>
      <div className={scss.heroGradient} />
      <div className={scss.container}>
        <div className={scss.contentFlexRow}>
          <div className={scss.content}>
            <p className={scss.hashtag}>{t.hero.hashtag}</p>

            <h1 className={scss.title}>
              <span className={scss.brand}>impossibleWeb</span>
              <br /> {t.hero.title}
            </h1>

            <p className={scss.subtitle}>{t.hero.subtitle}</p>

            <div className={scss.ctaBlock}>
              <button className={scss.ctaButton} onClick={scrollToContact}>
                {t.hero.bookConsultation}
              </button>
              <LangLink to='/projects'>
                <div className={scss.ctaNote}>{t.hero.viewPortfolio}</div>
              </LangLink>
            </div>

            <div className={scss.stats}>
              <div className={scss.stat}>
                <strong>8+</strong>
                <span>{t.hero.stats.experience}</span>
              </div>
              <div className={scss.stat}>
                <strong>200+</strong>
                <span>{t.hero.stats.projects}</span>
              </div>
              <div className={scss.stat}>
                <strong>98%</strong>
                <span>{t.hero.stats.retention}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
