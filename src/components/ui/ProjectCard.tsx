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
    <a
      className="project-card"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`Visit ${title}`}
    >
      <img
        className="project-card-preview"
        src={preview}
        alt={`Preview of ${title}`}
        loading="lazy"
        onError={(event) => event.currentTarget.classList.add("preview-unavailable")}
      />
      <span className="project-preview-shade" />
      <span className="project-number">{number}</span>
      <div className="project-card-content">
        <h3>{title}</h3>
        <span className="project-link">
          View the work <ArrowIcon />
        </span>
      </div>
      <span className="project-orb" />
    </a>
  );
}
