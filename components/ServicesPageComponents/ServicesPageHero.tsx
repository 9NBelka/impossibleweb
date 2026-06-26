'use client';

import scss from './ServicesPageHero.module.scss';
import TrustedTechnologiesService from './TrustedTechnologiesService/TrustedTechnologiesService';

const translations = {
  en: {
    title: 'Our services',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheets. ',
    button: 'Submit a Request',
  },
  ru: {
    title: 'Наши услуги',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset`s Body Type sheet',
    button: 'Оставить заявку',
  },
};

type Lang = 'ru' | 'en';

export default function ServicesPageHero({ lang }: { lang: string }) {
  const t = translations[lang as Lang] || translations.en;

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
