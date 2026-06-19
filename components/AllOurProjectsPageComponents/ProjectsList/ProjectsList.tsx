'use client';

import { useState } from 'react';
import scss from './ProjectsList.module.scss';
import { Project, Lang } from '@/data/projects';
import LangLink from '@/components/LangLink/LangLink';

const translations = {
  en: {
    allProjects: 'All projects',
    newest: '↓ Newest',
    oldest: '↑ Oldest',
  },
  ru: {
    allProjects: 'Все проекты',
    newest: '↓ Сначала новые',
    oldest: '↑ Сначала старые',
  },
};

function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('.').map(Number);
  return new Date(year, month - 1, day);
}

export default function ProjectsList({ projects, lang }: { projects: Project[]; lang: string }) {
  const l = (lang as Lang) in translations ? (lang as Lang) : 'en';
  const t = translations[l];

  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const allFeatures = [...new Set(projects.flatMap((p) => p.features[l]))];

  const filtered = activeFilter
    ? projects.filter((p) => p.features[l].includes(activeFilter))
    : projects;

  const sorted = [...filtered].sort((a, b) => {
    const dateA = a.dateCreate ? parseDate(a.dateCreate) : new Date(0);
    const dateB = b.dateCreate ? parseDate(b.dateCreate) : new Date(0);
    return sortOrder === 'newest'
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });

  return (
    <section className={scss.projectsMain} id='projects'>
      <div className={scss.container}>
        <div className={scss.controlsWrapper}>
          <div className={scss.filtersWrapper}>
            <button
              className={`${scss.filterButton} ${activeFilter === null ? scss.active : ''}`}
              onClick={() => setActiveFilter(null)}>
              {t.allProjects}
            </button>
            {allFeatures.map((feature) => (
              <button
                key={feature}
                className={`${scss.filterButton} ${activeFilter === feature ? scss.active : ''}`}
                onClick={() => setActiveFilter(feature)}>
                {feature}
              </button>
            ))}
          </div>
          <div className={scss.sortWrapper}>
            <button
              className={scss.sortButton}
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}>
              {sortOrder === 'newest' ? t.newest : t.oldest}
            </button>
          </div>
        </div>

        <div className={scss.projectBlocks}>
          {sorted.map((project, index) => (
            <LangLink key={index} to={`/projects/${project.slug}`} className={scss.projectBlock}>
              <div className={scss.imageBlock}>
                <img src={project.image} alt={project.title} />
              </div>
              <h3 className={scss.titleProject}>{project.title}</h3>
              {project.descriptions?.[l] && (
                <p className={scss.descText}>{project.descriptions[l]}</p>
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
            </LangLink>
          ))}
        </div>
      </div>
    </section>
  );
}
