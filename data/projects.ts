export type Lang = 'en' | 'ru';

export interface Project {
  title: string;
  slug: string;
  image: string;
  developedOn: string[];
  features: Record<Lang, string[]>;
  imagesAllSites: Array<{
    image: string;
    caption: Record<Lang, string>;
  }>;
  descriptions?: Record<Lang, string>;
  tasksDescription?: Record<Lang, string>;
  dateCreate?: string;
  link?: string;
  tasks?: Record<
    Lang,
    Array<{
      items: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    }>
  >;
}

export const projects: Project[] = [
  {
    title: 'AZR Pivdennyy',
    slug: 'azr-pivdennyy',
    image: '/images/projectsImages/project-azr.png',
    descriptions: {
      en: 'A modern website for a car service station in southern Ukraine. Full cycle: design, development, SEO setup.',
      ru: 'Современный сайт для автосервиса на юге Украины. Полный цикл: дизайн, разработка, настройка SEO.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/azr/allsiteAzr.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
    ],
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    developedOn: ['NextJs', 'TypeScript', 'SCSS'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Решения',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
    },
    dateCreate: '20.05.2026',
    link: 'https://a.merc.kharkov.ua',
  },
  {
    title: 'kiev term',
    slug: 'kiev-term',
    image: '/images/projectsImages/project-kievtern.png',
    descriptions: {
      en: 'Business card website for a Kyiv-based company. Clean design, fast load, mobile-first.',
      ru: 'Сайт-визитка для киевской компании. Чистый дизайн, быстрая загрузка, mobile-first.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/kievtern/allsiteKievTern.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
    ],
    features: {
      en: ['Business card sites'],
      ru: ['Сайты-визитки'],
    },
    developedOn: ['WordPress', 'JavaScript', 'PHP', 'Divi'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '23.02.2025',
    link: 'https://kyivterm.com.ua',
  },
  {
    title: 'mechOrbit',
    slug: 'mech-orbit',
    image: '/images/projectsImages/project-orbit.png',
    descriptions: {
      en: 'CRM and landing page for an auto repair shop management SaaS. Built on Next.js with multilingual blog.',
      ru: 'CRM и лендинг для SaaS-системы управления автосервисом. Разработан на Next.js с мультиязычным блогом.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/orbit/allsiteOrbitMainPage.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
      {
        image: '/images/projectsImages/fullSite/orbit/allsiteOrbitBlogPage.png',
        caption: {
          en: 'Blog',
          ru: 'Блог',
        },
      },
      {
        image: '/images/projectsImages/fullSite/orbit/allsiteOrbitArticlePage.png',
        caption: {
          en: 'Article page',
          ru: 'Страница статьи',
        },
      },
      {
        image: '/images/projectsImages/fullSite/orbit/allsiteOrbitForInvest.png',
        caption: {
          en: 'Page for investors',
          ru: 'Страница для инвесторов',
        },
      },

      {
        image: '/images/projectsImages/fullSite/orbit/allsiteOrbitForMobileApp.png',
        caption: {
          en: 'Application page',
          ru: 'Страница для приложения',
        },
      },
      {
        image: '/images/projectsImages/fullSite/orbit/allsiteOrbitLoginPage.png',
        caption: {
          en: 'Login page',
          ru: 'Страница входа',
        },
      },
    ],
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    developedOn: ['NextJs', 'TypeScript', 'SCSS'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '01.05.2026',
    link: 'https://mechorbit.com',
  },
  {
    title: 'Avtoatmosfera',
    slug: 'avtoatmosfera',
    image: '/images/projectsImages/project-avtosfera.png',
    descriptions: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/avtoatmosfera/allsiteAtmosfera.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
      {
        image: '/images/projectsImages/fullSite/avtoatmosfera/allsiteAtmosferaContact.png',
        caption: {
          en: 'Contacts',
          ru: 'Контакты',
        },
      },
      {
        image: '/images/projectsImages/fullSite/avtoatmosfera/allsiteAtmosferaService.png',
        caption: {
          en: 'Products',
          ru: 'Продукция',
        },
      },
    ],
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    developedOn: ['WordPress', 'JavaScript', 'PHP', 'Elementor'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '30.09.2025',
    link: 'https://avtoatmosfera.com',
  },
  {
    title: 'sxShop',
    slug: 'sx-shop',
    image: '/images/projectsImages/project-sShop.webp',
    descriptions: {
      en: 'Online shop with product catalogue, cart, and payment integration. Optimised for conversions.',
      ru: 'Интернет-магазин с каталогом товаров, корзиной и интеграцией оплаты. Оптимизирован под конверсии.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/project-azr.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
      {
        image: '/images/projectsImages/project-azr-about.png',
        caption: {
          en: 'About us',
          ru: 'О нас',
        },
      },
    ],
    features: {
      en: ['Online shops'],
      ru: ['Интернет-магазины'],
    },
    developedOn: ['NextJs', 'TypeScript', 'SCSS'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '01.06.2026',
    link: '',
  },
  {
    title: 'Kantsedal Artem',
    slug: 'kantsedal-artem',
    image: '/images/projectsImages/project-logitrans.png',
    descriptions: {
      en: 'Landing page for a German logistics company. Lead form with n8n webhook and Telegram notifications.',
      ru: 'Лендинг для немецкой логистической компании. Лид-форма с n8n-вебхуком и уведомлениями в Telegram.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/logitrans/allSiteLogitransMainPage.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
    ],
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    developedOn: ['NextJs', 'TypeScript', 'SCSS'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '27.05.2026',
    link: 'https://hinundher2023.de',
  },
  {
    title: 'UtilityAI',
    slug: 'utility-ai',
    image: '/images/projectsImages/project-utilityAi.png',
    descriptions: {
      en: 'AI-powered utility tools platform. Custom interface and API integrations.',
      ru: 'Платформа AI-инструментов. Кастомный интерфейс и API-интеграции.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/syndicate/allsiteUtilityAiMainPage.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
    ],
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    developedOn: ['WordPress', 'JavaScript', 'PHP', 'Divi', 'WooCommerce'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '13.12.2022',
    link: 'https://lms.k-syndicate.school/mc-utilityai',
  },
  {
    title: 'Entity Component System',
    slug: 'entity-component-system',
    image: '/images/projectsImages/project-ecs.png',
    descriptions: {
      en: 'Educational website about ECS architecture in game development.',
      ru: 'Образовательный сайт об архитектуре ECS в разработке игр.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/syndicate/allsiteESCMainPage.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
    ],
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    developedOn: ['WordPress', 'JavaScript', 'PHP', 'Divi', 'WooCommerce'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '26.01.2024',
    link: 'https://lms.k-syndicate.school/ecs',
  },
  {
    title: 'ARCHITECTURE UNITY GAMES',
    slug: 'architecture-unity-games',
    image: '/images/projectsImages/project-architecture.png',
    descriptions: {
      en: 'Resource site about Unity game architecture patterns and best practices.',
      ru: 'Ресурс об архитектурных паттернах и лучших практиках в Unity.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/syndicate/allsiteArchitectureMainPage.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
    ],
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    developedOn: ['WordPress', 'JavaScript', 'PHP', 'Divi', 'WooCommerce'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '31.08.2022',
    link: 'https://lms.k-syndicate.school/architecture-unity-games',
  },
  {
    title: 'ADDRESSABLES: ANESTHESIA',
    slug: 'addressables-anesthesia',
    image: '/images/projectsImages/project-addressables.png',
    descriptions: {
      en: 'Technical documentation site about Unity Addressables asset management system.',
      ru: 'Сайт с технической документацией по системе управления ассетами Unity Addressables.',
    },
    tasksDescription: {
      en: 'Website for a Kharkiv auto service network. Services grid, feedback section, contact form with redirect.',
      ru: 'Сайт для сети автосервисов в Харькове. Сетка услуг, блок отзывов, контактная форма с редиректом.',
    },
    imagesAllSites: [
      {
        image: '/images/projectsImages/fullSite/syndicate/allsiteAddressablesMainPage.png',
        caption: {
          en: 'Home page',
          ru: 'Главная страница',
        },
      },
    ],
    features: {
      en: ['Specialist and service websites'],
      ru: ['Сайты специалистов и услуг'],
    },
    developedOn: ['WordPress', 'JavaScript', 'PHP', 'Divi', 'WooCommerce'],
    tasks: {
      en: [
        {
          items: [
            {
              title: 'Objectives',
              description:
                'Blazing fast, scalable applications built with Next.js, React, and modern serverless architectures tailored to your business logic.',
              features: ['Headless Commerce', 'Web Applications', 'API Integration'],
            },
            {
              title: 'Decisions',
              description:
                'Pixel-perfect design meets conversion rate optimization. We build landing pages that turn ad clicks into loyal customers.',
              features: ['A/B Testing Setup', 'Copywriting Support', 'Performance Audits'],
            },
            {
              title: 'Technical section',
              description:
                'Foundation-first search engine optimization. We fix technical debt, improve site speed, and structure data for maximum visibility.',
              features: ['Core Web Vitals', 'Schema Markup', 'Crawlability Fixes'],
            },
            {
              title: 'Result',
              description:
                'Eliminate manual tasks. We design and implement robust automations using n8n and custom webhooks to streamline operations.',
              features: ['CRM Syncing', 'Order Processing', 'Custom n8n Nodes'],
            },
          ],
        },
      ],
      ru: [
        {
          items: [
            {
              title: 'Задачи',
              description:
                'Быстрые масштабируемые приложения на Next.js, React и современных serverless-архитектурах под вашу бизнес-логику.',
              features: ['Headless Commerce', 'Веб-приложения', 'API-интеграции'],
            },
            {
              title: 'Решения',
              description:
                'Пиксельный дизайн и оптимизация конверсии. Мы создаём лендинги, которые превращают клики в клиентов.',
              features: [
                'Настройка A/B тестов',
                'Поддержка копирайтинга',
                'Аудит производительности',
              ],
            },
            {
              title: 'Техническая часть',
              description:
                'SEO с фокусом на фундамент. Устраняем технический долг, улучшаем скорость и структурируем данные для максимальной видимости.',
              features: ['Core Web Vitals', 'Schema Markup', 'Исправление краулинга'],
            },
            {
              title: 'Результат',
              description:
                'Устраняем ручной труд. Проектируем и внедряем автоматизации на n8n и кастомных вебхуках.',
              features: ['Синхронизация CRM', 'Обработка заказов', 'Кастомные n8n-ноды'],
            },
          ],
        },
      ],
    },
    dateCreate: '13.10.2023',
    link: 'https://lms.k-syndicate.school/addressables/',
  },
];
