import ImpossibleWeb from '@/components/ImpossibleWeb/ImpossibleWeb';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <ImpossibleWeb lang={lang} />;
}
