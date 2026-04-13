import "./index.css";

const services = [
  "Tax Return Filing",
  "TIN Registration",
  "TIN Duplicate / Recovery",
  "IRD Profile Updates",
  "Tax Computations",
  "Tax Advisory",
  "Notice Handling Support",
  "Tax Updates",
  "Personal Tax Consultation",
];

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <div className="brand">
            <img
              src="/logo.png"
              alt="AH Advisors Logo"
              className="brandLogo"
            />
            <div>
              <h1 className="logo">AH Advisors</h1>
              <p className="tagline">Your Trusted Tax Advisor</p>
            </div>
          </div>

          <nav className="navLinks">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroContent">
            <span className="badge">
              Professional Tax Filing & Advisory Services
            </span>

            <h2>Reliable tax support for individuals and businesses.</h2>

            <p className="heroText">
              AH Advisors provides practical, professional, and client-focused tax
              services including return filing, TIN registration, tax computations,
              profile updates, tax updates, and personal tax consultation.
            </p>

            <div className="heroButtons">
              <a className="btn btnPrimary" href="#contact">
                Get in Touch
              </a>

              <a className="btn btnSecondary" href="#services">
                View Services
              </a>

              <a
                className="btn btnWhatsapp"
                href="https://wa.me/94750207378"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="heroCard">
            <h3>AH Advisors</h3>
            <p>
              Professional tax services with clarity, trust, and responsiveness.
            </p>

            <div className="contactMini">
              <div>
                <strong>Phone</strong>
                <span>0750207378</span>
              </div>

              <div>
                <strong>Email</strong>
                <span>arafathmoh21@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="sectionLabel">Services</p>
          <h2 className="sectionTitle">
            Professional services tailored to your tax needs
          </h2>

          <div className="servicesGrid">
            {services.map((service) => (
              <div className="serviceCard" key={service}>
                <div className="serviceIcon">AH</div>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section sectionAlt">
        <div className="container aboutGrid">
          <div>
            <p className="sectionLabel">About</p>
            <h2 className="sectionTitle">
              A professional presence built on trust and clarity
            </h2>

            <p className="bodyText">
              AH Advisors is positioned as a dependable tax service provider
              focused on practical support, timely filing, and professional
              client communication.
            </p>

            <p className="bodyText">
              Whether you need help with tax returns, registrations, profile
              updates, computations, or consultation, AH Advisors delivers a
              reliable and approachable service experience.
            </p>
          </div>

          <div className="aboutCard">
            <h3>Why choose AH Advisors</h3>
            <ul>
              <li>Clear service categories</li>
              <li>Responsive and professional communication</li>
              <li>Reliable support for filing and compliance</li>
              <li>Ongoing tax updates for better planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contactSection">
          <div className="contactBox">
            <p className="sectionLabel light">Contact</p>
            <h2>Let’s discuss your tax requirements</h2>

            <p>
              Reach out for reliable assistance with tax return filing, TIN
              registration, tax computations, updates, and consultation.
            </p>

            <div className="contactLinks">
              <a href="tel:0750207378">Call: 0750207378</a>
              <a href="mailto:arafathmoh21@gmail.com">
                Email: arafathmoh21@gmail.com
              </a>
              <a
                href="https://wa.me/94750207378"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <span>© 2026 AH Advisors. All rights reserved.</span>
          <span>Professional tax filing and advisory services.</span>
        </div>
      </footer>

      <a
        href="https://wa.me/94750207378"
        target="_blank"
        rel="noreferrer"
        className="whatsappFloat"
      >
        WhatsApp
      </a>
    </div>
  );
}