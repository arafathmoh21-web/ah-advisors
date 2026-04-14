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
      "Accurate preparation and filing of tax returns for individuals and businesses with proper compliance support.",
    icon: <FileCheck size={22} />,
  },
  {
    title: "TIN Registration",
    short:
      "Guidance and end-to-end support for new Taxpayer Identification Number registrations.",
    icon: <BadgeCheck size={22} />,
  },
  {
    title: "TIN Duplicate / Recovery",
    short:
      "Assistance in recovering or reissuing TIN details if your records or documents are missing.",
    icon: <RefreshCw size={22} />,
  },
  {
    title: "IRD Profile Updates",
    short:
      "Updating taxpayer information and maintaining correct records with the Inland Revenue Department.",
    icon: <Landmark size={22} />,
  },
  {
    title: "Tax Computations",
    short:
      "Preparation of clear and reliable tax computations to support filings and compliance requirements.",
    icon: <Calculator size={22} />,
  },
  {
    title: "Tax Advisory",
    short:
      "Practical advice on tax obligations, compliance matters, and filing-related concerns.",
    icon: <FileSearch size={22} />,
  },
  {
    title: "Notice Handling Support",
    short:
      "Professional support in responding to notices, requests, and follow-ups from the tax authorities.",
    icon: <BellRing size={22} />,
  },
  {
    title: "Tax Updates",
    short:
      "Timely updates on tax changes, deadlines, and matters relevant to individuals and businesses.",
    icon: <Newspaper size={22} />,
  },
  {
    title: "Personal Tax Consultation",
    short:
      "One-to-one support on personal tax matters, responsibilities, planning points, and practical next steps.",
    icon: <UserRound size={22} />,
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
          <div className="brand">
            <img src="/logo.png" alt="AH Advisors Logo" className="brandLogo" />
            <div>
              <h1 className="logo">AH Advisors</h1>
              <p className="tagline">Your Trusted Tax Advisor</p>
            </div>
          </div>

          <nav className="navLinks">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
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
              AH Advisors provides practical, professional, and client-focused
              tax services including return filing, TIN registration, tax
              computations, profile updates, tax updates, and personal tax
              consultation.
            </p>

            <div className="heroButtons">
              <a className="btn btnPrimary" href="#contact">
                Contact Now
              </a>

              <a className="btn btnSecondary" href="#services">
                Our Services
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

          <div className="heroCard">
            <h3>Quick Contact</h3>
            <p>
              Get in touch for tax filing, registration, computations, updates,
              and consultation support.
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

              <div>
                <strong>Facebook</strong>
                <span>AH Advisors Page</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="sectionLabel">Services</p>
          <h2 className="sectionTitle">Our Professional Services</h2>
          <p className="sectionSubtext">
            Click a service card to view a short explanation.
          </p>

          <div className="servicesGrid">
            {services.map((service, index) => (
              <button
                key={service.title}
                className={`serviceCard ${openCard === index ? "active" : ""}`}
                onClick={() => toggleCard(index)}
                type="button"
              >
                <div className="serviceIcon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="serviceHint">
                  {openCard === index ? "Click to close" : "Click to view details"}
                </p>

                {openCard === index && (
                  <div className="serviceDescription">{service.short}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section sectionAlt">
        <div className="container pricingWrap">
          <div className="pricingCard">
            <p className="sectionLabel">Pricing</p>
            <h2 className="sectionTitle">Most Reliable Pricing</h2>
            <p className="bodyText">
              AH Advisors aims to provide reliable, fair, and practical pricing
              based on the nature of the service required. Clients receive
              professional support with a focus on value, clarity, and trust.
            </p>
            <ul className="pricingList">
              <li>Reasonable pricing structure</li>
              <li>Professional and reliable service delivery</li>
              <li>Clear communication before engagement</li>
              <li>Suitable support for individuals and businesses</li>
            </ul>
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
            <h2>All Contact Details in One Place</h2>

            <p>
              Reach out through phone, email, WhatsApp, or Facebook for reliable
              assistance with your tax-related requirements.
            </p>

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