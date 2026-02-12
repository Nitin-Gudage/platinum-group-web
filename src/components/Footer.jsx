"use client";

import { useState, useCallback, memo } from "react";

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

import { footerLinks, contactInfo, logo } from "../Data/Data";
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
            className="flex items-center gap-3 w-max text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            {Icon}
            <span>{item.title}</span>
          </Link>
        );
      }

      return (
        <p key={item.title} className="flex items-center gap-3 text-gray-300">
          {Icon}
          <span>{item.title}</span>
        </p>
      );
    });
  }, []);

  /* ================= SOCIAL ================= */

  const renderSocial = useCallback(
    (size = "w-10 h-10") => (
      <>
        {contactInfo.instagram && (
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} bg-gradient-to-br from-pink-500 to-purple-600 border border-white/20 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300`}
            aria-label="instagram"
          >
            <FaInstagram />
          </a>
        )}

        {contactInfo.whatsapp && (
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} bg-green-500 border border-white/20 flex items-center justify-center rounded-full hover:bg-green-400 hover:scale-110 transition-all duration-300`}
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
      icon: <FaPhoneAlt className="text-blue-400" />,
      text: contactInfo.mobile1,
      href: `tel:${contactInfo.mobile1.replace(/\s+/g, "")}`,
    },
    {
      icon: <FaPhoneAlt className="text-blue-400" />,
      text: contactInfo.mobile2,
      href: `tel:${contactInfo.mobile2.replace(/\s+/g, "")}`,
    },
    {
      icon: <FaEnvelope className="text-blue-400" />,
      text: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-400" />,
      text: `${contactInfo.address.street}, ${contactInfo.address.city}`,
      href: `https://maps.app.goo.gl/s3DojJi1Q5WEtruB9`,
    },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid max-w-7xl mx-auto px-4 lg:py-16 md:py-10 md:grid-cols-4 lg:grid-cols-6 space-x-5 space-y-5">
        {/* Brand */}
        <div className="md:col-span-5 lg:col-span-2">
          <img
            src={logo.icon}
            alt={logo.altName}
            width="64"
            height="64"
            className="h-16 w-auto object-contain mb-6"
          />

          <p className="text-gray-400 text-sm mb-4">
            Professional AC services for homes and businesses across India.
          </p>

          <p className="text-blue-400 text-sm font-semibold mb-2">
            AC Service in Mumbai | Pune | Delhi | Bangalore | Chennai
          </p>

          <p className="text-gray-400 text-xs mb-4">
            GST No: {contactInfo.gstNumber}
          </p>

          <div className="flex gap-3">{renderSocial("w-9 h-9")}</div>
        </div>

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
            <a
              key={i}
              href={item.href}
              className="flex gap-3 text-gray-300 hover:text-white transition"
            >
              {item.icon}
              <span className="text-sm">{item.text}</span>
            </a>
          ))}
        </Section>

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-3">Need Help?</h3>

          <a
            href={`tel:${contactInfo.mobile1.replace(/\s+/g, "")}`}
            className="inline-flex gap-2 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6 py-8 text-center  ">
        <img
          src={logo.icon}
          alt={logo.altName}
          width="222"
          height="50"
          fetchPriority="high"
          className="sm:h-12 h-10 m-auto mb-5 object-contain"
          loading="eager"
        />

        <div className="flex justify-center gap-3 mb-4">
          {renderSocial("w-9 h-9")}
        </div>

        <p
          className="text-blue-400 text-sm font-semibold mb-2"
          itemProp="areaServed"
          aria-label="AC and HVAC services available across major cities in India including Mumbai, Pune, Delhi, Bangalore, and Chennai"
        >
          AC &amp; HVAC Services Across India: Mumbai, Pune, Delhi, Bangalore
          &amp; Chennai
        </p>

        <p className="text-gray-400 text-xs mb-6">
          GST No: {contactInfo.gstNumber}
        </p>

        <Accordion
          title="Quick Links"
          id="links"
          active={active}
          toggle={toggle}
        >
          {renderLinks(footerLinks.quickLinks, true)}
        </Accordion>

        <Accordion
          title="Services"
          id="services"
          active={active}
          toggle={toggle}
        >
          {renderLinks(footerLinks.services)}
        </Accordion>

        <Accordion title="Contact" id="contact" active={active} toggle={toggle}>
          {contactItems.map((item, i) => (
            <a key={i} href={item.href} className="flex gap-2 text-sm">
              {item.icon}
              {item.text}
            </a>
          ))}
        </Accordion>

        <a
          href={`tel:${contactInfo.mobile1.replace(/\s+/g, "")}`}
          className="btn-primary mt-6 block"
        >
          Call Now
        </a>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-gray-900/50 text-center py-4 text-xs border-t border-gray-800">
        © {new Date().getFullYear()} Platinum Group. All Rights Reserved.
      </div>
    </footer>
  );
};

/* ================= SECTION ================= */

const Section = memo(({ title, children }) => (
  <div className="space-y-3">
    <h3 className="font-semibold">{title}</h3>
    {children}
  </div>
));

/* ================= ACCORDION ================= */

const Accordion = memo(({ title, id, active, toggle, children }) => {
  const open = active === id;

  return (
    <div className="border-b border-gray-700 py-3 text-left">
      <button
        onClick={() => toggle(id)}
        className="w-full flex justify-between font-semibold"
      >
        {title}
        <FaChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
});

export default Footer;
