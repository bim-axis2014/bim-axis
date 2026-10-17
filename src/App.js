import { useEffect, useRef, useState } from 'react';
import './App.css';

const audience = [
  {
    title: 'Architectural Firms',
    copy: 'For firms starting a company or scaling project production.',
    icon: IconBuilding,
  },
  {
    title: 'Limited Staff',
    copy: 'For teams that cannot support existing and incoming projects.',
    icon: IconTeam,
  },
  {
    title: 'Architects & Engineers',
    copy: 'For professionals requiring reliable drafting and modelling support.',
    icon: IconDrafting,
  },
  {
    title: 'Outsourced Production',
    copy: 'For clients seeking professional construction-document production at a fraction of the cost.',
    icon: IconDocuments,
  },
];

const services = [
  {
    title: 'CAD Drafting Services',
    focus: 'Architecture, Interior, Civil & Structural',
    copy: 'BIM-Axis provides Cad services to convert PDF, scanned, Sketch images to workable 2D Architecture / Interior and Structural drawings. Furthermore we design as per your needs and request.',
  },
  {
    title: 'MEPF',
    focus: 'Mechanical, Electrical, Plumbing & Fire Protection',
    copy: 'BIM-Axis provides Cad services to convert PDF, scanned, Sketch images to workable 2D, Mechanical - Electrical - Plumbing and Fire Protection drawings. Furthermore we design as per your needs and request.',
  },
  {
    title: 'Building Information Technology (BIM)',
    focus: 'Architectural, Interior, Structural and MEPF',
    copy: 'BIM-Axis provides outsourcing services to create intelligent Building Information Modelling (BIM) in Architectural, Interior, Structural and MEPF industries latest technology.',
  },
];

const bimBenefits = [
  {
    title: 'BIM Reduces Modification',
    copy: 'Effective ways to produce high quality Projects.',
  },
  {
    title: 'BIM Increase High Quality',
    copy: 'Leading architects propose BIM as the top way for accuracy.',
  },
  {
    title: 'BIM Reduces Errors and Changes during Constructions',
    copy: 'The finest rated technique of engineers says that BIM sums-up the value to their projects.',
  },
  {
    title: 'Clash Detection',
    copy: 'BIM users claim that it’s more efficient and more effective on time saving.',
  },
];

function bannerSrc(filename) {
  return `${process.env.PUBLIC_URL}/images/banner/${encodeURIComponent(filename)}`;
}

const projects = [
  {
    name: 'Holland Project',
    meta: 'Jan – March 2025, Singapore Base Project',
    scope:
      'Architecture & Interior, Civil & Structural, Mechanical, Electrical, Plumbing & Quantities',
    image: bannerSrc('Holland-Project.jpg'),
  },
  {
    name: 'Althea House',
    meta: 'Feb. 2025 (Philippine Project)',
    scope:
      'Architecture & Interior, Civil & Structural, Mechanical, Electrical, Plumbing & Quantities',
    image: bannerSrc('Althea-House.jpg'),
  },
  {
    name: 'Rommel 2 Storey House',
    meta: 'Feb. 2025 (Philippine Project)',
    scope:
      'Architecture & Interior, Civil & Structural, Mechanical, Electrical, Plumbing & Quantities',
    image: bannerSrc('Rommel-2-Storey-House.jpg'),
  },
  {
    name: 'Labrador Tower Project',
    meta: 'Jan. 2022 – Oct. 2024 (Singapore)',
    scope:
      'Architecture & Interior, Civil & Structural, Mechanical, Electrical, Plumbing & Quantities',
    image: bannerSrc('Labrador-Tower-Project.jpg'),
  },
  {
    name: 'Cabana House',
    meta: 'January 2023 (Philippine Project)',
    scope:
      'Architecture & Interior, Civil & Structural, Mechanical, Electrical, Plumbing & Quantities',
    image: bannerSrc('Cabana-House.jpg'),
  },
  {
    name: 'Flor-vill Resort & Bordeaux Suites',
    meta: 'January 2021 | Philippine Project',
    scope:
      'Architecture & Interior, Civil & Structural, Mechanical, Electrical, Plumbing & Quantities',
    image: bannerSrc('Flor-vill-Resort-&-Bordeaux-Suites.jpg'),
  },
  {
    name: 'Merin 2 Storey House',
    meta: 'Feb. 2021 | Philippine Project',
    scope:
      'Architecture & Interior, Civil & Structural, Mechanical, Electrical, Plumbing & Quantities',
    image: bannerSrc('Merin-2-Storey-House.jpg'),
  },
  ...Array.from({ length: 13 }, (_, index) => ({
    id: `upcoming-${index + 1}`,
    scope: 'Architecture & Interior',
    image: bannerSrc(
      index === 0
        ? 'Architecture-&-Interior.jpg'
        : `Architecture-&-Interior-${index + 1}.jpg`
    ),
  })),
];

