import { SectionLabel } from "../ui/SectionLabel";
export function About() {
  return (
    <section className="about-section section" id="about">
      <SectionLabel>01 / About</SectionLabel>
      <div className="about-copy">
        <p className="large-copy">
          I&apos;m a frontend developer with an eye for the small details that
          make a digital experience feel <em>considered.</em>
        </p>
        <p className="body-copy">
          From a clean first sketch to a polished release, I enjoy turning ideas
          into responsive interfaces with purpose, personality and precision.
        </p>
      </div>
    </section>
  );
}
