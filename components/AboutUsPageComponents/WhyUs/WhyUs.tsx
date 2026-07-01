import scss from './WhyUs.module.scss';
import { BsArrowRepeat, BsPatchCheck, BsSliders } from 'react-icons/bs';
import { getT } from '@/lib/i18n';

const icons = [
  <BsSliders className={scss.cardIcon} />,
  <BsArrowRepeat className={scss.cardIcon} />,
  <BsPatchCheck className={scss.cardIcon} />,
];

export default function WhyUs({ lang }: { lang: string }) {
  const t = getT(lang).aboutUsPage.whyUs;

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