const team = [
  {
    name: 'Racquel Sisgon Burdeos',
    role: 'Owner',
    org: 'Bim-axis Production Services',
    email: 'racquelsburdeos@gmail.com',
  },
  {
    name: 'Suhail Sheik',
    role: 'Co-Owner',
    phone: '0503518062',
    tel: '+971503518062',
    email: 'suhailsheikh886@gmail.com',
  },
  {
    name: 'Mohammad Asjad Raza',
    role: 'Business Development Manager',
    phone: '+971 588865724',
    tel: '+971588865724',
    email: 'raazazjad0125@gmail.com',
  },
];

const nav = [
  { href: '#company', label: 'Company' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Portfolio' },
];

function IconBuilding() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M6 28V10l10-6 10 6v18" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M13 28v-7h6v7M11 14h3M18 14h3M11 19h3M18 19h3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconTeam() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="11" cy="11" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="21" cy="11" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 24c.6-4 3-6 5.5-6s4.9 2 5.5 6M15.5 24c.6-4 3-6 5.5-6s4.9 2 5.5 6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconDrafting() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4M10.2 10.2l2.6 2.6M19.2 19.2l2.6 2.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconDocuments() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 8h11l5 5v13H8z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M19 8v5h5M12 17h8M12 21h6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconPlace() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 28s-9-8.2-9-14.2A9 9 0 0 1 16 5a9 9 0 0 1 9 8.8C25 19.8 16 28 16 28z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="13.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9.5 6.5h5.2l1.6 5.2-3 2a13.5 13.5 0 0 0 5 5l2-3 5.2 1.6v5.2c0 .9-.7 1.7-1.6 1.8C12.4 25.2 6.8 19.6 5.7 8.1c-.1-.9.7-1.6 1.8-1.6z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function IconEnvelope() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="5" y="8" width="22" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 10.5 16 17l9.5-6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function AxisMark({ size = 36 }) {
  return (
    <svg className="axis-mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 24h32M24 8v32" stroke="#00a6a6" strokeWidth="2" />
      <circle cx="24" cy="24" r="4.5" fill="none" stroke="#00a6a6" strokeWidth="2" />
    </svg>
  );
}

function ImagePlaceholder({ label, variant = 0 }) {
  const drawings = [ElevationDrawing, PlanDrawing, IsoDrawing];
  const Drawing = drawings[variant % drawings.length];

  return (
    <figure className="image-ph" aria-label={`${label} image placeholder`}>
      <div className="image-ph__sheet">
        <div className="image-ph__grid" />
        <Drawing />
        <span className="image-ph__stamp">IMG / TBD</span>
      </div>
      <figcaption>Image placeholder — {label}</figcaption>
    </figure>
  );
}

function ProjectImage({ src, alt, variant = 0 }) {
  if (!src) {
    return <ImagePlaceholder label={alt} variant={variant} />;
  }

  return (
    <figure className="image-ph">
      <img src={src} alt={alt} />
    </figure>
  );
}

function ElevationDrawing() {
  return (
    <svg className="image-ph__draw" viewBox="0 0 320 200" aria-hidden="true">
      <rect x="70" y="48" width="180" height="118" fill="none" stroke="#00a6a6" strokeWidth="2" />
      <rect x="88" y="66" width="36" height="48" fill="none" stroke="#0b2239" strokeWidth="1.5" />
      <rect x="142" y="66" width="36" height="48" fill="none" stroke="#0b2239" strokeWidth="1.5" />
      <rect x="196" y="66" width="36" height="48" fill="none" stroke="#0b2239" strokeWidth="1.5" />
      <rect x="142" y="126" width="28" height="40" fill="none" stroke="#0b2239" strokeWidth="1.5" />
      <path d="M58 48h204M70 166h180" stroke="#00a6a6" strokeWidth="1.5" />
      <path d="M160 28v20" stroke="#0b2239" strokeWidth="1" />
    </svg>
  );
}

function PlanDrawing() {
  return (
    <svg className="image-ph__draw" viewBox="0 0 320 200" aria-hidden="true">
      <rect x="54" y="36" width="212" height="128" fill="none" stroke="#00a6a6" strokeWidth="2" />
      <path d="M54 100h212M160 36v128M214 36v70M54 136h106" stroke="#0b2239" strokeWidth="1.5" />
      <circle cx="188" cy="68" r="10" fill="none" stroke="#00a6a6" strokeWidth="1.5" />
      <rect x="70" y="48" width="70" height="40" fill="none" stroke="#00a6a6" strokeWidth="1" />
    </svg>
  );
}

function IsoDrawing() {
  return (
    <svg className="image-ph__draw" viewBox="0 0 320 200" aria-hidden="true">
      <path d="M160 36l86 42v70l-86 42-86-42V78z" fill="none" stroke="#00a6a6" strokeWidth="2" />
      <path d="M160 36v70M160 106l86 42M160 106l-86 42" stroke="#0b2239" strokeWidth="1.5" />
      <path d="M118 86l42-20 42 20" fill="none" stroke="#00a6a6" strokeWidth="1" />
    </svg>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const dragStartX = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeProject = () => setActiveProject(null);
  const showPrevProject = () =>
    setActiveProject((index) =>
      index === null ? index : (index - 1 + projects.length) % projects.length
    );
  const showNextProject = () =>
    setActiveProject((index) =>
      index === null ? index : (index + 1) % projects.length
    );

  useEffect(() => {
    document.body.style.overflow =
      activeProject !== null || menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject, menuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        if (activeProject !== null) closeProject();
        else setMenuOpen(false);
      }
      if (activeProject !== null && event.key === 'ArrowLeft') showPrevProject();
      if (activeProject !== null && event.key === 'ArrowRight') showNextProject();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeProject]);

  return (
    <div className="site">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className={`header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-menu-open' : ''}`}>
        <div className="header__bar">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
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
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="btn btn--nav" href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero__grid" />
          <div className="wrap hero__layout">
            <div className="hero__copy">
              <p className="eyebrow">BIM / CAD Drafting Services</p>
              <h1>FAST. HIGH QUALITY. PROFICIENT.</h1>
              <p className="hero__sub">
                We Offer FAST, HIGH QUALITY and PROFICIENT BIM / CAD DRAFTING SERVICES
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#services">
                  View services
                </a>
                <a className="btn btn--ghost" href="#portfolio">
                  See projects
                </a>
              </div>
            </div>

            <div className="hero__art">
              <img src={`${process.env.PUBLIC_URL}/images/banner/37834.jpg`} alt="BIM-AXIS BIM and CAD drafting work" />
            </div>
          </div>
        </section>

        <section className="section" id="company">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Company</p>
              <h2>Precision production for architecture, engineering and construction.</h2>
            </header>

            <div className="split">
              <article className="panel">
                <h3>Our Vision</h3>
                <p>
                  Bim-axis is dedicated to become the World’s best CAD drafting services
                  provider, the World’s best 3D rendering services provider, and the World’s
                  best BIM modeling services provider.
                </p>
              </article>
              <article className="panel">
                <h3>Our Mission</h3>
                <p>
                  Bim-axis is committed to provide all our clients: fast, efficient &amp;
                  affordable Computer-Aided-Drafting (CAD), 3D rendering and BIM modelling
                  services in conformance to their high standards.
                </p>
              </article>
            </div>

            <article className="who">
              <h3>Who We Are</h3>
              <p>
                BIM-Axis is your Business Process Outsourcing provider of high-quality,
                efficient and fast Computer-Aided-Drafting (CAD), 3D Modeling &amp; Building
                Information- Modeling (BIM) services. We cater to Architectural firms,
                Architects, Engineers and allied professionals who is/are starting a company,
                who have no permanent drafting staff, who have limited staff that cannot
                support existing and incoming projects, who needs professional consultation
                regarding production of construction documents, and/or who just wants drafting
                services at a fraction of the cost.
              </p>
            </article>

            <div className="cards cards--4">
              {audience.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="card" key={item.title}>
                    <span className="card__icon">
                      <Icon />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section--navy" id="services">
          <div className="wrap">
            <header className="section__head section__head--light">
              <p className="eyebrow">Services</p>
              <h2>Drafting, modelling and production support across disciplines.</h2>
            </header>

            <div className="cards cards--3">
              {services.map((item) => (
                <article className="card card--dark" key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="card__focus">{item.focus}</p>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="bim-band">
              <h3>Why teams choose BIM with BIM-AXIS</h3>
              <div className="cards cards--4">
                {bimBenefits.map((item) => (
                  <article className="benefit" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Project Experience</p>
              <h2>Long-term production partnership.</h2>
            </header>

            <article className="experience">
              <div className="experience__copy">
                <p className="eyebrow">Featured client</p>
                <h3>TC Fire Protection Engineering, PC</h3>
                <p className="experience__dates">TC Fire Protection Engineering, PC / Jan 2014 – Present</p>
                <p>
                  TC Fire Protection Engineering, PC is located in Garden City Park, New York,
                  and was founded in 2013. At this location, TC Fire Protection Engineering, PC
                  employs approximately 2 people. This business is working in the following
                  industry: Firefighting and rescue. Annual sales for TC Fire Protection
                  Engineering, PC are around USD 121,541.
                </p>
              </div>
              <ul className="stats">
                <li>
                  <span>Location</span>
                  <strong>Garden City Park, New York</strong>
                </li>
                <li>
                  <span>Founded</span>
                  <strong>2013</strong>
                </li>
                <li>
                  <span>Industry</span>
                  <strong>Firefighting and rescue</strong>
                </li>
                <li>
                  <span>Team</span>
                  <strong>Approx. 2 people</strong>
                </li>
                <li>
                  <span>Annual sales</span>
                  <strong>USD 121,541</strong>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section section--alt" id="portfolio">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Project Portfolio</p>
              <h2>MEPF and BIM production work.</h2>
            </header>

            <div className="portfolio">
              {projects.map((project, index) => (
                <article className="project" key={project.id || project.name}>
                  <button
                    type="button"
                    className="project__open"
                    onClick={() => setActiveProject(index)}
                  >
                    <ProjectImage
                      src={project.image}
                      alt={project.name || 'Project image'}
                      variant={index}
                    />
                    <div className="project__body">
                      {project.name ? <h3>{project.name}</h3> : null}
                      {project.meta ? <p className="project__meta">{project.meta}</p> : null}
                      <p className="project__scope-label">Scope of work</p>
                      <p>{project.scope}</p>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Contact</p>
              <h2>Reach the BIM-AXIS production team.</h2>
            </header>

            <div className="contact">
              <div className="offices">
                <article className="office">
                  <h3>Head Office</h3>
                  <div className="contact-line">
                    <span className="contact-line__icon" aria-hidden="true">
                      <IconPlace />
                    </span>
                    <address>
                      Megatower 2 Residence
                      <br />
                      2F-19 Tecson Street (near the corner of Sandico Street),
                      <br />
                      Barangay Salud Mitra, Baguio City, 2600
                      <br />
                      Benguet, Philippines
                    </address>
                  </div>
                </article>
                <article className="office">
                  <h3>International Branch</h3>
                  <div className="contact-line">
                    <span className="contact-line__icon" aria-hidden="true">
                      <IconPlace />
                    </span>
                    <address>
                      United Arab Emirates
                      <br />
                      Dubai, Al Fahidi
                    </address>
                  </div>
                </article>
              </div>

              <div className="people">
                {team.map((person) => (
                  <article className="person" key={person.email}>
                    <h3>{person.name}</h3>
                    <p className="person__role">{person.role}</p>
                    {person.org ? <p>{person.org}</p> : null}
                    {person.phone ? (
                      <div className="contact-line">
                        <span className="contact-line__icon" aria-hidden="true">
                          <IconPhone />
                        </span>
                        <p>
                          <a href={`tel:${person.tel}`}>{person.phone}</a>
                        </p>
                      </div>
                    ) : null}
                    <div className="contact-line">
                      <span className="contact-line__icon" aria-hidden="true">
                        <IconEnvelope />
                      </span>
                      <p>
                        <a href={`mailto:${person.email}`}>{person.email}</a>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {activeProject !== null ? (
        <div className="modal" role="presentation" onClick={closeProject}>
          <button
            type="button"
            className="modal__arrow modal__arrow--prev"
            aria-label="Previous project"
            onClick={(event) => {
              event.stopPropagation();
              showPrevProject();
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <div
            className="modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Project details"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              dragStartX.current = event.changedTouches[0].clientX;
            }}
            onTouchEnd={(event) => {
              if (dragStartX.current === null) return;
              const delta = event.changedTouches[0].clientX - dragStartX.current;
              if (delta > 50) showPrevProject();
              if (delta < -50) showNextProject();
              dragStartX.current = null;
            }}
          >
            <button
              type="button"
              className="modal__close"
              aria-label="Close project"
              onClick={closeProject}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>

            <div className="modal__viewport">
              <div
                className="modal__track"
                style={{ transform: `translateX(-${activeProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <article className="modal__slide" key={project.id || project.name}>
                    <ProjectImage
                      src={project.image}
                      alt={project.name || 'Project image'}
                      variant={index}
                    />
                    <div className="modal__body">
                      {project.name ? <h3>{project.name}</h3> : null}
                      {project.meta ? <p className="project__meta">{project.meta}</p> : null}
                      <p className="project__scope-label">Scope of work</p>
                      <p>{project.scope}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="modal__arrow modal__arrow--next"
            aria-label="Next project"
            onClick={(event) => {
              event.stopPropagation();
              showNextProject();
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      ) : null}

      <footer className="footer">
        <div className="wrap footer__bar">
          <div className="brand brand--footer">
            <AxisMark size={28} />
            <span>
              <strong>BIM-AXIS</strong>
              <small>BIM / CAD Drafting Services</small>
            </span>
          </div>
          <p>© {new Date().getFullYear()} BIM-AXIS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
