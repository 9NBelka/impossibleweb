import scss from './WhyUs.module.scss';
import { BsArrowRepeat, BsPatchCheck, BsSliders } from 'react-icons/bs';

const translations = {
  en: {
    title: 'Why choose impossibleWeb',
    subtitle: "We don't just create websites, we create effective tools for growing your business.",
    cards: [
      {
        title: 'Personalised approach',
        description: 'Each project is tailored to meet the goals and specifics of your business.',
      },
      {
        title: 'Full service',
        description:
          'From idea and design to promotion and advertising - everything is turnkey, without extra contractors and overpayments.',
      },
      {
        title: 'Real results',
        description:
          'We build websites that bring in customers and sales, not just a "web presence".',
      },
    ],
  },
  ru: {
    title: 'Почему выбирают impossibleWeb',
    subtitle: 'Мы не просто создаём сайты — мы создаём эффективные инструменты для роста бизнеса.',
    cards: [
      {
        title: 'Персональный подход',
        description: 'Каждый проект адаптируется под цели и специфику вашего бизнеса.',
      },
      {
        title: 'Полный цикл',
        description:
          'От идеи и дизайна до продвижения и рекламы — всё под ключ, без лишних подрядчиков и переплат.',
      },
      {
        title: 'Реальные результаты',
        description:
          'Мы создаём сайты, которые приносят клиентов и продажи, а не просто «присутствие в интернете».',
      },
    ],
  },
};

type Lang = 'ru' | 'en';

const icons = [
  <BsSliders className={scss.cardIcon} />,
  <BsArrowRepeat className={scss.cardIcon} />,
  <BsPatchCheck className={scss.cardIcon} />,
];

export default function WhyUs({ lang }: { lang: string }) {
  const t = translations[lang as Lang] || translations.en;

  return (
    <section className={scss.whyUs} id='aboutUs'>
      <div className={scss.container}>
        <div className={scss.header}>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className={scss.flexBlock}>
          {t.cards.map((card, idx) => (
            <div key={idx} className={scss.card}>
              <div className={scss.cardIconBlock}>
                <span>{icons[idx]}</span>
              </div>
              <h3 className={scss.cartTitle}>{card.title}</h3>
              <p className={scss.cartDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
