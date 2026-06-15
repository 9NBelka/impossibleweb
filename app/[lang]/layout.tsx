import { use } from 'react';
import type { Metadata } from 'next';

const langMeta = {
  ru: {
    title: 'Высокоэффективные веб-сайты и реклама, привлекающие клиентов | Impossible Web',
    description:
      'Мы создаём мощные, высокоэффективные веб-сайты и настраиваем целевую рекламу, которая привлекает реальных клиентов и способствует росту вашего бизнеса. Профессиональная веб-разработка и продвижение.',
    keywords:
      'website development, web design, digital advertising, ppc, seo, website promotion, online marketing, high converting websites, impossible web',
    ogTitle: 'Высокоэффективные веб-сайты и реклама, привлекающие клиентов | Impossible Web',
    ogDescription:
      'Мы создаём мощные, высокоэффективные веб-сайты и настраиваем целевую рекламу, которая привлекает реальных клиентов и способствует росту вашего бизнеса. Профессиональная веб-разработка и продвижение.',
    locale: 'ru_UA',
    canonical: 'https://impossibleweb.pro/ru',
  },
  en: {
    title: 'High-Converting Websites & Advertising That Brings Clients | Impossible Web',
    description:
      'We create powerful, high-converting websites and set up targeted advertising that attracts real clients and grows your business. Professional web development & promotion.',
    keywords:
      'website development, web design, digital advertising, ppc, seo, website promotion, online marketing, high converting websites, impossible web',
    ogTitle: 'High-Converting Websites & Advertising That Brings Clients | Impossible Web',
    ogDescription:
      'We create powerful, high-converting websites and set up targeted advertising that attracts real clients and grows your business. Professional web development & promotion.',
    locale: 'en_US',
    canonical: 'https://impossibleweb.pro/en',
  },
};

type Lang = 'ru' | 'en';

const OG_IMAGE = 'https://impossibleweb.pro/images/logo-meta-image.jpg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = (langMeta[lang as Lang] ? lang : 'en') as Lang;
  const m = langMeta[l];

  // Убираем захардкоженный canonical — он будет у каждой страницы свой
  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords.split(', '),
    robots: { index: true, follow: true },
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      locale: m.locale,
      type: 'website',
      siteName: 'Impossible Web',
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.ogTitle,
      description: m.ogDescription,
      images: [OG_IMAGE],
    },
    alternates: {
      // canonical убираем отсюда — каждая страница сама задаёт его
      languages: {
        ru: 'https://impossibleweb.pro/ru',
        en: 'https://impossibleweb.pro/en',
        'x-default': 'https://impossibleweb.pro/en',
      },
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  return <div lang={lang}>{children}</div>;
}
