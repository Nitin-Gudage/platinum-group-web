"use client";

import React, { useState, useCallback, memo } from "react";

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
  FaQuora,
} from "react-icons/fa";

import { footerLinks } from "../Data/Data";
import { Link } from "react-router-dom";

/* ================= ICON MAP ================= */

const iconMap = {
  home: <FaHome />,
  info: <FaInfoCircle />,
  services: <FaServicestack />,
  phone: <FaPhoneAlt />,
  email: <FaEnvelope />,
  location: <FaMapMarkerAlt />,
  snow: <FaSnowflake />,
  faq: <FaQuora />,

  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedinIn />,
};

/* ================= FOOTER ================= */

const Footer = () => {
  const [active, setActive] = useState(null);

  const toggle = useCallback((id) => {
    setActive((prev) => (prev === id ? null : id));
  }, []);

  /* ================= LIST ================= */

  const renderList = useCallback((list, withLink = false) => {
    return list.map((item) => {
      const Icon = iconMap[item.icon];

      if (withLink) {
        return (
          <Link
            key={item.title}
            to={item.link}
            className="
              flex items-center gap-2
              hover:text-secondary transition
            "
          >
            {Icon}
            <span>{item.title}</span>
          </Link>
        );
      }

      return (
        <p key={item.title} className="flex items-center gap-2">
          {Icon}
          <span>{item.title}</span>
        </p>
      );
    });
  }, []);

  /* ================= SOCIAL ================= */

  const renderSocial = useCallback((size) => {
    return footerLinks.social.map((item) => {
      const Icon = iconMap[item.icon];

      return (
        <a
          key={item.icon}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.icon}
          className={`
            flex items-center justify-center
            ${size}
            rounded-full
            bg-white/10
            hover:text-primary
            hover:bg-background
            shadow-sm hover:shadow-md
            active:scale-95
            transition
          `}
        >
          {Icon}
        </a>
      );
    });
  }, []);

  return (
    <footer className="bg-primary text-white dark:bg-secondary dark:text-myGray">
      {/* ================= DESKTOP ================= */}
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

      {/* ================= MOBILE ================= */}
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

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-secondary dark:text-myGray text-center py-3 text-sm">
        © {new Date().getFullYear()} Platinum Group. All Rights Reserved.
      </div>
    </footer>
  );
};

/* ================= SECTION ================= */

const Section = memo(({ title, children }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-semibold">{title}</h3>
    {children}
  </div>
));

/* ================= ACCORDION ================= */

const Accordion = memo(({ title, id, active, toggle, children }) => {
  const open = active === id;

  return (
    <div className="border-b border-white/20 dark:border-myGray/30 py-3">
      <button
        onClick={() => toggle(id)}
        aria-expanded={open}
        className="
            w-full
            flex justify-between items-center
            font-semibold
            focus:outline-none
          "
      >
        {title}

        <FaChevronDown
          className={`
              transition-transform
              ${open ? "rotate-180" : ""}
            `}
        />
      </button>

      <div
        className={`
            overflow-hidden
            transition-all
            duration-300
            ${open ? "max-h-96 mt-3" : "max-h-0"}
          `}
      >
        <div className="space-y-2 text-sm flex flex-col">{children}</div>
      </div>
    </div>
  );
});

export default Footer;
