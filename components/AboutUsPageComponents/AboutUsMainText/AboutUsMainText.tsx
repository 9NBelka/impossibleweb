import scss from './AboutUsMainText.module.scss';

const translations = {
  en: {
    title: 'ImpossibleWeb - your reliable partner in web development',
    paragraphOne:
      "ImpossibleWeb - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
    paragraphOneBold: 'ImpossibleWeb',
    paragraphTwo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley.",
    paragraphTwoBold: 'It has survived not only many decades',
  },
  ru: {
    title: 'ImpossibleWeb — ваш надёжный партнёр в веб-разработке',
    paragraphOne:
      'ImpossibleWeb — Lorem Ipsum — это просто текст-заполнитель печатной и типографской индустрии. Lorem Ipsum является стандартным текстом-заполнителем с 1966 года, когда дизайнеры Letraset и Джеймс Мосли взяли перевод Цицерона 1914 года.',
    paragraphOneBold: 'ImpossibleWeb',
    paragraphTwo:
      'Lorem Ipsum — это просто текст-заполнитель печатной и типографской индустрии. Он пережил не только многие десятилетия, но и переход в электронный набор текста, оставаясь практически неизменным.',
    paragraphTwoBold: 'Он пережил не только многие десятилетия',
  },
};

type Lang = 'ru' | 'en';

export default function AboutUsMainText({ lang }: { lang: string }) {
  const t = translations[lang as Lang] || translations.en;

  return (
    <section className={scss.aboutUsMainText}>
      <div className={scss.container}>
        <div className={scss.header}>
          <h2>{t.title}</h2>
        </div>
        <div className={scss.textBlock}>
          <p className={scss.text}>
            <strong>{t.paragraphOneBold}</strong> - {t.paragraphOne}
          </p>
          <p className={scss.text}>
            <strong>{t.paragraphTwoBold}</strong> {t.paragraphTwo}
          </p>
        </div>
      </div>
    </section>
  );
}
