import { useState } from "react";
import {
  Calculator,
  FileCheck,
  FileSearch,
  BellRing,
  BadgeCheck,
  RefreshCw,
  UserRound,
  Newspaper,
  Landmark,
  ShieldCheck,
  BriefcaseBusiness,
  CircleDollarSign,
} from "lucide-react";
import "./index.css";

type Service = {
  title: string;
  short: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Tax Return Filing",
    short:
      "Preparation and filing of tax returns for individuals and businesses with proper attention to accuracy, deadlines, and compliance requirements.",
    icon: <FileCheck size={20} strokeWidth={2} />,
  },
  {
    title: "TIN Registration",
    short:
      "Guidance and support for obtaining a new Taxpayer Identification Number through a clear and practical process.",
    icon: <BadgeCheck size={20} strokeWidth={2} />,
  },
  {
    title: "TIN Duplicate / Recovery",
    short:
      "Assistance in recovering, locating, or reissuing TIN-related details when records or previous information are unavailable.",
    icon: <RefreshCw size={20} strokeWidth={2} />,
  },
  {
    title: "IRD Profile Updates",
    short:
      "Support in updating taxpayer details and maintaining proper records with the Inland Revenue Department.",
    icon: <Landmark size={20} strokeWidth={2} />,
  },
  {
    title: "Tax Computations",
    short:
      "Preparation of clear and reliable tax computations to support filing, reporting, and compliance requirements.",
    icon: <Calculator size={20} strokeWidth={2} />,
  },
  {
    title: "Tax Advisory",
    short:
      "Practical tax guidance for individuals and businesses on obligations, notices, filing responsibilities, and related matters.",
    icon: <FileSearch size={20} strokeWidth={2} />,
  },
  {
    title: "Notice Handling Support",
    short:
      "Professional assistance in reviewing and responding to notices, requests, and follow-up matters received from tax authorities.",
    icon: <BellRing size={20} strokeWidth={2} />,
  },
  {
    title: "Tax Updates",
    short:
      "Relevant updates on tax changes, filing deadlines, and practical developments that may affect clients.",
    icon: <Newspaper size={20} strokeWidth={2} />,
  },
  {
    title: "Personal Tax Consultation",
    short:
      "One-to-one consultation for personal tax matters, responsibilities, planning considerations, and practical next steps.",
    icon: <UserRound size={20} strokeWidth={2} />,
  },
];

const facebookLink =
  "https://facebook.com/profile.php?id=61588193288059";

