import scss from './TrustedTechnologies.module.scss';
import { BsCheckCircle, BsCodeSlash, BsJournalText, BsLightningCharge } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import { getT } from '@/lib/i18n';
import { RiNextjsLine, RiNodejsLine, RiReactjsLine, RiWordpressLine } from 'react-icons/ri';
import { SiN8N, SiTypescript } from 'react-icons/si';
import clsx from 'clsx';

const trustedTechnologies = [
  {
    items: [
      { icon: <RiNextjsLine className={scss.cardIcon} />, name: 'Next.js' },
      { icon: <RiReactjsLine className={scss.cardIcon} />, name: 'React' },
      {
        icon: <SiTypescript className={clsx(scss.cardIcon, scss.cardIconType)} />,
        name: 'TypeScript',
      },
      { icon: <RiNodejsLine className={scss.cardIcon} />, name: 'Node.js' },
      { icon: <SiN8N className={scss.cardIcon} />, name: 'n8n' },
      { icon: <RiWordpressLine className={scss.cardIcon} />, name: 'WordPress' },
    ],
  },
];

export default function TrustedTechnologies({ lang }: { lang: string }) {
  const t = getT(lang);

  return (
    <section className={scss.trustedTechnologies}>
      <div className={scss.card}>
        <div className={scss.neon}></div>
        <div className={scss.header}>
          <p className={scss.subTitle}>{t.trustedTechnologies.subTitle}</p>
          <h2>{t.trustedTechnologies.title}</h2>
          <div className={scss.neon}></div>
        </div>
        {trustedTechnologies.map((block, index) => (
          <div key={index} className={scss.techBlockNameAndIcon}>
            {block.items.map((item, i) => (
              <div key={i} className={scss.techItem}>
                {item.icon}
                <p className={scss.techItemDescription}>{item.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
