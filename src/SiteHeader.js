import { useEffect, useState } from 'react';

const home = process.env.PUBLIC_URL || '';

const nav = [
  { href: `${home}/#company`, label: 'Company' },
  { href: `${home}/#services`, label: 'Services' },
  { href: `${home}/#experience`, label: 'Experience' },
  { href: `${home}/#portfolio`, label: 'Portfolio' },
  { href: `${home}/?page=training`, label: 'Training' },
];

export function AxisMark({ size = 44 }) {
  return (
    <img
      className="axis-mark"
      src={`${process.env.PUBLIC_URL}/images/bim-axis-logo.jpg`}
      alt="BIM-AXIS"
      width={size}
      height={size}
    />
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