export default function App() {
  const [openCard, setOpenCard] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <a href="#top" className="brand">
            <img src="/logo.png" alt="AH Advisors Logo" className="brandLogo" />
            <div className="brandText">
              <h1 className="logo">AH Advisors</h1>
              <p className="tagline">Your Trusted Tax Advisor</p>
            </div>
          </a>

          <nav className="navLinks">
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroContent">
              <span className="heroEyebrow">
                Professional Tax Filing & Advisory Services
              </span>

              <h2 className="heroTitle">
                Reliable tax support for individuals and businesses.
              </h2>

              <p className="heroText">
                AH Advisors provides practical, professional, and client-focused
                tax services for individuals and businesses seeking dependable
                support in return filing, registrations, tax computations,
                profile updates, tax notices, and advisory matters.
              </p>

              <div className="heroButtons">
                <a className="btn btnPrimary" href="#contact">
                  Contact Now
                </a>

                <a className="btn btnSecondary" href="#services">
                  View Services
                </a>

                <a
                  className="btn btnWhatsapp"
                  href="https://wa.me/94750207378?text=Hello%20AH%20Advisors,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>

                <a
                  className="btn btnFacebook"
                  href={facebookLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>

            <aside className="heroPanel">
              <div className="heroPanelHeader">
                <h3>Quick Contact</h3>
                <p>
                  Professional support for filings, registrations, tax
                  computations, updates, and advisory matters.
                </p>
              </div>

              <div className="heroInfoGrid">
                <div className="heroInfoItem">
                  <span className="heroInfoLabel">Phone</span>
                  <span className="heroInfoValue">0750207378</span>
                </div>
                <div className="heroInfoItem">
                  <span className="heroInfoLabel">Email</span>
                  <span className="heroInfoValue">arafathmoh21@gmail.com</span>
                </div>
                <div className="heroInfoItem">
                  <span className="heroInfoLabel">Facebook</span>
                  <span className="heroInfoValue">AH Advisors Page</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="sectionHead">
              <span className="sectionEyebrow">Services</span>
              <h2 className="sectionTitle">Our Professional Services</h2>
              <p className="sectionIntro">
                Select a service category to view a brief description.
              </p>
            </div>

            <div className="servicesGrid">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  className={`serviceFlipCard ${openCard === index ? "flipped" : ""}`}
                  onClick={() => toggleCard(index)}
                  type="button"
                >
                  <div className="serviceFlipInner">
                    <div className="serviceFlipFront">
                      <div className="serviceIcon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p className="serviceHint">Tap to view details</p>
                    </div>

                    <div className="serviceFlipBack">
                      <h3>{service.title}</h3>
                      <p>{service.short}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section sectionSoft">
          <div className="container">
            <div className="sectionHead">
              <span className="sectionEyebrow">Why Choose AH Advisors</span>
              <h2 className="sectionTitle">Professional support built on trust</h2>
            </div>

            <div className="whyGrid">
              <article className="whyCard">
                <div className="whyIcon">
                  <ShieldCheck size={20} strokeWidth={2} />
                </div>
                <h3>Reliable Service</h3>
                <p>
                  A practical and dependable approach to tax-related matters
                  with attention to accuracy and professional standards.
                </p>
              </article>

              <article className="whyCard">
                <div className="whyIcon">
                  <BriefcaseBusiness size={20} strokeWidth={2} />
                </div>
                <h3>Professional Communication</h3>
                <p>
                  Clear and structured communication so clients understand the
                  process, scope, and next steps confidently.
                </p>
              </article>

              <article className="whyCard">
                <div className="whyIcon">
                  <CircleDollarSign size={20} strokeWidth={2} />
                </div>
                <h3>Practical Value</h3>
                <p>
                  Support designed to be useful, responsive, and aligned with
                  the actual needs of individuals and businesses.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container pricingGrid">
            <div className="pricingMain">
              <span className="sectionEyebrow">Pricing</span>
              <h2 className="sectionTitle">Most Reliable Pricing</h2>
              <p className="bodyText">
                AH Advisors aims to provide fair, reasonable, and practical
                pricing based on the type and complexity of the service
                required.
              </p>
              <p className="bodyText">
                The focus is on dependable service, professional delivery, and
                clear understanding before engagement.
              </p>
            </div>

            <div className="pricingCard">
              <ul className="pricingList">
                <li>Reasonable pricing structure</li>
                <li>Professional and reliable service delivery</li>
                <li>Clear understanding before engagement</li>
                <li>Support suitable for individuals and businesses</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section sectionSoft">
          <div className="container narrow">
            <div className="sectionHead alignLeft">
              <span className="sectionEyebrow">About</span>
              <h2 className="sectionTitle">
                A professional presence with practical service focus
              </h2>
            </div>

            <p className="bodyText">
              AH Advisors is positioned as a dependable tax service provider
              focused on practical support, timely filing, and professional
              client communication.
            </p>

            <p className="bodyText">
              Whether clients require support for returns, registrations,
              profile updates, tax computations, notices, or consultations, AH
              Advisors aims to provide a service experience built on reliability,
              responsiveness, and trust.
            </p>
          </div>
        </section>

        <section id="contact" className="section contactSectionWrap">
          <div className="container">
            <div className="contactBox">
              <div className="sectionHead centerLight">
                <span className="sectionEyebrow light">Contact</span>
                <h2 className="sectionTitle lightTitle">Send an Enquiry</h2>
                <p className="contactIntro">
                  Submit your details and AH Advisors will get back to you
                  regarding your tax requirements.
                </p>
              </div>

              <form
                action="https://formsubmit.co/arafathmoh21@gmail.com"
                method="POST"
                className="contactForm"
              >
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="text" name="phone" placeholder="Phone Number" />
                <textarea
                  name="message"
                  placeholder="Your Requirement"
                  rows={5}
                  required
                ></textarea>

                <button type="submit" className="btn btnPrimary submitBtn">
                  Submit Enquiry
                </button>
              </form>

              <div className="contactLinks">
                <a href="tel:0750207378">Call: 0750207378</a>
                <a href="mailto:arafathmoh21@gmail.com">
                  Email: arafathmoh21@gmail.com
                </a>
                <a
                  href="https://wa.me/94750207378?text=Hello%20AH%20Advisors,%20I%20would%20like%20to%20get%20in%20touch."
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
                <a href={facebookLink} target="_blank" rel="noreferrer">
                  Visit Facebook Page
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <span>© 2026 AH Advisors. All rights reserved.</span>
          <span>Professional tax filing and advisory services.</span>
        </div>
      </footer>

      <a
        href="https://wa.me/94750207378?text=Hello%20AH%20Advisors"
        target="_blank"
        rel="noreferrer"
        className="whatsappFloat"
      >
        WhatsApp
      </a>
    </div>
  );
}