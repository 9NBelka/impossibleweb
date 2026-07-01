'use client';

import scss from './AboutUsNumbers.module.scss';
import { getT } from '@/lib/i18n';
import AnimatedNumber from '@/components/ImpossibleWeb/sections/Hero/AnimatedNumber/AnimatedNumber';
import { parseStatValue } from '@/lib/parseStatValue';

export default function AboutUsNumbers({ lang }: { lang: string }) {
  const t = getT(lang).aboutUsPage.numbers;

  return (
    <section className={scss.aboutUsNubmers}>
      <div className={scss.container}>
        <div className={scss.header}>
          <h2>{t.title}</h2>
        </div>
        <div className={scss.stats}>
          {t.stats.map((stat, idx) => {
            const { number, suffix } = parseStatValue(stat.value);
            return (
              <div key={idx} className={scss.stat}>
                <strong className={scss.statNumbers}>
                  <AnimatedNumber target={number} suffix={suffix} />
                </strong>
                <span className={scss.statNumbersText}>{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
