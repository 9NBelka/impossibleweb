'use client';

import Marquee from 'react-fast-marquee';
import scss from './TrustedScreen.module.scss';

const images = [
  '/images/trustUs/arhitectureLogoCube.png',
  '/images/trustUs/teamLeadLogoCube.png',
  '/images/trustUs/unitTestLogoCube.png',
  '/images/trustUs/adressabblesLogoCube.png',
  '/images/trustUs/ecsLogoCube.png',
  '/images/trustUs/crmMech.png',
  '/images/trustUs/logo_kyiv_term.png',
  '/images/trustUs/avtosferaLogo.png',
  '/images/trustUs/AZRLogo.png',
  '/images/trustUs/blackTowerLogo.png',
  '/images/trustUs/fireAutoLogo.png',
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
