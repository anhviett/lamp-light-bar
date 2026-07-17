import { collectionSections } from "@/components/landing/landing-data";

export function VerticalSections() {
  return (
    <aside className="section-rail" aria-label="Collection sections">
      {collectionSections.map((section) => (
        <span key={section}>{section}</span>
      ))}
    </aside>
  );
}
