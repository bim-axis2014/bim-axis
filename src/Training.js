import SiteHeader, { AxisMark } from './SiteHeader';
import './Training.css';

const courses = [
  {
    code: 'A',
    title: 'AutoCAD 2D Basics',
    points: [
      '40 hrs duration',
      'Full 2D Drafting',
      'With Activity',
      'Autodesk License provided while on training',
      'Autodesk Certificate',
    ],
  },
  {
    code: 'A',
    title: 'AutoCAD Architecture',
    points: [
      '40 hrs duration',
      'Full 2D Drafting',
      'With Hands on Project',
      'Autodesk License provided while on training',
      'Autodesk Certificate',
    ],
  },
  {
    code: 'A',
    title: 'AutoCAD Structural',
    points: [
      '40 hrs duration',
      'Full 2D Drafting',
      'With Hands on Project',
      'Autodesk License provided while on training',
      'Autodesk Certificate',
    ],
  },
  {
    code: 'R',
    title: 'Revit Architecture',
    points: [
      '40 hrs duration',
      'Full 3D Drafting',
      'With Hands on Project',
      'Autodesk License provided while on training',
      'Autodesk Certificate',
    ],
  },
  {
    code: 'R',
    title: 'Revit Structural',
    points: [
      '40 hrs duration',
      'Full 3D Drafting',
      'With Hands on Project',
      'Autodesk License provided while on training',
      'Autodesk Certificate',
    ],
  },
  {
    code: 'A',
    title: 'AutoCAD MEP',
    points: [
      '40 hrs duration',
      'Full 2D Drafting',
      'With Hands on Project',
      'Autodesk License provided while on training',
      'Autodesk Certificate',
    ],
  },
];

const perks = [
  { title: 'Train at your own pace', copy: 'Learn on a schedule that fits your work and life.' },
  { title: 'Convenient online training', copy: 'Study anytime, anywhere, without leaving your projects.' },
  { title: 'Autodesk license while training', copy: 'Software access is provided for the duration of the course.' },
  { title: 'Autodesk certificate', copy: 'Finish with a certificate that supports your professional growth.' },
];

const reasons = [
  {
    title: 'Stronger teams',
    copy: 'Improve collaboration, communication, and overall productivity.',
  },
  {
    title: 'Fewer errors',
    copy: 'Increase accuracy, reduce rework, and lower project costs.',
  },
  {
    title: 'Better results',
    copy: 'Deliver higher-quality projects, satisfy clients, and win more opportunities.',
  },
];

function asset(path) {
  return `${process.env.PUBLIC_URL}${path}`;
}

function TrainingPage() {
  return (
    <div className="site training-page">
      <a className="skip" href="#training-main">
        Skip to content
      </a>

      <SiteHeader />

      <main id="training-main">
        <section className="hero training-hero" id="training-top">
          <div className="hero__grid" />
          <div className="wrap hero__layout">
            <div className="hero__copy">
              <p className="eyebrow">A BIM-AXIS training program</p>
              <h1>
                AutoCAD / BIM
                <span className="training-hero__gold"> Mastery</span>
              </h1>
              <p className="hero__sub">
                Master the skills. Shape the future. Your path to engineering and design
                excellence — with Racquel S. Burdeos, Autodesk Certified Instructor and
                owner of BIM-AXIS.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#courses">
                  View courses
                </a>
                <a className="btn btn--ghost" href="#enroll">
                  Enroll today
                </a>
              </div>
            </div>
            <div className="hero__art">
              <img
                src={asset('/images/banner/3709.jpg')}
                alt="BIM-AXIS AutoCAD and BIM training"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Why this program</p>
              <h2>Train at your own pace. Anytime. Anywhere.</h2>
            </header>
            <div className="cards cards--4">
              {perks.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--navy" id="courses">
          <div className="wrap">
            <header className="section__head section__head--light">
              <p className="eyebrow">Our courses</p>
              <h2>Six focused tracks for drafting and BIM production.</h2>
            </header>
            <div className="cards cards--3">
              {courses.map((course) => (
                <article className="card card--dark" key={course.title}>
                  <span className="course-badge">{course.code}</span>
                  <h3>{course.title}</h3>
                  <ul className="course-points">
                    {course.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="corporate">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Corporate training</p>
              <h2>Train your staff. Build your business.</h2>
            </header>
            <article className="panel">
              <h3>CAD / BIM training for teams</h3>
              <p>
                Professional corporate training solutions designed to enhance your team’s
                skills, improve productivity, and deliver real-world project success.
              </p>
              <p className="training-note">
                Convenient online training designed to fit your team’s schedule — learn
                anytime, anywhere.
              </p>
            </article>
            <div className="cards cards--3 training-reasons">
              {reasons.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <div className="cards cards--3">
              <article className="card">
                <h3>Upskill</h3>
                <p>Empower your team.</p>
              </article>
              <article className="card">
                <h3>Increase efficiency</h3>
                <p>Reduce costs.</p>
              </article>
              <article className="card">
                <h3>Deliver excellence</h3>
                <p>Achieve success.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="instructor">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Instructor</p>
              <h2>Learn from the BIM-AXIS owner.</h2>
            </header>
            <article className="experience training-instructor">
              <div className="experience__copy">
                <p className="eyebrow">Autodesk Certified Instructor (ACI)</p>
                <h3>Racquel Sisgon Burdeos</h3>
                <p className="experience__dates">Owner, BIM-AXIS Production Services</p>
                <p>
                  Racquel leads BIM-AXIS drafting and BIM production, and teaches AutoCAD and
                  Revit courses in partnership with BIM Philippines. Training is built around
                  real production work: 2D drafting, 3D modelling, and hands-on project
                  practice.
                </p>
                <p>Autodesk: Learn. Design. Build. Succeed.</p>
              </div>
              <ul className="stats">
                <li>
                  <span>Partnership</span>
                  <strong>BIM Philippines</strong>
                </li>
                <li>
                  <span>Format</span>
                  <strong>Flexible online training</strong>
                </li>
                <li>
                  <span>Email</span>
                  <strong>
                    <a href="mailto:racquelsburdeos@gmail.com">racquelsburdeos@gmail.com</a>
                  </strong>
                </li>
                <li>
                  <span>Phone</span>
                  <strong>
                    <a href="tel:+639271171525">+63 927 117 1525</a>
                  </strong>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="enroll">
          <div className="wrap">
            <header className="section__head">
              <p className="eyebrow">Enroll today</p>
              <h2>Upskill. Design. Build the future.</h2>
            </header>
            <article className="who">
              <h3>Get started</h3>
              <p>
                Message Racquel to enroll in AutoCAD/BIM Mastery or to arrange corporate
                training for your staff. Invest in skills. Build the future.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="mailto:racquelsburdeos@gmail.com">
                  Email Racquel
                </a>
                <a className="btn btn--ghost training-btn-dark" href="tel:+639271171525">
                  Call +63 927 117 1525
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__bar">
          <a className="brand brand--footer" href={`${process.env.PUBLIC_URL}/`}>
            <AxisMark size={28} />
            <span>
              <strong>BIM-AXIS</strong>
              <small>CAD / BIM Training</small>
            </span>
          </a>
          <p>© {new Date().getFullYear()} BIM-AXIS. Training by Racquel S. Burdeos, ACI.</p>
        </div>
      </footer>
    </div>
  );
}

export default TrainingPage;
