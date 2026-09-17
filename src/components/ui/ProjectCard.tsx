import { ArrowIcon } from "./ArrowIcon";
import "./ProjectCard.css";
type ProjectCardProps = {
  number: string;
  title: string;
  href: string;
  preview: string;
};
export function ProjectCard({
  number,
  title,
  href,
  preview,
}: ProjectCardProps) {
  const isExternal = href.startsWith("http");
  return (
    <article className="project-card">
      <img
        className="project-card-preview"
        src={preview}
        alt={`Preview of ${title}`}
        loading="lazy"
      />
      <span className="project-preview-shade" />
      <span className="project-number">{number}</span>
      <div className="project-card-content">
        <h3>{title}</h3>
        <a
          className="project-link"
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
        >
          View the work <ArrowIcon />
        </a>
      </div>
      <span className="project-orb" />
    </article>
  );
}
