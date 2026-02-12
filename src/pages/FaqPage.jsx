"use client";

import { useState, useMemo, useCallback, memo, useEffect } from "react";
import Animate from "../utils/Animate";
import { Link } from "react-router-dom";
import { faqs } from "../Data/Data";
import { HiSearch, HiPhone, HiMail, HiPlus, HiMinus } from "react-icons/hi";
import useSEO from "../utils/SeoComponents/useSEO";

/* ================= ACCORDION ITEM ================= */

const AccordionItem = memo(({ item, isOpen, onClick }) => {
  return (
    <div className="border border-gray-100 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center p-5 font-medium text-left hover:bg-blue-50 transition-all duration-300 text-secondary"
      >
        <span className="pr-4">{item.q}</span>

        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
          }`}
        >
          {isOpen ? <HiMinus /> : <HiPlus />}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {item.a}
        </div>
      )}
    </div>
  );
});

/* ================= MAIN ================= */

const FaqPage = ({ isHome = false }) => {
  return isHome ? <HomeFaq /> : <MainPage />;
};

export default FaqPage;

/* ================= MAIN PAGE ================= */

const MainPage = () => {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  /* SEO */
  useSEO({
    title: "AC FAQ India | HVAC Service Questions & Answers",
    description:
      "Find answers to common AC repair questions, HVAC maintenance FAQs, and air conditioning service queries across India.",
    ogImage: `${window.location.origin}/og/faq.jpg`,
  });

  /* ================= FAQ SCHEMA ================= */

  useEffect(() => {
    const allFaqs = faqs.flatMap((g) => g.items);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };

    const old = document.getElementById("faq-schema");

    if (old) old.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.textContent = JSON.stringify(faqSchema);

    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  /* ================= FILTER ================= */

  const filteredFaqs = useMemo(() => {
    let data = faqs;

    if (search.trim()) {
      const q = search.toLowerCase();

      data = faqs.map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.q.toLowerCase().includes(q) ||
            item.a.toLowerCase().includes(q),
        ),
      }));
    }

    return data;
  }, [search]);

  const toggle = useCallback((key) => {
    setActive((p) => (p === key ? null : key));
  }, []);

  return (
    <section className="w-full pt-[88px]">
      <div className="container py-16">
        <Animate>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              AC & HVAC Service FAQs in India
            </h1>

            <p className="text-primary max-w-2xl mx-auto">
              Common questions about AC repair, installation, maintenance, and
              HVAC services.
            </p>
          </div>
        </Animate>

        {/* Search */}

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search AC service questions..."
              className="input-text pl-12 pr-4 py-4 rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* FAQ Grid */}

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {filteredFaqs.map((group) => (
              <div key={group.section} className="mb-10">
                <h2 className="heading-3 mb-6 pb-2 border-b border-gray-200">
                  {group.section}
                </h2>

                <div className="flex flex-col gap-4">
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

          {/* Sidebar */}

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border p-8 sticky top-28">
              <h3 className="heading-4 mb-4">Need AC Support?</h3>

              <p className="text-secondary mb-6">
                Talk to our HVAC experts anytime.
              </p>

              <Link
                to="/contact"
                className="btn-primary w-full block text-center"
              >
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

/* ================= HOME FAQ ================= */

const HomeFaq = () => {
  const [active, setActive] = useState(null);

  const homeFaqs = useMemo(() => {
    const allowed = ["General Questions", "Service & Repair Questions"];

    return faqs
      .filter((g) => allowed.includes(g.section))
      .map((g) => ({
        ...g,
        items: g.items.slice(0, 2),
      }));
  }, []);

  const toggle = useCallback((key) => {
    setActive((p) => (p === key ? null : key));
  }, []);

  return (
    <section className="container py-16">
      <Animate>
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">AC Service FAQs</h2>

          <p className="text-primary max-w-2xl mx-auto">
            Quick answers to common HVAC questions.
          </p>
        </div>
      </Animate>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {homeFaqs.map((group) => (
          <div key={group.section}>
            <h3 className="heading-4 mb-4">{group.section}</h3>

            <div className="flex flex-col gap-4">
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

      <div className="text-center mt-10">
        <Link to="/faq" className="text-blue-600 font-medium hover:underline">
          View All FAQs →
        </Link>
      </div>
    </section>
  );
};
