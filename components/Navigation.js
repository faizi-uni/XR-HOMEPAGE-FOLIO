import Link from 'next/link';

const links = [
  { href: '/', label: 'Start' },
  { href: '/about', label: 'Über mich' },
  { href: '/philosophy', label: 'Philosophie' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navigation() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__brand" aria-label="Harun Faizi Homepage">
          HF
        </div>
        <nav aria-label="Hauptnavigation">
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.href} className="nav__item">
                <Link className="nav__link" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
