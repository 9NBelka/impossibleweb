export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main>
      <h1>Services — coming soon</h1>
    </main>
  );
}
