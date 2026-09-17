import "./StackCard.css";
type StackCardProps = { title: string; description: string; image: string };
export function StackCard({ title, description, image }: StackCardProps) {
  return (
    <article className="stack-card stack-card-enhanced">
      <span className="stack-card-number">
        {title.slice(0, 2).toUpperCase()}
      </span>
      <div className="stack-icon-shell">
        <img src={image} alt={`${title} logo`} loading="lazy" />
      </div>
      <div className="stack-card-overlay" />
      <div className="stack-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="stack-card-arrow">↗</span>
    </article>
  );
}
