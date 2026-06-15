import AboutUsHero from '@/components/AboutUsPageComponents/AboutUsHero/AboutUsHero';
import AboutUsMainText from '@/components/AboutUsPageComponents/AboutUsMainText/AboutUsMainText';
import AboutUsNumbers from '@/components/AboutUsPageComponents/AboutUsNumbers/AboutUsNumbers';
import WhyUs from '@/components/AboutUsPageComponents/WhyUs/WhyUs';

export default async function AboutUsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main>
      <AboutUsHero lang={lang} />
      <AboutUsMainText lang={lang} />
      <AboutUsNumbers lang={lang} />
      <WhyUs lang={lang} />
    </main>
  );
}
