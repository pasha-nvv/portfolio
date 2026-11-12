import { ArrowIcon } from "../ui/ArrowIcon";
import { SectionLabel } from "../ui/SectionLabel";
import "./TopWork.css";

const projects = [
  {
    number: "01",
    title: "WEARSTORE",
    category: "Fashion storefront",
    href: "https://github.com/pasha-nvv/WEARSTORE",
    action: "Explore on GitHub",
    theme: "wearstore",
  },
  {
    number: "02",
    title: "Illinois Massage Championships",
    category: "Event website",
    href: "https://www.illinoismassagechampionships.com/",
    preview: "/project-previews/illinois.jpg",
    action: "Visit website",
    theme: "illinois",
  },
];

export function TopWork() {
  return (
    <section className="top-work-section section" id="top-work" aria-labelledby="top-work-title">
      <div className="section-heading">
        <div>
          <SectionLabel>02 / Featured projects</SectionLabel>
          <h2 id="top-work-title">Top <em>Work.</em></h2>
        </div>
        <p>A closer look at<br />my standout projects.</p>
      </div>
      <div className="top-work-list">
        {projects.map((project) => (
          <a
            className={`featured-project featured-project--${project.theme}`}
            key={project.number}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — ${project.action} (opens in a new tab)`}
          >
            <div className="featured-project-visual" aria-hidden="true">
              {project.preview ? (
                <img src={project.preview} alt="" loading="lazy" />
              ) : (
                <div className="wearstore-cover">
                  <span className="wearstore-cover-label">Independent style / Digital experience</span>
                  <span className="wearstore-wordmark">WEAR<br /><span>STORE</span></span>
                  <span className="wearstore-cover-bottom">An everyday statement.<span>↗</span></span>
                </div>
              )}
            </div>
            <div className="featured-project-topline">
              <span>{project.number} / {project.category}</span>
              <span className="featured-project-badge">Featured</span>
            </div>
            <div className="featured-project-footer">
              <h3>{project.title}</h3>
              <span className="featured-project-action">{project.action}<span className="featured-project-arrow"><ArrowIcon /></span></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
