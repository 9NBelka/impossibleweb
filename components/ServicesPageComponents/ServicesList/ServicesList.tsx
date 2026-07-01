'use client';

import scss from './ServicesList.module.scss';
import { Service, Lang } from '@/data/services';
import { BsArrowRightShort, BsCheckCircle } from 'react-icons/bs';
import { getT } from '@/lib/i18n';

export default function ServicesList({ services, lang }: { services: Service[]; lang: string }) {
  const l = lang as Lang;
  const t = getT(lang).servicesPage.list;

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={scss.servicesList}>
      <div className={scss.container}>
        <div className={scss.header}>
          <h2>{t.title}</h2>
        </div>
        <div className={scss.serviceBlocks}>
          {services.map((service, index) => (
            <div key={index} className={scss.serviceBlock}>
              <div className={scss.imageBlock}>
                <img src={service.image} alt={service.title[l]} className={scss.image} />
              </div>

              <div className={scss.content}>
                <div>
                  <h3 className={scss.title}>{service.title[l]}</h3>
                  <p className={scss.subtitle}>{service.subtitle[l]}</p>
                  <p className={scss.description}>{service.description[l]}</p>

                  <div className={scss.includedBlock}>
                    <p className={scss.includedTitle}>{t.included}</p>
                    <ul className={scss.includedList}>
                      {service.included[l].map((item, idx) => (
                        <li key={idx} className={scss.includedItem}>
                          <div>
                            <BsCheckCircle className={scss.iconList} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={scss.blockPriceAndButton}>
                  <p className={scss.price}>
                    {t.price} <strong>{service.price[l]}</strong>
                  </p>
                  <p className={scss.submitButton} onClick={scrollToContact}>
                    {t.submit} <BsArrowRightShort className={scss.icon} />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
