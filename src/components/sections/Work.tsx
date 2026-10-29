import { ProjectCard } from "../ui/ProjectCard";
import { SectionLabel } from "../ui/SectionLabel";
const projects = [
  {
    number: "01",
    title: "Illinois Massage Championships",
    href: "https://www.illinoismassagechampionships.com/",
    preview: "/project-previews/illinois.jpg",
  },
  {
    number: "02",
    title: "Sweet Trifle",
    href: "https://sweet-trifle-1a047a.netlify.app/",
    preview: "/project-previews/sweet-trifle.jpg",
  },
  {
    number: "03",
    title: "Perfume Site",
    href: "https://pasha-nvv.github.io/perfume-site/index.html",
    preview: "/project-previews/perfume.jpg",
  },
  {
    number: "04",
    title: "Helpful Taffy",
    href: "https://helpful-taffy-d3c8ca.netlify.app/",
    preview: "/project-previews/helpful-taffy.jpg",
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
