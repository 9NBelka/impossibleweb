import { BiSolidQuoteAltRight } from 'react-icons/bi';
import scss from './AboutUsMainText.module.scss';
import { getT } from '@/lib/i18n';
import { BsClock, BsCreditCard, BsFileEarmarkText, BsHeadset, BsStack } from 'react-icons/bs';
import { GoStack } from 'react-icons/go';
import { VscTasklist } from 'react-icons/vsc';
import { PiListChecks } from 'react-icons/pi';

const icons = [
  <BsCreditCard className={scss.subDescIcon} />,
  <BsFileEarmarkText className={scss.subDescIcon} />,
  <BsClock className={scss.subDescIcon} />,
  <BsHeadset className={scss.subDescIcon} />,
];

export default function AboutUsMainText({ lang }: { lang: string }) {
  const t = getT(lang).aboutUsPage.mainText;

  return (
    <section className={scss.aboutUsMainText}>
      <div className={scss.container}>
        <div className={scss.header}>
          <p className={scss.subTitle}>{t.subTitle}</p>
          <h2>{t.title}</h2>
        </div>

        <div className={scss.twoColumns}>
          <div className={scss.leftColumn}>
            <p className={scss.intro}>{t.intro}</p>

            <div className={scss.block}>
              <div className={scss.titleWithIconBlock}>
                <div className={scss.titleIconBlock}>
                  <GoStack className={scss.titleIcon} />
                </div>
                <p className={scss.blockTitle}>{t.servicesTitle}</p>
              </div>
              <ul className={scss.list}>
                {t.servicesList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={scss.block}>
              <div className={scss.titleWithIconBlock}>
                <div className={scss.titleIconBlock}>
                  <PiListChecks className={scss.titleIcon} />
                </div>
                <p className={scss.blockTitle}>{t.cycleTitle}</p>
              </div>

              <ul className={scss.list}>
                {t.cycleList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={scss.rightColumn}>
            <div className={scss.rightColumnCards}>
              <div className={scss.card}>
                <p className={scss.cardTitle}>{t.experienceTitle}</p>
                <p className={scss.cardText}>{t.experienceText}</p>
              </div>

              <div className={scss.card}>
                <p className={scss.cardTitle}>{t.transparencyTitle}</p>
                <p className={scss.cardText}>{t.transparencyText}</p>
              </div>
            </div>

            <div className={scss.cardItalic}>
              <div className={scss.cardIconBlock}>
                <BiSolidQuoteAltRight className={scss.cardIcon} />
              </div>
              <p className={scss.textItalic}>{t.cta}</p>
            </div>

            <div className={scss.iconsWithSubDescriptions}>
              {t.subDescText.map((item, idx) => (
                <div key={idx} className={scss.iconWithText}>
                  <span>{icons[idx]}</span>
                  <p className={scss.subDescText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
