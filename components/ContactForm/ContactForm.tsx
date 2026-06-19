import styles from './ContactForm.module.scss';
import { BsCheckCircle } from 'react-icons/bs';
import { getT } from '@/lib/i18n';
import ConForm from './Form/Form';

export default function ContactForm({ lang }: { lang: string }) {
  const t = getT(lang).contactForm;

  return (
    <div className={styles.formContainer} id='contacts'>
      <div className={styles.container}>
        <div className={styles.contactBlock}>
          <div className={styles.header}>
            <h2>{t.title}</h2>
            <p>{t.description}</p>
            <ul className={styles.features}>
              {t.features.map((feature, idx) => (
                <li key={idx}>
                  <BsCheckCircle className={styles.iconList} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <ConForm lang={lang} />
        </div>
      </div>
    </div>
  );
}
