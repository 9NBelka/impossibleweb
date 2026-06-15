import scss from './AboutUsNumbers.module.scss';

const translations = {
  en: {
    title: 'ImpossibleWeb in figures',
    stats: [
      { value: '12+', label: 'years of experience' },
      { value: '10+', label: 'Years in web creation' },
      { value: '100+', label: 'projects' },
      { value: '200+', label: 'Design options' },
      { value: '98%', label: 'Client Retention' },
    ],
  },
  ru: {
    title: 'ImpossibleWeb в цифрах',
    stats: [
      { value: '12+', label: 'лет опыта' },
      { value: '10+', label: 'лет в создании сайтов' },
      { value: '100+', label: 'проектов' },
      { value: '200+', label: 'дизайн-вариантов' },
      { value: '98%', label: 'довольных клиентов' },
    ],
  },
};

type Lang = 'ru' | 'en';

export default function AboutUsNumbers({ lang }: { lang: string }) {
  const t = translations[lang as Lang] || translations.en;

  return (
    <section className={scss.aboutUsNubmers}>
      <div className={scss.container}>
        <div className={scss.header}>
          <h2>{t.title}</h2>
        </div>
        <div className={scss.stats}>
          {t.stats.map((stat, idx) => (
            <div key={idx} className={scss.stat}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
