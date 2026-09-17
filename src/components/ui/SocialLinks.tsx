import "./SocialLinks.css";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pasha-kostelnyi-b44010383/",
    icon: <path d="M4 7v9M4 4v.01M8 16v-5a4 4 0 0 1 8 0v5m-8-5v5" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/pasha-nvv",
    icon: (
      <path d="M10 19c-5 1.5-5-2.5-7-3m14 6v-3.9c.04-1-.35-1.98-1.1-2.66 3.6-.4 7.38-1.76 7.38-7.95a6.2 6.2 0 0 0-1.65-4.3A5.75 5.75 0 0 0 21.48.5S20.1.1 17 2.17a14.4 14.4 0 0 0-7 0C6.9.1 5.52.5 5.52.5a5.75 5.75 0 0 0-.15 3.19 6.2 6.2 0 0 0-1.65 4.3c0 6.18 3.77 7.55 7.38 7.95A3.72 3.72 0 0 0 10 18.6V22" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pasha.fdev/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
  },
];

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      {links.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
