import scss from './ProjectBlockFullDesc.module.scss';
import { BsArrowRightShort } from 'react-icons/bs';
import { Lang } from '@/data/projects';

const translations = {
  en: {
    taskTitle: 'Objectives',
    keyRequirements: 'Key requirements',
    solutions: 'Solutions',
    technicalPart: 'Technical part',
    result: 'Result',
  },
  ru: {
    taskTitle: 'Задачи',
    keyRequirements: 'Ключевые требования',
    solutions: 'Решения',
    technicalPart: 'Техническая часть',
    result: 'Результат',
  },
};

interface ProjectBlockFullDescProps {
  lang: string;
  tasksDescription?: string;
}

export default function ProjectBlockFullDesc({
  lang,
  tasksDescription,
}: ProjectBlockFullDescProps) {
  const l = (lang as Lang) in translations ? (lang as Lang) : 'en';
  const t = translations[l];

  return (
    <div className={scss.content}>
      <div className={scss.container}>
        {tasksDescription && (
          <div className={scss.descriptionBlocks}>
            <div className={scss.descriptionBlock}>
              <p className={scss.descriptionBlockTitle}>{t.taskTitle}:</p>
              <p className={scss.description}>{tasksDescription}</p>
            </div>
            <div className={scss.descriptionBlock}>
              <p className={scss.descriptionBlockTitle}>{t.keyRequirements}:</p>
              <p className={scss.description}>{tasksDescription}</p>
            </div>
            <div className={scss.descriptionBlock}>
              <p className={scss.descriptionBlockTitle}>{t.solutions}:</p>
              <p className={scss.description}>{tasksDescription}</p>
            </div>
            <div className={scss.descriptionBlock}>
              <p className={scss.descriptionBlockTitle}>{t.technicalPart}:</p>
              <p className={scss.description}>{tasksDescription}</p>
            </div>
            <div className={scss.descriptionBlock}>
              <p className={scss.descriptionBlockTitle}>{t.result}:</p>
              <p className={scss.description}>{tasksDescription}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
