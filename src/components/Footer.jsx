import React, { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSnowflake,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { footerLinks } from "../Data/Data";

/* Icon Map */
const iconMap = {
  home: <FaHome />,
  info: <FaInfoCircle />,
  services: <FaServicestack />,
  phone: <FaPhoneAlt />,
  email: <FaEnvelope />,
  location: <FaMapMarkerAlt />,
  snow: <FaSnowflake />,

  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedinIn />,
};

const Footer = () => {
  const [active, setActive] = useState(null);

  const toggle = (id) => setActive(active === id ? null : id);

  /* Reusable List */
  const renderList = (list, withLink = false) =>
    list.map((item, i) =>
      withLink ? (
        <a
          key={i}
          href={item.link}
          className="flex items-center gap-2 hover:text-primary"
        >
          {iconMap[item.icon]}
          {item.title}
        </a>
      ) : (
        <p key={i} className="flex items-center gap-2">
          {iconMap[item.icon]}
          {item.title}
        </p>
      ),
    );

  /* Social Icons */
  const renderSocial = (size) =>
    footerLinks.social.map((item, i) => (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex items-center justify-center
          ${size}
          rounded-full bg-white/10
          hover:text-primary hover:bg-background
          shadow-sm hover:shadow-md
          active:scale-95
        `}
      >
        {iconMap[item.icon]}
      </a>
    ));

  return (
    <footer className="bg-primary text-white dark:bg-secondary dark:text-myGray">
      {/* ================= Desktop ================= */}
      <div className="hidden md:grid max-w-7xl mx-auto px-6 py-10 grid-cols-4 gap-8">
        <Section title="Quick Links">
          {renderList(footerLinks.quickLinks, true)}
        </Section>

        <Section title="Our Services">
          {renderList(footerLinks.services)}
        </Section>

        <Section title="Contact Us">{renderList(footerLinks.contact)}</Section>

        <Section title="Follow Us">
          <div className="flex gap-4">{renderSocial("w-8 h-8")}</div>
        </Section>
      </div>

      {/* ================= Mobile ================= */}
      <div className="md:hidden px-6 py-6">
        <Accordion
          title="Quick Links"
          id="links"
          active={active}
          toggle={toggle}
        >
          {renderList(footerLinks.quickLinks, true)}
        </Accordion>

        <Accordion
          title="Our Services"
          id="services"
          active={active}
          toggle={toggle}
        >
          {renderList(footerLinks.services)}
        </Accordion>

        <Accordion
          title="Contact Us"
          id="contact"
          active={active}
          toggle={toggle}
        >
          {renderList(footerLinks.contact)}
        </Accordion>

        {/* Social (Mobile) */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4">{renderSocial("w-8 h-8")}</div>
        </div>
      </div>

      {/* ================= Bottom ================= */}
      <div className="bg-secondary dark:text-myGray text-center py-3 text-sm">
        © {new Date().getFullYear()} Platinium Group. All Rights Reserved.
      </div>
    </footer>
  );
};

/* Section Component */
const Section = ({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold">{title}</h3>
    {children}
  </div>
);

/* Accordion */
const Accordion = ({ title, id, active, toggle, children }) => (
  <div className="border-b border-white/20 dark:border-myGray/30 py-3">
    <button
      onClick={() => toggle(id)}
      className="w-full flex justify-between items-center font-semibold"
    >
      {title}

      <FaChevronDown className={active === id ? "rotate-180" : ""} />
    </button>

    {active === id && (
      <div className="mt-3 space-y-2 text-sm flex flex-col">{children}</div>
    )}
  </div>
);

export default Footer;
