import { use } from 'react';
import { getT } from '@/lib/i18n';
import ImpossibleWebClient from '@/components/ImpossibleWeb/ImpossibleWebClient';
import Footer from '@/components/Footer/Footer';
import ContactForm from '@/components/ContactForm/ContactForm';
import FloatingContacts from '@/components/FloatingContacts/FloatingContacts';

export default function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  const t = getT(lang);

  const navLinks = [
    { title: t.nav.home, linkToPage: '/' },
    { title: t.nav.services, linkToPage: '/services' },
    { title: t.nav.projects, linkToPage: '/projects' },
    { title: t.nav.aboutUs, linkToPage: '/about-us' },
    { title: t.nav.blog, linkToPage: '/blog' },
  ];

  return (
    <>
      <ImpossibleWebClient lang={lang} navLinks={navLinks} />
      {children}
      <ContactForm lang={lang} />
      <Footer onFooterTextLinks={navLinks} lang={lang} />
      <FloatingContacts />
    </>
  );
}
