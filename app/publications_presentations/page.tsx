import { Metadata } from "next";
import PublicationPresentationSection from "@/components/PublicationsPresentations";

export const metadata: Metadata = {
  title: "PublicationsPresentations",
};

export default async function Page() {
  return (
    <main className="md:w-[55rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      <h1 className="text-3xl font-semibold">Publications and Presentations</h1>
      <PublicationPresentationSection />
    </main>
  );
}
