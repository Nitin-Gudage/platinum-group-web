"use client";

import React, { useState, useMemo } from "react";
import Animate from "../utils/Animate";

/* ================= FAQ DATA ================= */

const faqs = [
  {
    section: "General Questions",
    items: [
      {
        q: "What areas do you service?",
        a: "We provide services across major nearby cities and suburbs.",
      },
      {
        q: "How soon can I get an appointment?",
        a: "We usually provide same-day or next-day appointments.",
      },
    ],
  },
  {
    section: "Service Questions",
    items: [
      {
        q: "What types of AC units do you service?",
        a: "We service split, window, ductable, and central AC units.",
      },
      {
        q: "How do I maintain my AC?",
        a: "Clean filters regularly and schedule servicing every 6 months.",
      },
      {
        q: "What is included in routine service?",
        a: "Inspection, cleaning, gas check, and performance testing.",
      },
    ],
  },
];

/* ================= ACCORDION ITEM ================= */

function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div className="border rounded-lg bg-white/90 mb-3 overflow-hidden shadow-sm">

      {/* Header */}
      <button
        onClick={onClick}
        className="
          w-full flex justify-between items-center
          p-4 font-medium text-left
          hover:bg-blue-50 transition
        "
      >
        {item.q}

        {/* Icon */}
        <span
          className={`
            text-xl transition-transform
            ${isOpen ? "rotate-45" : ""}
          `}
        >
          +
        </span>
      </button>

      {/* Body */}
      {isOpen && (
        <Animate>
          <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
            {item.a}
          </div>
        </Animate>
      )}
    </div>
  );
}

/* ================= MAIN PAGE ================= */

export default function FaqPage() {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  /* ================= FILTER ================= */

  const filteredFaqs = useMemo(() => {
    if (!search.trim()) return faqs;

    const q = search.toLowerCase();

    return faqs.map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          item.q.toLowerCase().includes(q) ||
          item.a.toLowerCase().includes(q)
      ),
    }));
  }, [search]);

  /* ================= TOGGLE ================= */

  const toggle = (key) => {
    setActive((prev) => (prev === key ? null : key));
  };

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-blue-100">

      {/* ================= HERO ================= */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-20 items-center">

        {/* Left */}
        <div>

          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 mb-6">
            Find answers to your most common questions below.
          </p>

          {/* Search */}
          <div className="flex rounded-lg border bg-white overflow-hidden shadow-sm">

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search questions..."
              className="flex-1 px-4 py-3 outline-none text-sm"
            />

            <button className="bg-blue-600 text-white px-5">
              🔍
            </button>

          </div>

        </div>

        {/* Hero Image */}
        <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow">

          <img
            src="https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9"
            alt="FAQ Support"
            loading="lazy"
            className="w-full h-full object-cover"
          />

        </div>

      </div>

      {/* ================= FAQ ================= */}

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">

        {/* FAQ Column */}
        <div className="md:col-span-2">

          {filteredFaqs.map((group, i) => (
            <div key={i} className="mb-10">

              <h2 className="text-2xl font-semibold mb-5">
                {group.section}
              </h2>

              {group.items.length === 0 && (
                <p className="text-gray-500">
                  No results found.
                </p>
              )}

              {group.items.map((item, index) => {
                const key = `${i}-${index}`;

                return (
                  <AccordionItem
                    key={key}
                    item={item}
                    isOpen={active === key}
                    onClick={() => toggle(key)}
                  />
                );
              })}

            </div>
          ))}

        </div>

        {/* ================= CONTACT ================= */}

        <div className="bg-white rounded-xl shadow p-6 h-fit sticky top-24">

          <h3 className="text-xl font-semibold mb-3">
            Need More Assistance?
          </h3>

          <p className="text-gray-600 mb-5">
            Contact our support team anytime.
          </p>

          <div className="space-y-3 text-sm text-gray-700">
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@example.com</p>
          </div>

          <button
            className="
              mt-6 w-full
              bg-blue-600 text-white
              py-3 rounded-lg
              hover:bg-blue-700 transition
            "
          >
            Start Live Chat
          </button>

        </div>

      </div>

      {/* ================= CTA ================= */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">

        {/* CTA Image */}
        <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow">

          <img
            src="https://images.unsplash.com/photo-1581091012184-5c2d1c0d1c45"
            alt="Support Team"
            loading="lazy"
            className="w-full h-full object-cover"
          />

        </div>

        {/* CTA */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h3 className="text-2xl font-bold mb-3">
            Didn’t find your answer?
          </h3>

          <p className="text-gray-600 mb-6">
            Our team will contact you quickly.
          </p>

          <button
            className="
              bg-yellow-400 text-black
              px-6 py-3 rounded-lg
              font-medium
              hover:bg-yellow-500 transition
            "
          >
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}
