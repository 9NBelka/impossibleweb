import { notFound } from 'next/navigation';
import { projects, Lang } from '@/data/projects';
import scss from './ProjectPage.module.scss';

import ProjectPageHero from '@/components/ProjectPageComponents/ProjectPageHero';
import TasksProjectPage from '@/components/ProjectPageComponents/TasksProjectPage/TasksProjectPage';
import { BsArrowRightShort } from 'react-icons/bs';
import ProjectGallery from '@/components/ProjectPageComponents/ProjectGallery/ProjectGallery';
import ProjectBlockTitle from '@/components/ProjectPageComponents/ProjectBlockTitle/ProjectBlockTitle';
import ProjectBlockFullDesc from '@/components/ProjectPageComponents/ProjectBlockFullDesc/ProjectBlockFullDesc';

const translations = {
  en: {
    back: 'Back to projects',
    visitSite: 'Visit site',
    category: 'Category',
    date: 'Date',
    taskTitle: 'Objectives',
  },
  ru: {
    back: 'Назад к проектам',
    visitSite: 'Перейти на сайт',
    category: 'Категория',
    date: 'Дата',
    taskTitle: 'Задачи',
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const l = (lang as Lang) in translations ? (lang as Lang) : 'en';
  const t = translations[l];

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <ProjectPageHero project={project} lang={lang} />
      <main className={scss.projectPage}>
        <ProjectBlockTitle lang={lang} description={project.descriptions?.[l]} />

        <TasksProjectPage lang={lang} project={project} />

        <ProjectGallery lang={lang} images={project.imagesAllSites} projectTitle={project.title} />
        <div className={scss.projectBlock}>
          <ProjectBlockFullDesc lang={lang} tasksDescription={project.tasksDescription?.[l]} />

          <div className={scss.visitSiteBlock}>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className={scss.visitButton}>
                {t.visitSite} <BsArrowRightShort className={scss.iconCase} />
              </a>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
