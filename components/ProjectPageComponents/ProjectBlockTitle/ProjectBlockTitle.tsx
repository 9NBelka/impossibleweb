import scss from './ProjectBlockTitle.module.scss';
import LangLink from '@/components/LangLink/LangLink';
import { TiArrowLeftThick } from 'react-icons/ti';

const translations = {
  en: {
    back: 'Back to projects',
  },
  ru: {
    back: 'Назад к проектам',
  },
};

type Lang = 'ru' | 'en';

interface ProjectBlockTitleProps {
  lang: string;
  description?: string;
}

export default function ProjectBlockTitle({ lang, description }: ProjectBlockTitleProps) {
  const l = (lang as Lang) in translations ? (lang as Lang) : 'en';
  const t = translations[l];

  return (
    <div className={scss.blockTitle}>
      <div className={scss.container}>
        <LangLink to='/projects' className={scss.back}>
          <TiArrowLeftThick className={scss.backIcon} />
          {t.back}
        </LangLink>
        {description && (
          <div className={scss.header}>
            <h2>{description}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
