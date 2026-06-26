import ServicesList from '@/components/ServicesPageComponents/ServicesList/ServicesList';
import ServicesPageHero from '@/components/ServicesPageComponents/ServicesPageHero';
import { services } from '@/data/services';

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main>
      <ServicesPageHero lang={lang} />
      <ServicesList services={services} lang={lang} />
    </main>
  );
}
