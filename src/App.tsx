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
  MessagesSquare,
  Clock3,
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

const faqs = [
  {
    question: "Do you support both individuals and businesses?",
    answer:
      "Yes. AH Advisors provides support for both individual and business-related tax matters depending on the service required.",
  },
  {
    question: "Can I contact you through WhatsApp directly?",
    answer:
      "Yes. You can contact AH Advisors directly through WhatsApp for initial enquiries and service discussions.",
  },
  {
    question: "Do you assist with TIN registration and profile updates?",
    answer:
      "Yes. TIN registration, duplicate recovery, and IRD profile updates are included among the core services provided.",
  },
  {
    question: "How is pricing decided?",
    answer:
      "Pricing depends on the type of service, scope of work, and complexity involved. The focus is on fair, reliable, and practical pricing.",
  },
];

const facebookLink =
  "https://facebook.com/profile.php?id=61588193288059";

export default function App() {
  const [openCard, setOpenCard] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
              AH Advisors provides practical, professional, and client-focused
              tax support for individuals and businesses seeking reliable
              guidance on return filing, TIN registration, tax computations,
              profile updates, tax notices, and general advisory matters.
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

      <section className="section sectionLight">
        <div className="container">
          <p className="sectionLabel">Why Choose Us</p>
          <h2 className="sectionTitle">Professional support you can rely on</h2>

          <div className="featureGrid">
            <div className="featureCard">
              <div className="featureIcon">
                <ShieldCheck size={22} />
              </div>
              <h3>Reliable Service</h3>
              <p>
                Practical support with a focus on accuracy, trust, and professional handling.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">
                <MessagesSquare size={22} />
              </div>
              <h3>Clear Communication</h3>
              <p>
                Straightforward communication so clients clearly understand the service and next steps.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">
                <Clock3 size={22} />
              </div>
              <h3>Timely Support</h3>
              <p>
                Responsive assistance for deadlines, filings, updates, notices, and consultations.
              </p>
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

      <section id="pricing" className="section sectionLight">
        <div className="container pricingWrap">
          <div className="pricingCard">
            <p className="sectionLabel">Pricing</p>
            <h2 className="sectionTitle">Most Reliable Pricing</h2>
            <p className="bodyText">
              AH Advisors aims to provide fair, practical, and dependable pricing
              based on the nature and complexity of each service requirement.
            </p>
            <p className="bodyText">
              The focus is on value, clarity, and professional service delivery
              rather than a one-size-fits-all approach.
            </p>
            <ul className="pricingList">
              <li>Reasonable pricing structure</li>
              <li>Professional and reliable service delivery</li>
              <li>Clear communication before engagement</li>
              <li>Suitable support for individuals and businesses</li>
            </ul>
          </div>

          <div className="aboutCard">
            <h3>Why clients choose AH Advisors</h3>
            <ul>
              <li>Clear service categories and practical support</li>
              <li>Responsive and professional communication</li>
              <li>Reliable support for filing and compliance matters</li>
              <li>Ongoing tax updates for better planning</li>
              <li>Approachable guidance for individuals and businesses</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <p className="sectionLabel">About</p>
          <h2 className="sectionTitle">
            A professional presence built on trust and clarity
          </h2>

          <p className="bodyText">
            AH Advisors is positioned as a dependable tax service provider focused
            on practical support, timely filing, and professional client communication.
          </p>

          <p className="bodyText">
            Whether you need help with tax returns, registrations, profile updates,
            tax computations, notices, or consultation, AH Advisors aims to deliver
            a service experience built on reliability, responsiveness, and trust.
          </p>
        </div>
      </section>

      <section className="section sectionLight">
        <div className="container">
          <p className="sectionLabel">Testimonials</p>
          <h2 className="sectionTitle">What clients value most</h2>

          <div className="testimonialGrid">
            <div className="testimonialCard">
              <p>
                “Professional, reliable, and very clear in communication. The support
                provided made the entire process much easier to understand.”
              </p>
              <strong>Client Feedback</strong>
            </div>

            <div className="testimonialCard">
              <p>
                “Quick responses, practical guidance, and a dependable service
                experience from start to finish.”
              </p>
              <strong>Individual Client</strong>
            </div>

            <div className="testimonialCard">
              <p>
                “A trustworthy approach to tax support with good communication and
                helpful updates throughout the process.”
              </p>
              <strong>Business Client</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="sectionLabel">FAQ</p>
          <h2 className="sectionTitle">Frequently asked questions</h2>

          <div className="faqList">
            {faqs.map((faq, index) => (
              <button
                key={faq.question}
                className={`faqItem ${openFaq === index ? "open" : ""}`}
                onClick={() => toggleFaq(index)}
                type="button"
              >
                <div className="faqQuestion">{faq.question}</div>
                {openFaq === index && (
                  <div className="faqAnswer">{faq.answer}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

     <section id="contact" className="section">
  <div className="container contactSection">
    <div className="contactBox">
      <p className="sectionLabel light">Contact</p>
      <h2>Send an Enquiry</h2>

      <p>
        Submit your details and AH Advisors will get back to you regarding
        your tax requirements.
      </p>

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
          rows={4}
          required
        ></textarea>

        <button type="submit" className="btn btnPrimary">
          Submit Enquiry
        </button>
      </form>

      <div className="contactLinks">
        <a href="tel:0750207378">Call: 0750207378</a>
        <a href="mailto:arafathmoh21@gmail.com">
          Email: arafathmoh21@gmail.com
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