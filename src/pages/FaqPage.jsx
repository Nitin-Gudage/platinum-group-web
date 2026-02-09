"use client";

import React, { useState, useMemo, useCallback, memo } from "react";

import Animate from "../utils/Animate";
import { Link } from "react-router-dom";

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
      {
        q: "Do you provide emergency services?",
        a: "Yes, we offer 24/7 emergency AC repair services.",
      },
      {
        q: "Are your technicians certified?",
        a: "All our technicians are trained and certified.",
      },
      {
        q: "Do you provide warranty?",
        a: "Yes, we provide service warranty on all repairs.",
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
      {
        q: "Do you refill AC gas?",
        a: "Yes, we provide professional gas refilling services.",
      },
      {
        q: "How long does servicing take?",
        a: "Usually 60–90 minutes depending on condition.",
      },
    ],
  },
];

/* ================= ACCORDION ITEM ================= */

const AccordionItem = memo(({ item, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg bg-white/90 overflow-hidden shadow-sm">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="
            w-full flex justify-between items-center
            p-4 font-medium text-left
            hover:bg-blue-50 transition
          "
      >
        {item.q}

        <span
          className={`
              text-xl transition-transform
              ${isOpen ? "rotate-45" : ""}
            `}
        >
          +
        </span>
      </button>

      <div
        className={`
            overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-40" : "max-h-0"}
          `}
      >
        {isOpen && (
          <Animate>
            <div className="px-4 pb-4 text-gray-600 text-sm">{item.a}</div>
          </Animate>
        )}
      </div>
    </div>
  );
});

/* ================= MAIN WRAPPER ================= */

const FaqPage = ({ isHome = false }) => {
  return isHome ? <Home /> : <Mainpage />;
};

export default FaqPage;

/* ================= FULL PAGE ================= */

const Mainpage = () => {
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
          item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q),
      ),
    }));
  }, [search]);

  /* ================= TOGGLE ================= */

  const toggle = useCallback((key) => {
    setActive((prev) => (prev === key ? null : key));
  }, []);

  return (
    <section className="w-full ">
      {/* ================= HERO ================= */}

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-20 items-center">
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
              placeholder="Search questions..."
              aria-label="Search FAQs"
              className="
                flex-1 px-4 py-3
                outline-none text-sm
              "
            />

            <button type="button" className="bg-blue-600 text-white px-5">
              🔍
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
          <img
            src="https://images.unsplash.com/flagged/photo-1558963675-94dc9c4a66a9"
            alt="FAQ Support"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ================= FAQ GRID ================= */}

      <div className="max-w-7xl mx-auto px-6 pt-10 grid md:grid-cols-3 gap-10">
        {/* FAQ */}
        <div className="md:col-span-2">
          {filteredFaqs.map((group) => (
            <div key={group.section} className="mb-12">
              <h2 className="text-2xl font-semibold mb-5">{group.section}</h2>

              <div className="flex flex-col gap-3">
                {group.items.map((item, index) => {
                  const key = `${group.section}-${index}`;

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
            </div>
          ))}
        </div>

        {/* ================= SIDEBAR ================= */}

        <aside className="bg-white rounded-xl shadow p-6 h-fit sticky top-24">
          <h3 className="text-xl font-semibold mb-3">Need More Assistance?</h3>

          <p className="text-gray-600 mb-5">
            Contact our support team anytime.
          </p>

          <p>📞 +91 98765 43210</p>
          <p>✉️ support@example.com</p>

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
        </aside>
      </div>
    </section>
  );
};

/* ================= HOME ================= */

const Home = () => {
  const [active, setActive] = useState(null);

  /* Limit items */
  const homeFaqs = useMemo(
    () =>
      faqs.map((group) => ({
        ...group,
        items: group.items.slice(0, 4),
      })),
    [],
  );

  const toggle = useCallback((key) => {
    setActive((prev) => (prev === key ? null : key));
  }, []);

  return (
    <section className="container text-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>

      <p className="text-gray-600 mb-6">
        Find answers to your most common questions below.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {homeFaqs.map((group) => (
          <div key={group.section}>
            <h3 className="text-xl font-semibold mb-4">{group.section}</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {group.items.map((item, index) => {
                const key = `${group.section}-${index}`;

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
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="mt-8 text-center">
        <Link
          to="/faq"
          className="
            text-blue-600 font-medium
            hover:underline
          "
        >
          View All FAQs →
        </Link>
      </div>
    </section>
  );
};
