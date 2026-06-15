'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import scss from './NotFoundPage.module.scss';

const translations = {
  ru: {
    code: '404',
    title: 'Страница не найдена',
    description: 'Кажется, мы потеряли след. Вернёмся к главному?',
    button: 'На главную',
  },
  en: {
    code: '404',
    title: 'Page not found',
    description: "We seem to have lost the trail. Let's go back to the main thing?",
    button: 'To the main page',
  },
};

type Lang = 'ru' | 'en';

export default function NotFound() {
  const pathname = usePathname();
  const lang = (pathname?.split('/')[1] as Lang) || 'en';
  const t = translations[lang] || translations.en;

  return (
    <div className={scss.backgroundBlock}>
      <div className={scss.container}>
        <div className={scss.notFoundPageBlock}>
          <h2>{t.code}</h2>
          <h3>{t.title}</h3>
          <p className={scss.notFoundPageDescriptionOrange}>{t.description}</p>
          <Link href={`/${lang}`} className={scss.notFoundPageButton}>
            {t.button}
          </Link>
        </div>
      </div>
    </div>
  );
}
