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
  FaLinkedinIn,
  FaQuora,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { footerLinks, contactInfo } from "../Data/Data";
import { Link } from "react-router-dom";

/* ================= ICON MAP ================= */

const iconMap = {
  home: <FaHome />,
  info: <FaInfoCircle />,
  services: <FaServicestack />,
  snow: <FaSnowflake />,
  faq: <FaQuora />,
  phone: <FaPhoneAlt />,

  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  xTwitter: <FaXTwitter />,
  linkedin: <FaLinkedinIn />,
  whatsapp: <FaWhatsapp />,
};

/* ================= FOOTER ================= */

const Footer = () => {
  const [active, setActive] = useState(null);

  const toggle = useCallback((id) => {
    setActive((prev) => (prev === id ? null : id));
  }, []);

  /* ================= LINKS ================= */

  const renderLinks = useCallback((list, withLink = false) => {
    return list.map((item) => {
      const Icon = iconMap[item.icon];

      if (withLink) {
        return (
          <Link
            key={item.title}
            to={item.link}
            className="flex items-center gap-2 w-max hover:text-secondary transition"
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

  const renderSocial = useCallback(
    (size) => (
      <>
        {contactInfo.facebook && (
          <a
            href={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} social-btn bg-blue-800 border border-white flex items-center justify-center rounded-full  `}
            aria-label="facebook"
          >
            <FaFacebookF />
          </a>
        )}

        {contactInfo.instagram && (
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} social-btn text-pink-500 bg-white border-white flex items-center justify-center rounded-full`}
            aria-label="instagram"
          >
            <FaInstagram />
          </a>
        )}

        {contactInfo.xTwitter && (
          <a
            href={contactInfo.xTwitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} social-btn bg-black border  flex items-center justify-center rounded-full`}
            aria-label="twitter"
          >
            <FaXTwitter />
          </a>
        )}
        {contactInfo.whatsapp && (
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} social-btn text-white bg-green-500 border-white flex items-center justify-center rounded-full`}
            aria-label="whatsapp"
          >
            <FaWhatsapp />
          </a>
        )}
      </>
    ),
    [],
  );

  /* ================= CONTACT DATA ================= */

  const contactItems = [
    {
      icon: <FaPhoneAlt />,
      text: contactInfo.mobile,
    },
    {
      icon: <FaEnvelope />,
      text: contactInfo.email,
    },
    {
      icon: <FaMapMarkerAlt />,
      text: `${contactInfo.address.street}, ${contactInfo.address.city}`,
    },
  ];

  return (
    <footer className="bg-primary text-white dark:bg-secondary dark:text-myGray">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid max-w-7xl mx-auto px-6 py-10 grid-cols-4 gap-8">
        {/* Quick Links */}
        <Section title="Quick Links">
          {renderLinks(footerLinks.quickLinks, true)}
        </Section>

        {/* Services */}
        <Section title="Our Services">
          {renderLinks(footerLinks.services)}
        </Section>

        {/* Contact */}
        <Section title="Contact Us">
          {contactItems.map((item, i) => (
            <p key={i} className="flex items-center gap-2">
              {item.icon}
              {item.text}
            </p>
          ))}
        </Section>

        {/* Social */}
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
          {renderLinks(footerLinks.quickLinks, true)}
        </Accordion>

        <Accordion
          title="Our Services"
          id="services"
          active={active}
          toggle={toggle}
        >
          {renderLinks(footerLinks.services)}
        </Accordion>

        <Accordion
          title="Contact Us"
          id="contact"
          active={active}
          toggle={toggle}
        >
          {contactItems.map((item, i) => (
            <p key={i} className="flex gap-2">
              {item.icon}
              {item.text}
            </p>
          ))}
        </Accordion>

        {/* Social */}
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
        className="w-full flex justify-between items-center font-semibold"
      >
        {title}

        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="space-y-2 text-sm flex flex-col">{children}</div>
      </div>
    </div>
  );
});

export default Footer;
