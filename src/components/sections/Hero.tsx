import { ArrowIcon } from "../ui/ArrowIcon";
import { TechOrbit } from "../ui/TechOrbit";
export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <TechOrbit />
      <p className="eyebrow">
        <span />
        Frontend developer · Ukraine
      </p>
      <h1>
        I&apos;m Pasha
        <br />
        <em>Kostelnyi.</em>
      </h1>
      <p className="hero-description">
        I design and build thoughtful interfaces that feel clear, fast and
        genuinely good to use.
      </p>
      <a href="#work" className="button button-primary">
        See selected work <ArrowIcon />
      </a>
      <a className="scroll-hint" href="#about">
        <span />
        Scroll to explore
      </a>
    </section>
  );
}
