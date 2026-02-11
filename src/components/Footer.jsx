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
        {contactInfo.facebook && (
          <a
            href={contactInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} social-btn bg-blue-700 border border-white/20 flex items-center justify-center rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300`}
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
            className={`${size} social-btn bg-gradient-to-br from-pink-500 to-purple-600 border border-white/20 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300`}
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
            className={`${size} social-btn bg-gray-800 border border-white/20 flex items-center justify-center rounded-full hover:bg-gray-700 hover:scale-110 transition-all duration-300`}
            aria-label="twitter"
          >
            <FaXTwitter />
          </a>
        )}

        {contactInfo.linkedin && (
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} social-btn bg-blue-600 border border-white/20 flex items-center justify-center rounded-full hover:bg-blue-500 hover:scale-110 transition-all duration-300`}
            aria-label="linkedin"
          >
            <FaLinkedinIn />
          </a>
        )}

        {contactInfo.whatsapp && (
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`${size} social-btn bg-green-500 border border-white/20 flex items-center justify-center rounded-full hover:bg-green-400 hover:scale-110 transition-all duration-300`}
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
      text: `${contactInfo.address.street}, ${contactInfo.address.area}, ${contactInfo.address.city}-${contactInfo.address.pincode}`,
      href: `https://maps.app.goo.gl/s3DojJi1Q5WEtruB9`,
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary to-gray-900 text-white">
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 py-16 grid-cols-5 gap-12">
        {/* Brand */}
        <div className="col-span-1">
          <img
            src={logo.icon}
            alt={logo.altName}
            className="h-16 object-contain mb-6"
          />
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Professional AC services for homes and businesses. Expert repairs,
            installation, and maintenance acrosa India.
          </p>
          <div className="flex gap-3">{renderSocial("w-9 h-9")}</div>
        </div>

        {/* Quick Links */}
        <Section title="Quick Links">
          <div className="space-y-3">
            {renderLinks(footerLinks.quickLinks, true)}
          </div>
        </Section>

        {/* Services */}
        <Section title="Our Services">
          <div className="space-y-3">{renderLinks(footerLinks.services)}</div>
        </Section>

        {/* Contact */}
        <Section title="Contact Us">
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="mt-1">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </a>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Need Help?</h3>
          <p className="text-gray-400 text-sm">
            Available 24/7 for emergency AC repairs
          </p>
          <a
            href={`tel:${contactInfo.mobile1.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      </div>

      {/* ================= TABLET ================= */}
      <div className="hidden md:grid lg:hidden max-w-7xl mx-auto px-6 py-12 grid-cols-3 gap-8">
        {/* Brand */}
        <div className="col-span-3 lg:col-span-1 mb-4">
          <img
            src={logo.icon}
            alt={logo.altName}
            className="h-14 object-contain mb-4"
          />
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Professional AC services across Mumbai.
          </p>
          <div className="flex gap-3">{renderSocial("w-9 h-9")}</div>
        </div>

        {/* Quick Links */}
        <Section title="Quick Links">
          <div className="space-y-2">
            {renderLinks(footerLinks.quickLinks, true)}
          </div>
        </Section>

        {/* Services */}
        <Section title="Services">
          <div className="space-y-2">{renderLinks(footerLinks.services)}</div>
        </Section>

        {/* Contact */}
        <Section title="Contact">
          <div className="space-y-2">
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                {item.icon}
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </Section>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6 py-8">
        <div className="text-center mb-8">
          <img
            src={logo.icon}
            alt={logo.altName}
            className="h-14 object-contain mx-auto mb-4"
          />
          <div className="flex justify-center gap-3 mb-4">
            {renderSocial("w-9 h-9")}
          </div>
        </div>

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
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex gap-2 text-gray-300 hover:text-white text-sm transition-colors duration-300"
            >
              {item.icon}
              <span>{item.text}</span>
            </a>
          ))}
        </Accordion>

        <a
          href={`tel:${contactInfo.mobile1.replace(/\s+/g, "")}`}
          className="btn-primary flex justify-center items-center gap-5"
        >
          <FaPhoneAlt />
          Call Now - 24/7 Available
        </a>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-gray-900/50 text-center py-6 text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Platinum Group. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ================= SECTION ================= */

const Section = memo(({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    {children}
  </div>
));

/* ================= ACCORDION ================= */

const Accordion = memo(({ title, id, active, toggle, children }) => {
  const open = active === id;

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => toggle(id)}
        aria-expanded={open}
        className="w-full flex justify-between items-center font-semibold text-white"
      >
        {title}

        <FaChevronDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-2 text-sm flex flex-col pb-2">{children}</div>
      </div>
    </div>
  );
});

export default Footer;
