'use client';

import scss from './BlogHero.module.scss';
import { getT } from '@/lib/i18n';

export default function BlogHero({ lang }: { lang: string }) {
  const t = getT(lang).blogPage.hero;

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={scss.blogHero}>
      <div className={scss.heroGradient} />
      <div className={scss.container}>
        <div className={scss.contentFlexRow}>
          <div className={scss.content}>
            <h2 className={scss.title}>
              <span className={scss.brand}>{t.title}</span>
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
