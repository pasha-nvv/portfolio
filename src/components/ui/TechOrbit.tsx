import { techImages } from "../../data/techImages";

const technologies = [
  ["HTML", techImages.html],
  ["CSS", techImages.css],
  ["React", techImages.react],
  ["JavaScript", techImages.javascript],
  ["TypeScript", techImages.typescript],
] as const;
export function TechOrbit() {
  return (
    <div className="tech-orbit" aria-label="Technology stack">
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />
      {technologies.map(([name, image], index) => (
        <div className={`tech-tile tile-${index + 1}`} key={name}>
          <img src={image} alt="" loading="eager" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
