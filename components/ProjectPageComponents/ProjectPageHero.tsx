'use client';

import scss from './ProjectPageHero.module.scss';
import { Project, Lang } from '@/data/projects';

const translations = {
  en: {
    button: 'Book Consultation',
  },
  ru: {
    button: 'Записаться на консультацию',
  },
};

interface ProjectPageHeroProps {
  project: Project;
  lang: string;
}

export default function ProjectPageHero({ project, lang }: ProjectPageHeroProps) {
  const l = (lang as Lang) in translations ? (lang as Lang) : 'en';
  const t = translations[l];

  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={scss.projectsHero} style={{ backgroundImage: `url(${project.image})` }}>
      <div className={scss.heroGradient} />
      <div className={scss.container}>
        <div className={scss.contentFlexRow}>
          <div className={scss.content}>
            <h1 className={scss.title}>{project.title}</h1>

            {project.descriptions?.[l] && (
              <p className={scss.subtitle}>{project.descriptions[l]}</p>
            )}

            <div className={scss.featuresAndTextBlock}>
              {project.dateCreate && (
                <>
                  <p className={scss.dateText}>{project.dateCreate}</p>
                  <span>/</span>
                </>
              )}
              {project.features[l].map((feature, idx) => (
                <p key={idx} className={scss.featuresBlock}>
                  {feature}
                  <span>/</span>
                </p>
              ))}
              {project.developedOn.map((dev, idx) => (
                <p key={idx} className={scss.featuresBlock}>
                  {dev}
                  {idx < project.developedOn.length - 1 && `, `}&nbsp;
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
