import type { Metadata } from "next";
import { loadYAML } from "../_lib/utils";
import type { Publication } from "../_types";
import { PublicationItem } from "../_components/PublicationItem";
import { SectionTitle } from "../_components/SectionTitle";

export const metadata: Metadata = {
  title: "연구성과",
};

export default function PublicationsPage() {
  const publications = loadYAML<Publication[]>("publications.yml");

  const sorted = [...publications].sort(
    (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0)
  );

  // Group by year
  const byYear = sorted.reduce<Record<number, Publication[]>>((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <SectionTitle
        title="연구성과"
        subtitle={`총 ${publications.length}편의 논문`}
      />

      <div className="flex flex-col gap-10">
        {years.map((year) => (
          <section key={year}>
            <h2 className="text-lg font-extrabold text-[#66C36F] uppercase tracking-widest mb-1">
              {year}
            </h2>
            <div>
              {byYear[year].map((pub) => (
                <PublicationItem key={pub.id} publication={pub} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
