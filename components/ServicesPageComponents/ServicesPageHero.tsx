'use client';

import scss from './ServicesPageHero.module.scss';
import TrustedTechnologiesService from './TrustedTechnologiesService/TrustedTechnologiesService';
import { getT } from '@/lib/i18n';

export default function ServicesPageHero({ lang }: { lang: string }) {
  const t = getT(lang).servicesPage.hero;

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className={scss.servicesPageHero}>
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
      <TrustedTechnologiesService lang={lang} />
    </>
  );
}
