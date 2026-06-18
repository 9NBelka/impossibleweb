import scss from './TasksProjectPage.module.scss';
import { BsCheckCircle, BsCodeSlash, BsJournalText, BsLightningCharge } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import { getT } from '@/lib/i18n';
import { Project, Lang } from '@/data/projects';

const icons = [
  <BsCodeSlash className={scss.cardIcon} />,
  <BsJournalText className={scss.cardIcon} />,
  <VscGraph className={scss.cardIcon} />,
  <BsLightningCharge className={scss.cardIcon} />,
];

type Props = {
  lang: string;
  project: Project;
};

export default function TasksProjectPage({ lang, project }: Props) {
  const t = getT(lang);

  // Берём tasks для текущего языка
  const tasksData = project.tasks?.[lang as Lang];

  if (!tasksData || tasksData.length === 0) {
    return null; // или заглушку
  }

  // Так как у тебя структура tasks[lang][0].items
  const services = tasksData[0]?.items || [];

  return (
    <section className={scss.tasks} id='tasks'>
      <div className={scss.container}>
        <div className={scss.flexBlock}>
          {services.map((service, index) => (
            <div key={index} className={scss.card}>
              <div className={scss.cardIconAndTitleBlock}>
                <div className={scss.cardIconBlock}>
                  <span>{icons[index] ?? icons[0]}</span>
                </div>
                <h3 className={scss.cartTitle}>{service.title}</h3>
              </div>

              {/* <p className={scss.description}>{service.description}</p> */}

              <ul className={scss.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <BsCheckCircle className={scss.iconList} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
