import { useEffect, useState } from 'react';

const home = process.env.PUBLIC_URL || '';

const nav = [
  { href: `${home}/#company`, label: 'Company' },
  { href: `${home}/#services`, label: 'Services' },
  { href: `${home}/#experience`, label: 'Experience' },
  { href: `${home}/#portfolio`, label: 'Portfolio' },
  { href: `${home}/?page=training`, label: 'Training' },
];

export function AxisMark({ size = 36 }) {
  return (
    <svg className="axis-mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 24h32M24 8v32" stroke="#00a6a6" strokeWidth="2" />
      <circle cx="24" cy="24" r="4.5" fill="none" stroke="#00a6a6" strokeWidth="2" />
    </svg>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
      <div className="header__bar">
        <a className="brand" href={`${home}/`} onClick={closeMenu}>
          <AxisMark />
          <span>
            <strong>BIM-AXIS</strong>
            <small>BIM / CAD Drafting Services</small>
          </span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className="nav">
          {nav.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--nav" href={`${home}/#contact`} onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
