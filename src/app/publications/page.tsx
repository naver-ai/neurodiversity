import type { Metadata } from "next";
import { loadYAML } from "../_lib/utils";
import type { Publication } from "../_types";
import { PublicationItem } from "../_components/PublicationItem";

export const metadata: Metadata = {
  title: "논문 성과",
};

export default function PublicationsPage() {
  const publications = loadYAML<Publication[]>("publications.yml");

  const sorted = [...publications].sort(
    (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0)
  );

  const byYear = sorted.reduce<Record<number, Publication[]>>((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 flex items-baseline gap-4 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">논문 성과</h1>
        <p className="text-base text-gray-500">총 {publications.length}편의 논문</p>
      </div>

      <div className="flex flex-col gap-12">
        {years.map((year) => (
          <div key={year} className="grid grid-cols-1 sm:grid-cols-[5fr_7fr] gap-8 items-start">
            <div className="pt-6 border-t border-gray-100">
              <span className="text-sm font-bold text-gray-400 tracking-widest">{year}</span>
            </div>
            <div>
              {byYear[year].map((pub) => (
                <PublicationItem key={pub.id} publication={pub} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
