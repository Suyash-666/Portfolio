import Logo from './Logo.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="nav" id="top">
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <ThemeToggle />
          <a
            href="mailto:sp4367475@gmail.com"
            className="nav__cta"
            aria-label="Email Suyash"
          >
            <span>Get in touch</span>
            <svg
              className="arrow"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 11L11 3M11 3H4.5M11 3V9.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
