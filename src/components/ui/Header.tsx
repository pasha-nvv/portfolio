const navigation = ["about", "work", "stack", "contact"];
export function Header() {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#top"
        aria-label="Pasha Kostelnyi — to the top"
      >
        PK<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <a href={`#${item}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-status" href="mailto:pashafdew@gmail.com">
        <i />
        Available
      </a>
    </header>
  );
}
