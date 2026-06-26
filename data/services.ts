export type Lang = 'en' | 'ru';

export interface Service {
  title: Record<Lang, string>;
  image: string;
  subtitle: Record<Lang, string>;
  description: Record<Lang, string>;
  included: Record<Lang, string[]>;
  price: Record<Lang, string>;
}

export const services: Service[] = [
  {
    title: {
      en: 'Online shops',
      ru: 'Интернет-магазины',
    },
    image: '/images/projectsImages/project-sShop.webp',
    subtitle: {
      en: 'Modern shops that sell.',
      ru: 'Современные магазины, которые продают.',
    },
    description: {
      en: 'We create online shops that are easy to manage and easy to develop. Everything you need is already included.',
      ru: 'Мы создаём интернет-магазины, которыми легко управлять и легко развивать. Всё необходимое уже включено.',
    },
    included: {
      en: [
        'Accepting payments. Connection of popular payment systems: Visa, Mastercard, Stripe, PayPal, Klarna, Apple Pay, Google Pay, Bizum and others.',
        'Flexible delivery settings by region, weight, amount and other parameters.',
        'Fully adaptable - works great on phone, tablet and PC.',
        'Convenient bulk loading of products via a table.',
        'Multilanguage - automatic and manual translation of the site.',
        'Set up discounts, coupons, pop-ups and banners.',
        'Protection against viruses, hacker attacks, backup and fast recovery.',
      ],
      ru: [
        'Приём платежей. Подключение популярных платёжных систем: Visa, Mastercard, Stripe, PayPal, Klarna, Apple Pay, Google Pay, Bizum и других.',
        'Гибкая настройка доставки по региону, весу, сумме и другим параметрам.',
        'Полностью адаптивный — отлично работает на телефоне, планшете и ПК.',
        'Удобная массовая загрузка товаров через таблицу.',
        'Мультиязычность — автоматический и ручной перевод сайта.',
        'Настройка скидок, купонов, поп-апов и баннеров.',
        'Защита от вирусов, хакерских атак, резервное копирование и быстрое восстановление.',
      ],
    },
    price: {
      en: 'from 600 €',
      ru: 'от 600 €',
    },
  },
  {
    title: {
      en: 'Business card websites',
      ru: 'Сайты-визитки',
    },
    image: '/images/projectsImages/project-logitrans.webp',
    subtitle: {
      en: 'Your business on the internet in 7 days.',
      ru: 'Ваш бизнес в интернете за 7 дней.',
    },
    description: {
      en: 'A compact and effective website for small businesses and specialists. Fast, beautiful and ready to attract clients.',
      ru: 'Компактный и эффективный сайт для малого бизнеса и специалистов. Быстрый, красивый и готовый привлекать клиентов.',
    },
    included: {
      en: [
        'Up to 5 pages: home, about, services, portfolio, contacts.',
        'Mobile-first design — looks great on all devices.',
        'Contact form with notifications to email or Telegram.',
        'SEO setup: meta tags, sitemap, robots.txt.',
        'Google Maps integration.',
        'Social media links.',
      ],
      ru: [
        'До 5 страниц: главная, о нас, услуги, портфолио, контакты.',
        'Mobile-first дизайн — отлично выглядит на всех устройствах.',
        'Контактная форма с уведомлениями на email или Telegram.',
        'SEO настройка: мета теги, sitemap, robots.txt.',
        'Интеграция Google Maps.',
        'Ссылки на социальные сети.',
      ],
    },
    price: {
      en: 'from 300 €',
      ru: 'от 300 €',
    },
  },
  {
    title: {
      en: 'Landing pages',
      ru: 'Лендинги',
    },
    image: '/images/projectsImages/project-orbit.webp',
    subtitle: {
      en: 'High-converting pages that sell.',
      ru: 'Высококонверсионные страницы, которые продают.',
    },
    description: {
      en: 'We build landing pages focused on one goal — converting visitors into clients. Perfect for advertising campaigns.',
      ru: 'Мы создаём лендинги, сфокусированные на одной цели — превратить посетителей в клиентов. Идеально для рекламных кампаний.',
    },
    included: {
      en: [
        'A/B testing setup.',
        'Copywriting support.',
        'Performance audits.',
        'Integration with CRM and analytics.',
        'Fast load speed — Core Web Vitals optimized.',
        'Pixel tracking: Google Ads, Meta, TikTok.',
      ],
      ru: [
        'Настройка A/B тестов.',
        'Поддержка копирайтинга.',
        'Аудит производительности.',
        'Интеграция с CRM и аналитикой.',
        'Высокая скорость загрузки — оптимизация Core Web Vitals.',
        'Пиксели: Google Ads, Meta, TikTok.',
      ],
    },
    price: {
      en: 'from 400 €',
      ru: 'от 400 €',
    },
  },
  {
    title: {
      en: 'Workflow Automation',
      ru: 'Автоматизация процессов',
    },
    image: '/images/automatizationProblemImage.jpg',
    subtitle: {
      en: 'Eliminate manual tasks.',
      ru: 'Устраните ручной труд.',
    },
    description: {
      en: 'We design and implement robust automations using n8n and custom webhooks to streamline your business operations.',
      ru: 'Проектируем и внедряем автоматизации на n8n и кастомных вебхуках для оптимизации бизнес-процессов.',
    },
    included: {
      en: [
        'CRM syncing and lead management.',
        'Order processing automation.',
        'Telegram and email notifications.',
        'Google Sheets and Airtable integrations.',
        'Custom n8n nodes and workflows.',
        'API integrations between any services.',
      ],
      ru: [
        'Синхронизация CRM и управление лидами.',
        'Автоматизация обработки заказов.',
        'Уведомления в Telegram и email.',
        'Интеграции с Google Sheets и Airtable.',
        'Кастомные n8n-ноды и воркфлоу.',
        'API-интеграции между любыми сервисами.',
      ],
    },
    price: {
      en: 'from 200 €',
      ru: 'от 200 €',
    },
  },
  {
    title: {
      en: 'Advertising on Google, Instagram and Facebook',
      ru: 'Реклама в Google, Instagram и Facebook',
    },
    image: '/images/imageAdsHero.jpg',
    subtitle: {
      en: 'Advertising that drives leads, not just traffic.',
      ru: 'Реклама, которая приносит заявки, а не просто трафик.',
    },
    description: {
      en: 'We fix technical debt, improve site speed, and structure data for maximum visibility in search engines.',
      ru: 'We create and optimize high-performing advertising campaigns that drive real customers while maximizing your advertising budget. Our strategies are built on proven experience helping businesses grow in markets around the world.',
    },
    included: {
      en: [
        'Launch of advertising campaigns on Google, Instagram, and Facebook.',
        'Keyword and negative keyword research.',
        'Creation of ad creatives, banners, and advertisements.',
        'Continuous analysis, testing, and campaign optimization.',
        'Budget planning and transparent performance reporting.',
      ],
      ru: [
        'Запуск рекламных кампаний в Google, Instagram и Facebook.',
        'Подбор ключевых и минус-слов.',
        'Создание рекламных креативов, баннеров и объявлений.',
        'Постоянный анализ, тестирование и оптимизация.',
        'Подбор оптимального бюджета и прозрачная аналитика результатов.',
      ],
    },
    price: {
      en: 'from 150 €',
      ru: 'от 150 €',
    },
  },
];
