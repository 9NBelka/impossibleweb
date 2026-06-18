import scss from './ProjectGallery.module.scss';
import { Lang } from '@/data/projects';

const translations = {
  en: { title: 'Project design' },
  ru: { title: 'Дизайн проекта' },
};

interface GalleryItem {
  image: string;
  caption: Record<Lang, string>;
}

interface ProjectGalleryProps {
  images: GalleryItem[];
  projectTitle: string;
  lang: string;
}

export default function ProjectGallery({ images, projectTitle, lang }: ProjectGalleryProps) {
  const l = (lang as Lang) in translations ? (lang as Lang) : 'en';
  const t = translations[l];

  if (!images || images.length === 0) return null;

  return (
    <section className={scss.gallery}>
      <div className={scss.container}>
        <div className={scss.header}>
          <h3>{t.title}</h3>
        </div>
        <div className={scss.grid}>
          {images.map((item, idx) => (
            <div key={idx} className={scss.designAllSite}>
              <p className={scss.caption}>{item.caption[l]}</p>
              <div className={scss.imageBlock}>
                <img
                  src={item.image}
                  alt={`${projectTitle} — ${item.caption[l]}`}
                  className={scss.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
