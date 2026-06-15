import scss from './ProjectsHero.module.scss';

export default function ProjectsHero() {
  return (
    <section className={scss.projectsHero}>
      <div className={scss.heroGradient} />
      <div className={scss.container}>
        <div className={scss.contentFlexRow}>
          <div className={scss.content}>
            <h2 className={scss.title}>
              <span className={scss.brand}>Projects</span>
            </h2>

            <p className={scss.subtitle}>
              Our realised projects in different countries. Here you can see examples of our work -
              websites, online shops and corporate solutions. We create modern and functional web
              resources adapted to the goals of each client.
            </p>

            <div className={scss.ctaBlock}>
              <button className={scss.ctaButton}>Book Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
