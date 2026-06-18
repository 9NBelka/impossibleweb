import scss from './PrivacyPolicy.module.scss';

const translations = {
  en: {
    title: 'Privacy Policy',
    sections: [
      {
        title: '1. General Provisions',
        text: 'We respect your privacy and are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable laws. This Privacy Policy explains how we collect, use, store, and protect your information.',
      },
      {
        title: '2. What Data We Collect',
        text: 'We may collect the following personal data when you interact with our website:',
        list: [
          'Name, email address, and phone number provided through contact forms.',
          'Website usage data collected through cookies (e.g., IP address, browser type, pages you visit).',
          'Information provided voluntarily when filling out forms.',
        ],
      },
      {
        title: '3. How We Use Your Data',
        text: 'The collected data is used for:',
        list: [
          'Processing your requests, such as ordering a Google Ads audit.',
          'Improving our website and services by analyzing usage data.',
          'Sending informational messages if you have given consent for this.',
        ],
      },
      {
        title: '4. Transfer of Data to Third Parties',
        text: 'We do not transfer your personal data to third parties, except in the following cases:',
        list: [
          'Situations where it is necessary to fulfill your requests.',
          'Cases provided for by law, such as at the request of government authorities.',
        ],
      },
      {
        title: '5. Your Rights',
        text: 'Under GDPR, you have the right to:',
        list: [
          'Access your personal data.',
          'Correction or deletion of your data.',
          'Restriction or objection to the processing of your data.',
          'Data portability.',
          'Withdraw consent for data processing at any time.',
        ],
      },
      {
        title: '6. Data Protection',
        text: 'We use modern technical and organizational measures to protect your data, including encryption and access restrictions to information.',
      },
      {
        title: '7. Cookies',
        text: 'Our website uses cookies to improve user experience. You can manage cookie settings through your browser.',
      },
      {
        title: '8. Changes to the Policy',
        text: 'We may periodically update this Privacy Policy. We will notify you of any changes on this page.',
      },
      {
        title: '9. Contact Information',
        text: 'If you have any questions regarding this Privacy Policy, please contact us:',
        list: ['Email: mpdart2013@gmail.com', 'Phone: +34 610 988 651'],
      },
    ],
  },
  ru: {
    title: 'Политика конфиденциальности',
    sections: [
      {
        title: '1. Общие положения',
        text: 'Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные в соответствии с Общим регламентом защиты данных (GDPR) и другими применимыми законами. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, храним и защищаем вашу информацию.',
      },
      {
        title: '2. Какие данные мы собираем',
        text: 'Мы можем собирать следующие персональные данные при взаимодействии с нашим сайтом:',
        list: [
          'Имя, адрес электронной почты и номер телефона, предоставленные через контактные формы.',
          'Данные об использовании сайта, собираемые через файлы cookie (например, IP-адрес, тип браузера, посещённые страницы).',
          'Информация, предоставленная добровольно при заполнении форм.',
        ],
      },
      {
        title: '3. Как мы используем ваши данные',
        text: 'Собранные данные используются для:',
        list: [
          'Обработки ваших запросов.',
          'Улучшения нашего сайта и услуг путём анализа данных об использовании.',
          'Отправки информационных сообщений при наличии вашего согласия.',
        ],
      },
      {
        title: '4. Передача данных третьим лицам',
        text: 'Мы не передаём ваши персональные данные третьим лицам, за исключением следующих случаев:',
        list: [
          'Когда это необходимо для выполнения ваших запросов.',
          'Случаи, предусмотренные законом, например по запросу государственных органов.',
        ],
      },
      {
        title: '5. Ваши права',
        text: 'В соответствии с GDPR вы имеете право на:',
        list: [
          'Доступ к вашим персональным данным.',
          'Исправление или удаление ваших данных.',
          'Ограничение или возражение против обработки ваших данных.',
          'Переносимость данных.',
          'Отзыв согласия на обработку данных в любое время.',
        ],
      },
      {
        title: '6. Защита данных',
        text: 'Мы используем современные технические и организационные меры для защиты ваших данных, включая шифрование и ограничение доступа к информации.',
      },
      {
        title: '7. Файлы cookie',
        text: 'Наш сайт использует файлы cookie для улучшения пользовательского опыта. Вы можете управлять настройками cookie в своём браузере.',
      },
      {
        title: '8. Изменения политики',
        text: 'Мы можем периодически обновлять настоящую Политику конфиденциальности. Мы уведомим вас о любых изменениях на этой странице.',
      },
      {
        title: '9. Контактная информация',
        text: 'Если у вас есть вопросы по данной Политике конфиденциальности, свяжитесь с нами:',
        list: ['Email: mpdart2013@gmail.com', 'Телефон: +34 610 988 651'],
      },
    ],
  },
};

type Lang = 'ru' | 'en';

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[lang as Lang] || translations.en;

  return (
    <section className={scss.privacyPolicy}>
      <div className={scss.container}>
        <div className={scss.content}>
          <h2 className={scss.title}>{t.title}</h2>

          {t.sections.map((section, idx) => (
            <div key={idx} className={scss.content}>
              <h3 className={scss.sectionTitle}>{section.title}</h3>
              {section.text && <p className={scss.text}>{section.text}</p>}
              {section.list && (
                <ul className={scss.list}>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
