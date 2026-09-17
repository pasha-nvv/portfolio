import { techImages } from "../../data/techImages";
import { SectionLabel } from "../ui/SectionLabel";
import { StackCard } from "../ui/StackCard";

const technologies = [
  ["HTML", "Semantic foundation", techImages.html],
  ["CSS", "Motion & visual systems", techImages.css],
  ["Figma", "Interface design", techImages.figma],
  ["React", "Component architecture", techImages.react],
  ["Bootstrap", "Fast responsive grids", techImages.bootstrap],
  ["JavaScript", "Interactive details", techImages.javascript],
  ["TypeScript", "Reliable interfaces", techImages.typescript],
] as const;
export function Stack() {
  return (
    <section className="stack-section section" id="stack">
      <div className="section-heading">
        <SectionLabel>03 / Stack</SectionLabel>
        <p>
          The tools I reach for
          <br />
          to make things happen.
        </p>
      </div>
      <div className="stack-grid">
        {technologies.map(([title, description, image]) => (
          <StackCard
            key={title}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </section>
  );
}
