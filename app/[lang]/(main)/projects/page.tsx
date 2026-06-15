import ProjectsHero from '@/components/AllOurProjectsPageComponents/ProjectsHero/ProjectsHero';
import ProjectsList from '@/components/AllOurProjectsPageComponents/ProjectsList/ProjectsList';
import { projects } from '@/data/projects';

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main>
      <ProjectsHero lang={lang} />
      <ProjectsList projects={projects} lang={lang} />
    </main>
  );
}
