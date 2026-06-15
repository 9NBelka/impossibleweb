import scss from './ProvenResults.module.scss';
import { BsArrowRightShort, BsGear, BsMenuButtonWide, BsShopWindow } from 'react-icons/bs';
import LangLink from '../../../LangLink/LangLink';
import { getT } from '@/lib/i18n';

const icons = [
  <BsShopWindow className={scss.cardIcon} />,
  <BsMenuButtonWide className={scss.cardIcon} />,
  <BsGear className={scss.cardIcon} />,
];

export default function ProvenResults({ lang }: { lang: string }) {
  const t = getT(lang);

  return (
    <section className={scss.results} id='cases'>
      <div className={scss.container}>
        <div className={scss.headerAndButton}>
          <div className={scss.header}>
            <p className={scss.subTitle}>{t.provenResults.subTitle}</p>
            <h2>{t.provenResults.title}</h2>
            <p>{t.provenResults.description}</p>
          </div>
          <div className={scss.linkToOurCaseBlock}>
            <LangLink to='/' className={scss.linkToOurCase}>
              {t.provenResults.viewAll} <BsArrowRightShort className={scss.iconCase} />
            </LangLink>
          </div>
        </div>

        <div className={scss.flexBlock}>
          {t.provenResults.results.map((result, index) => (
            <div key={index} className={scss.card}>
              <div className={scss.cardIconBlock}>
                <span>{icons[index]}</span>
                <p className={scss.subTitleIcon}>{result.subTitle}</p>
              </div>
              <p className={scss.statsText}>{result.stats}</p>
              <h3 className={scss.cartTitle}>{result.title}</h3>
              <p className={scss.cartDescription}>{result.description}</p>
            </div>
          ))}
        </div>

        <div className={scss.linkToOurCaseBlockTabletPhone}>
          <LangLink to='/' className={scss.linkToOurCase}>
            {t.provenResults.viewAll} <BsArrowRightShort className={scss.iconCase} />
          </LangLink>
        </div>
      </div>
    </section>
  );
}
