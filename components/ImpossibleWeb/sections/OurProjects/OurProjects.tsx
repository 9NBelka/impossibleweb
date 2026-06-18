'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useState, useEffect } from 'react';
import scss from './OurProjects.module.scss';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import LangLink from '../../../LangLink/LangLink';
import { getT } from '@/lib/i18n';
import { Project, Lang } from '@/data/projects';

export default function OurProjects({ projects, lang }: { projects: Project[]; lang: string }) {
  const t = getT(lang);
  const l = (lang as Lang) in { en: true, ru: true } ? (lang as Lang) : 'en';

  const [isHovered, setIsHovered] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (!emblaApi || isHovered) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <section className={scss.projects} id='projectsSection'>
      <div className={scss.container}>
        <div className={scss.headerAndButton}>
          <div className={scss.header}>
            <p className={scss.subTitle}>{t.ourProjects.subTitle}</p>
            <h2>{t.ourProjects.title}</h2>
            <p>{t.ourProjects.description}</p>
          </div>
          <div className={scss.linkToOurCaseBlock}>
            <LangLink to='/projects' className={scss.linkToOurCase}>
              {t.ourProjects.viewAll} <BsArrowRightShort className={scss.iconCase} />
            </LangLink>
          </div>
        </div>

        <div
          className={scss.sliderWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <button className={scss.prevBtn} onClick={() => emblaApi?.scrollPrev()}>
            <BsArrowLeftShort className={scss.icon} />
          </button>
          <button className={scss.nextBtn} onClick={() => emblaApi?.scrollNext()}>
            <BsArrowRightShort className={scss.icon} />
          </button>

          <div className={scss.embla} ref={emblaRef}>
            <div className={scss.emblaContainer}>
              {projects.map((project, index) => (
                <LangLink key={index} to={`/projects/${project.slug}`} className={scss.emblaSlide}>
                  <div className={scss.slideProject}>
                    <div className={scss.imageBlock}>
                      <img src={project.image} alt={project.title} />
                    </div>
                    <h3 className={scss.titleProject}>{project.title}</h3>
                    <div>
                      {project.features[l].map((feature, idx) => (
                        <button key={idx} className={scss.featuresBlock}>
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>
                </LangLink>
              ))}
            </div>
          </div>
        </div>

        <div className={scss.linkToOurCaseBlockTabletPhone}>
          <LangLink to='/projects' className={scss.linkToOurCase}>
            {t.ourProjects.viewAll} <BsArrowRightShort className={scss.iconCase} />
          </LangLink>
        </div>
      </div>
    </section>
  );
}
