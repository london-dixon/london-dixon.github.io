import ResearchMd from '@/data/research_interests/research_interests.mdx';

export default function ResearchSection() {
  return (
    <section className='flex flex-col gap-8'>
      <article className='prose'>
        <ResearchMd />
      </article>
    </section>
  );
}
