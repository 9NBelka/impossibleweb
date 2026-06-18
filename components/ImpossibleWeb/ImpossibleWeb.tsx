import { getT } from '@/lib/i18n';
import Hero from './sections/Hero/Hero';
import TrustedScreen from './sections/TrustedScreen/TrustedScreen';
import Services from './sections/Services/Services';
import ProvenResults from './sections/ProvenResults/ProvenResults';
import OurProjects from './sections/OurProjects/OurProjects';
import { projects } from '@/data/projects';
import ContactForm from '../ContactForm/ContactForm';

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
