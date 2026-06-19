import type { Metadata } from 'next';
import './globals.scss';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  verification: {
    google: '9nZhwv2uMIsefBE3L2J2OwIU5p2NNBqP4aqQtYIGYHo',
  },

  title: 'High-Converting Websites & Advertising That Brings Clients | Impossible Web',
  description:
    'We create powerful, high-converting websites and set up targeted advertising that attracts real clients and grows your business. Professional web development & promotion.',
  keywords: [
    'website development',
    'web design',
    'digital advertising',
    'ppc',
    'seo',
    'website promotion',
    'online marketing',
    'high converting websites',
    'impossible web',
  ],
  authors: [{ name: 'impossibleWeb' }],
  robots: { index: true, follow: true },

  openGraph: {
    title: 'High-Converting Websites & Advertising That Brings Clients | Impossible Web',
    description:
      'We create powerful, high-converting websites and set up targeted advertising that attracts real clients and grows your business. Professional web development & promotion.',
    type: 'website',
    url: 'https://impossibleweb.pro/',
    siteName: 'Impossible Web',
    locale: 'en_EN',
    images: [{ url: '/images/logo-meta-image.jpg' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'High-Converting Websites & Advertising That Brings Clients | Impossible Web',
    description:
      'We create powerful, high-converting websites and set up targeted advertising that attracts real clients and grows your business. Professional web development & promotion.',
    site: '@impossible_web',
    images: ['/images/logo-meta-image.jpg'],
  },

  alternates: {
    canonical: 'https://impossibleweb.pro/en',
    languages: {
      en: 'https://impossibleweb.pro/en',
      ru: 'https://impossibleweb.pro/ru',
      'x-default': 'https://impossibleweb.pro/en',
    },
  },

  icons: {
    icon: [{ url: '/impoFavicon.svg' }],
    apple: [{ url: '/impoFavicon.svg', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <head>
        <link
          rel='preload'
          href='/fonts/Inter/Inter-VariableFont_opsz_wght.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
