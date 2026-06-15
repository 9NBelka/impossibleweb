'use client';

import scss from './AboutUsHero.module.scss';

const translations = {
  en: {
    title: 'About us',
    subtitle:
      'We build modern, fast and effective websites that help businesses grow and sell. From idea and design to promotion and advertising - everything is turnkey, with transparent terms and attention to every detail.',
    button: 'Book Consultation',
  },
  ru: {
    title: 'О нас',
    subtitle:
      'Мы создаём современные, быстрые и эффективные сайты, которые помогают бизнесу расти и продавать. От идеи и дизайна до продвижения и рекламы — всё под ключ, с прозрачными условиями и вниманием к каждой детали.',
    button: 'Записаться на консультацию',
  },
};

type Lang = 'ru' | 'en';

export default function AboutUsHero({ lang }: { lang: string }) {
  const t = translations[lang as Lang] || translations.en;

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
