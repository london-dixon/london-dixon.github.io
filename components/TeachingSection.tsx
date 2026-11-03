import TeachingMd from '@/data/teaching/teaching.mdx';

export default function TeachingSection() {
  return (
    <section className='flex flex-col gap-8'>
      <article className='prose'>
        <TeachingMd />
      </article>
    </section>
  );
}