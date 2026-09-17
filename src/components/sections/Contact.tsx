import { ArrowIcon } from "../ui/ArrowIcon";
import { SectionLabel } from "../ui/SectionLabel";
import { SocialLinks } from "../ui/SocialLinks";
export function Contact() {
  return (
    <section className="contact-section section" id="contact">
      <SectionLabel>04 / Contact</SectionLabel>
      <p className="contact-pretitle">
        Have an idea, a project, or just want to say hello?
      </p>
      <h2>
        Let&apos;s make
        <br />
        something <em>excellent.</em>
      </h2>
      <a className="email-button" href="mailto:pashafdew@gmail.com">
        <span>pashafdew@gmail.com</span>
        <ArrowIcon />
      </a>
      <SocialLinks />
      <footer>
        <span>© {new Date().getFullYear()} Pasha Kostelnyi</span>
        <span>Made with care &amp; code</span>
      </footer>
    </section>
  );
}
