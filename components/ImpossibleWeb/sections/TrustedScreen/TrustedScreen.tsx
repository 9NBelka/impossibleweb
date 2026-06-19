'use client';

import Marquee from 'react-fast-marquee';
import scss from './TrustedScreen.module.scss';

const images = [
  '/images/trustUs/arhitectureLogoCube.webp',
  '/images/trustUs/teamLeadLogoCube.webp',
  '/images/trustUs/unitTestLogoCube.webp',
  '/images/trustUs/adressabblesLogoCube.webp',
  '/images/trustUs/ecsLogoCube.webp',
  '/images/trustUs/crmMech.webp',
  '/images/trustUs/logo_kyiv_term.webp',
  '/images/trustUs/avtosferaLogo.webp',
  '/images/trustUs/AZRLogo.webp',
  '/images/trustUs/blackTowerLogo.webp',
  '/images/trustUs/fireAutoLogo.webp',
];

export default function TrustedScreen({ right }: { right?: 'left' | 'right' }) {
  return (
    <div className={scss.trustedScreen}>
      <Marquee direction={right} speed={50} gradient={false} className={scss.trustedScreenBlocks}>
        {[...images, ...images].map((img, index) => (
          <div key={index} className={scss.trustedScreenBlock}>
            <img src={img} alt='logo' className={scss.trustedScreenImages} loading='lazy' />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
