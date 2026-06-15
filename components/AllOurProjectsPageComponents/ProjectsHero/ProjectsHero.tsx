'use client';

import scss from './ProjectsHero.module.scss';

const translations = {
  en: {
    title: 'Projects',
    subtitle:
      'Our realised projects in different countries. Here you can see examples of our work - websites, online shops and corporate solutions. We create modern and functional web resources adapted to the goals of each client.',
    button: 'Book Consultation',
  },
  ru: {
    title: 'Проекты',
    subtitle:
      'Наши реализованные проекты в разных странах. Здесь вы можете увидеть примеры нашей работы — сайты, интернет-магазины и корпоративные решения. Мы создаём современные и функциональные веб-ресурсы, адаптированные под цели каждого клиента.',
    button: 'Записаться на консультацию',
  },
};

type Lang = 'ru' | 'en';

export default function ProjectsHero({ lang }: { lang: string }) {
  const t = translations[lang as Lang] || translations.en;

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={scss.projectsHero}>
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
