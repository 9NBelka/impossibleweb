import { getT } from '@/lib/i18n';
import dynamic from 'next/dynamic';
import Hero from './sections/Hero/Hero';
import Services from './sections/Services/Services';
import ProvenResults from './sections/ProvenResults/ProvenResults';
import { projects } from '@/data/projects';

const OurProjects = dynamic(() => import('./sections/OurProjects/OurProjects'));
const TrustedScreen = dynamic(() => import('./sections/TrustedScreen/TrustedScreen'));
const ContactForm = dynamic(() => import('../ContactForm/ContactForm'));

export default function ImpossibleWeb({ lang }: { lang: string }) {
  return (
    <main>
      <Hero lang={lang} />
      <ContactForm lang={lang} />
      <TrustedScreen />
      <Services lang={lang} />
      <ProvenResults lang={lang} />
      <OurProjects projects={projects} lang={lang} />
    </main>
  );
}
