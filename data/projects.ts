export type Lang = 'en' | 'ru';

export interface Project {
  title: string;
  image: string;
  features: Record<Lang, string[]>;
  descriptions?: Record<Lang, string>;
  dateCreate?: string;
}

export const projects: Project[] = [
  {
    title: 'AZR Pivdennyy',
    image: '/images/projectsImages/project-azr.png',
    descriptions: {
      en: 'A modern website for a car service station in southern Ukraine. Full cycle: design, development, SEO setup.',
      ru: 'Современный сайт для автосервиса на юге Украины. Полный цикл: дизайн, разработка, настройка SEO.',
    },
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    dateCreate: '20.05.2026',
  },
  {
    title: 'kiev term',
    image: '/images/projectsImages/project-kievtern.png',
    descriptions: {
      en: 'Business card website for a Kyiv-based company. Clean design, fast load, mobile-first.',
      ru: 'Сайт-визитка для киевской компании. Чистый дизайн, быстрая загрузка, mobile-first.',
    },
    features: {
      en: ['Business card sites'],
      ru: ['Сайты-визитки'],
    },
    dateCreate: '23.02.2025',
  },
  {
    title: 'mechOrbit',
    image: '/images/projectsImages/project-orbit.png',
    descriptions: {
      en: 'CRM and landing page for an auto repair shop management SaaS. Built on Next.js with multilingual blog.',
      ru: 'CRM и лендинг для SaaS-системы управления автосервисом. Разработан на Next.js с мультиязычным блогом.',
    },
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    dateCreate: '01.05.2026',
  },
  {
    title: 'Avtoatmosfera',
    image: '/images/projectsImages/project-avtosfera.png',
    descriptions: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    dateCreate: '30.09.2025',
  },
  {
    title: 'sxShop',
    image: '/images/projectsImages/project-sShop.webp',
    descriptions: {
      en: 'Online shop with product catalogue, cart, and payment integration. Optimised for conversions.',
      ru: 'Интернет-магазин с каталогом товаров, корзиной и интеграцией оплаты. Оптимизирован под конверсии.',
    },
    features: {
      en: ['Online shops'],
      ru: ['Интернет-магазины'],
    },
    dateCreate: '01.06.2026',
  },
  {
    title: 'Kantsedal Artem',
    image: '/images/projectsImages/project-logitrans.png',
    descriptions: {
      en: 'Landing page for a German logistics company. Lead form with n8n webhook and Telegram notifications.',
      ru: 'Лендинг для немецкой логистической компании. Лид-форма с n8n-вебхуком и уведомлениями в Telegram.',
    },
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    dateCreate: '27.05.2026',
  },
  {
    title: 'UtilityAI',
    image: '/images/projectsImages/project-utilityAi.png',
    descriptions: {
      en: 'AI-powered utility tools platform. Custom interface and API integrations.',
      ru: 'Платформа AI-инструментов. Кастомный интерфейс и API-интеграции.',
    },
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    dateCreate: '13.12.2022',
  },
  {
    title: 'Entity Component System',
    image: '/images/projectsImages/project-ecs.png',
    descriptions: {
      en: 'Educational website about ECS architecture in game development.',
      ru: 'Образовательный сайт об архитектуре ECS в разработке игр.',
    },
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    dateCreate: '26.01.2024',
  },
  {
    title: 'ARCHITECTURE UNITY GAMES',
    image: '/images/projectsImages/project-architecture.png',
    descriptions: {
      en: 'Resource site about Unity game architecture patterns and best practices.',
      ru: 'Ресурс об архитектурных паттернах и лучших практиках в Unity.',
    },
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    dateCreate: '31.08.2022',
  },
  {
    title: 'ADDRESSABLES: ANESTHESIA',
    image: '/images/projectsImages/project-addressables.png',
    descriptions: {
      en: 'Technical documentation site about Unity Addressables asset management system.',
      ru: 'Сайт с технической документацией по системе управления ассетами Unity Addressables.',
    },
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    dateCreate: '13.10.2023',
  },
];
