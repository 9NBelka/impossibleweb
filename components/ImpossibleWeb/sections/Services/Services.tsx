import scss from './Services.module.scss';
import { BsCheckCircle, BsCodeSlash, BsJournalText, BsLightningCharge } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import { getT } from '@/lib/i18n';

const icons = [
  <BsCodeSlash className={scss.cardIcon} />,
  <BsJournalText className={scss.cardIcon} />,
  <VscGraph className={scss.cardIcon} />,
  <BsLightningCharge className={scss.cardIcon} />,
];

export default function Services({ lang }: { lang: string }) {
  const t = getT(lang);

  return (
    <section className={scss.services} id='services'>
      <div className={scss.container}>
        <div className={scss.header}>
          <p className={scss.subTitle}>{t.services.subTitle}</p>
          <h2>{t.services.title}</h2>
          <p>{t.services.description}</p>
        </div>
        <div className={scss.flexBlock}>
          {t.services.items.map((service, index) => (
            <div key={index} className={scss.card}>
              <div className={scss.cardIconBlock}>
                <span>{icons[index]}</span>
              </div>
              <h3 className={scss.cartTitle}>{service.title}</h3>
              <p className={scss.cartDescription}>{service.description}</p>
              <ul className={scss.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <BsCheckCircle className={scss.iconList} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
