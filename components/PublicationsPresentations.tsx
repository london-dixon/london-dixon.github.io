import PublicationsPresentationsMd from "@/data/publications_presentations/publications_presentations.mdx";

export default function PublicationPresentationSection() {
  return (
    <section className='flex flex-col gap-8'>
      <article className='prose'>
        <PublicationsPresentationsMd />
      </article>
    </section>
  );
}
