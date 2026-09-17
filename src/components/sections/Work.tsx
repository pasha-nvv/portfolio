import { ProjectCard } from "../ui/ProjectCard";
import { SectionLabel } from "../ui/SectionLabel";
const projects = [
  {
    number: "01",
    title: "Illinois Massage Championships",
    href: "https://www.illinoismassagechampionships.com/",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.illinoismassagechampionships.com%2F?w=1200",
  },
  {
    number: "02",
    title: "Sweet Trifle",
    href: "https://sweet-trifle-1a047a.netlify.app/",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsweet-trifle-1a047a.netlify.app%2F?w=1200",
  },
  {
    number: "03",
    title: "Perfume Site",
    href: "https://pasha-nvv.github.io/perfume-site/index.html",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fpasha-nvv.github.io%2Fperfume-site%2Findex.html?w=1200",
  },
  {
    number: "04",
    title: "Helpful Taffy",
    href: "https://helpful-taffy-d3c8ca.netlify.app/",
    preview: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fhelpful-taffy-d3c8ca.netlify.app%2F?w=1200",
  },
];
export function Work() {
  return (
    <section className="work-section section" id="work">
      <div className="section-heading">
        <SectionLabel>02 / Selected work</SectionLabel>
        <p>
          A selection of things
          <br />
          I&apos;ve built so far.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
}
