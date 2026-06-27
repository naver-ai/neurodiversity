import type { Metadata } from "next";
import { loadYAML } from "../../_lib/utils";
import { requireSitePublished } from "../../_lib/require-published";
import type { PressItem } from "../../_types";
import { PressCard } from "../../_components/PressCard";

export function generateMetadata(): Metadata {
  requireSitePublished();
  return { title: "보도자료" };
}

export default function PressPage() {
  requireSitePublished();

  const items = loadYAML<PressItem[]>("press.yml");

  const sorted = [...items].sort(
    (a, b) => b.year - a.year || (b.month ?? 0) - (a.month ?? 0)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16 flex items-baseline gap-4 flex-wrap">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight tracking-tight">보도자료</h1>
        <p className="text-base text-gray-500">총 {items.length}건</p>
      </div>

      <div className="flex flex-col">
        {sorted.map((item) => (
          <PressCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
