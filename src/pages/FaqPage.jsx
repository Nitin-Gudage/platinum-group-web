"use client";

import { useState, useMemo, useCallback, memo } from "react";

import Animate from "../utils/Animate";
import { Link } from "react-router-dom";
import { faqs } from "../Data/Data";
import { HiSearch, HiPhone, HiMail, HiPlus, HiMinus } from "react-icons/hi";

/* ================= ACCORDION ITEM ================= */

const AccordionItem = memo(({ item, isOpen, onClick }) => {
  return (
    <div className="border border-gray-100 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="
          w-full flex justify-between items-center
          p-5 font-medium text-left
          hover:bg-blue-50 transition-all duration-300
          text-secondary
        "
      >
        <span className="pr-4">{item.q}</span>

        <span
          className={`
            flex items-center justify-center
            w-8 h-8 rounded-full
            transition-all duration-300
            ${isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"}
          `}
        >
          {isOpen ? (
            <HiMinus className="w-4 h-4" />
          ) : (
            <HiPlus className="w-4 h-4" />
          )}
        </span>
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-400 ease-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {isOpen && (
          <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
            {item.a}
          </div>
        )}
      </div>
    </div>
  );
});

/* ================= WRAPPER ================= */

const FaqPage = ({ isHome = false }) => {
  return isHome ? <HomeFaq /> : <MainPage />;
};

export default FaqPage;

/* ================= MAIN FAQ PAGE ================= */

const MainPage = () => {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  /* Filter + Limit 4 */
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

    /* Limit 4 per section */
    return data.map((group) => ({
      ...group,
      items: group.items.slice(0, 4),
    }));
  }, [search]);

  const toggle = useCallback((key) => {
    setActive((prev) => (prev === key ? null : key));
  }, []);

  return (
    <section className="w-full pt-[88px]">
      {/* HERO */}
      <div className="container py-16">
        <Animate>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find answers to your most common questions about our AC services
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
              placeholder="Search questions..."
              aria-label="Search FAQs"
              className="
                w-full pl-12 pr-4 py-4
                rounded-2xl
                border border-gray-200
                bg-white
                shadow-md
                outline-none
                text-base
                focus:border-blue-300
                focus:ring-4 focus:ring-blue-100
                transition-all duration-300
              "
            />
          </div>
        </div>

        {/* FAQ GRID */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            {filteredFaqs.map((group) => (
              <div key={group.section} className="mb-10">
                <h2 className="text-2xl font-bold text-secondary mb-6 pb-2 border-b border-gray-200">
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

          {/* SIDEBAR */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-28">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Need More Assistance?
              </h3>

              <p className="text-gray-600 mb-6">
                Our support team is available 24/7 to help you with any
                questions.
              </p>

              <div className="space-y-5 mb-8">
                <a
                  href="tel:9876543210"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <HiPhone className="w-6 h-6" />
                  </span>
                  <span className="text-lg font-medium">+91 98765 43210</span>
                </a>
                <a
                  href="mailto:support@platinumgroup.com"
                  className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <HiMail className="w-6 h-6" />
                  </span>
                  <span className="text-lg font-medium">
                    support@platinumgroup.com
                  </span>
                </a>
              </div>

              <Link
                to="/contact"
                className="
                  block w-full text-center
                  bg-gradient-to-r from-blue-600 to-blue-700 text-white
                  py-4 rounded-xl
                  font-semibold
                  hover:from-blue-700 hover:to-blue-800
                  transition-all duration-300
                  shadow-lg shadow-blue-500/25
                "
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

  /* Only selected sections + 4 items */
  const homeFaqs = useMemo(() => {
    const allowed = ["General Questions", "Service & Repair Questions"];

    return faqs
      .filter((group) => allowed.includes(group.section))
      .map((group) => ({
        ...group,
        items: group.items.slice(0, 2),
      }));
  }, []);

  const toggle = useCallback((key) => {
    setActive((prev) => (prev === key ? null : key));
  }, []);

  return (
    <section className="container py-16">
      <Animate>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Quick answers about our services
          </p>
        </div>
      </Animate>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {homeFaqs.map((group) => (
          <div key={group.section}>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              {group.section}
            </h3>

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

      {/* View All */}
      <div className="text-center mt-10">
        <Link
          to="/faq"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
        >
          View All FAQs
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};
