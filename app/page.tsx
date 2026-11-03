import AboutSection from '@/components/AboutSection';
import TeachingSection from '@/components/TeachingSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationPresentationSection from '@/components/PublicationsPresentations';
import { homepageSection } from '@/data/website.config';

export default function Page() {
  return (
    <main className='md:w-[55rem] m-auto px-8 mt-32 flex flex-col gap-10 mb-20'>
      {homepageSection.AboutSection && <AboutSection />}
      {homepageSection.TeachingSection && <TeachingSection />}
      {homepageSection.ResearchSection && <ResearchSection />}
      {homepageSection.PublicationPresentationSection && <PublicationPresentationSection />}
    </main>
  );
}
