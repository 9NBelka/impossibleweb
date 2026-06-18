import scss from './Footer.module.scss';
import { BsChat, BsEnvelope, BsInstagram, BsTelegram } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import LangLink from '../LangLink/LangLink';
import { getT } from '@/lib/i18n';

interface NavLink {
  title: string;
  linkToPage: string;
}

interface FooterProps {
  onFooterTextLinks: NavLink[];
  lang: string;
}

export default function Footer({ onFooterTextLinks, lang }: FooterProps) {
  const t = getT(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={scss.footer}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.brandSection}>
            <div className={scss.logo}>
              impossible<strong>WEB</strong>
            </div>
            <p className={scss.description}>{t.footer.description}</p>
          </div>

          <div className={scss.linksAndServicesBlock}>
            <div className={scss.linksSection}>
              <h4>{t.footer.navigation}</h4>
              <ul>
                {onFooterTextLinks.map((info, idx) => (
                  <li key={idx}>
                    <LangLink to={info.linkToPage}>{info.title}</LangLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className={scss.contactSection}>
              <h4>{t.footer.contacts}</h4>
              <div className={scss.contactList}>
                <a
                  href='mailto:mpdart2013@gmail.com'
                  className={scss.contactLink}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <BsEnvelope />
                  mpdart2013@gmail.com
                </a>
                <a
                  href='https://wa.me/34610988651'
                  className={scss.contactLink}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FaWhatsapp />
                  +34 610 988 651
                </a>
                {lang === 'ru' && (
                  <a
                    href='https://wa.me/380733291216'
                    className={scss.contactLink}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <FaWhatsapp />
                    +380 73 329 12 16
                  </a>
                )}
                <a
                  href='https://t.me/Archerius'
                  className={scss.contactLink}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <BsChat />
                  @Archerius
                </a>
              </div>
            </div>

            <div className={scss.social}>
              <h5>{t.footer.social}</h5>
              <div className={scss.socialLinks}>
                <a
                  href='https://t.me/Archerius'
                  aria-label='Telegram'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <BsTelegram />
                </a>
                <a
                  href='https://www.instagram.com/ad_impossible/'
                  aria-label='Instagram'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={scss.bottom}>
          <div className={scss.copyright}>
            <p>
              &copy; {currentYear} impossibleWEB. {t.footer.copyright}
            </p>
            <p className={scss.tagline}>{t.footer.tagline}</p>
          </div>
          <div className={scss.legal}>
            <LangLink to='/privacy-policy'>{t.footer.privacyPolicy}</LangLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
