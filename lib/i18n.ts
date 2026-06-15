import ru from '@/i18n/ru.json';
import en from '@/i18n/en.json';

const translations = { ru, en };

export type Lang = 'ru' | 'en';

export function getT(lang: string) {
  const l = (translations[lang as Lang] ? lang : 'en') as Lang;
  return translations[l];
}
