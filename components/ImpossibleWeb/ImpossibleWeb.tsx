import { getT } from '@/lib/i18n';
import Hero from './sections/Hero/Hero';
import TrustedScreen from './sections/TrustedScreen/TrustedScreen';
import Services from './sections/Services/Services';
import ProvenResults from './sections/ProvenResults/ProvenResults';
import OurProjects from './sections/OurProjects/OurProjects';

const projects = [
  {
    title: 'AZR Pivdennyy',
    image: '/images/projectsImages/project-azr.png',
    features: ['Specialist and service websites'],
    dateCreate: '20.05.2026',
  },
  {
    title: 'kiev term',
    image: '/images/projectsImages/project-kievtern.png',
    features: ['Business card sites'],
    dateCreate: '23.02.2025',
  },
  {
    title: 'mechOrbit',
    image: '/images/projectsImages/project-orbit.png',
    features: ['Specialist and service websites'],
    dateCreate: '01.05.2026',
  },
  {
    title: 'Avtoatmosfera',
    image: '/images/projectsImages/project-avtosfera.png',
    features: ['Specialist and service websites'],
    dateCreate: '30.09.2025',
  },
  {
    title: 'sxShop',
    image: '/images/projectsImages/project-sShop.webp',
    features: ['Online shops'],
    dateCreate: '01.06.2026',
  },
  {
    title: 'Kantsedal Artem',
    image: '/images/projectsImages/project-logitrans.png',
    features: ['Specialist and service websites'],
    dateCreate: '27.05.2026',
  },
  {
    title: 'UtilityAI',
    image: '/images/projectsImages/project-utilityAi.png',
    features: ['Specialist and service websites'],
    dateCreate: '13.12.2022',
  },
  {
    title: 'Entity Component System',
    image: '/images/projectsImages/project-ecs.png',
    features: ['Specialist and service websites'],
    dateCreate: '26.01.2024',
  },
  {
    title: 'ARCHITECTURE UNITY GAMES',
    image: '/images/projectsImages/project-architecture.png',
    features: ['Specialist and service websites'],
    dateCreate: '31.08.2022',
  },
  {
    title: 'ADDRESSABLES: ANESTHESIA',
    image: '/images/projectsImages/project-addressables.png',
    features: ['Specialist and service websites'],
    dateCreate: '13.10.2023',
  },
];

export default function ImpossibleWeb({ lang }: { lang: string }) {
  return (
    <main>
      <Hero lang={lang} />
      <TrustedScreen />
      <Services lang={lang} />
      <ProvenResults lang={lang} />
      <OurProjects projects={projects} lang={lang} />
    </main>
  );
}
