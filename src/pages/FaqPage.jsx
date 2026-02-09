"use client";

import { useState, useMemo, useCallback, memo } from "react";

import Animate from "../utils/Animate";
import { Link } from "react-router-dom";
import { faqs } from "../Data/Data";

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

/* ================= WRAPPER ================= */

const FaqPage = ({ isHome = false }) => {
  return isHome ? <Home /> : <MainPage />;
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
    <section className="w-full">
      {/* HERO */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-20 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 mb-6">
            Find answers to your most common questions.
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

      {/* FAQ GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-10 grid md:grid-cols-3 gap-10">
        {/* FAQ List */}
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

        {/* SIDEBAR */}
        <aside className="bg-white rounded-xl shadow p-6 h-fit sticky top-24">
          <h3 className="text-xl font-semibold mb-3">Need More Assistance?</h3>

          <p className="text-gray-600 mb-5">
            Contact our support team anytime.
          </p>

          <p>📞 +91 98765 43210</p>
          <p>✉️ support@example.com</p>

          <Link
            to="/contact"
            className="
              block mt-6 w-full text-center
              bg-blue-600 text-white
              py-3 rounded-lg
              hover:bg-blue-700 transition
            "
          >
            Contact Us
          </Link>
        </aside>
      </div>
    </section>
  );
};

/* ================= HOME FAQ ================= */

const Home = () => {
  const [active, setActive] = useState(null);

  /* Only selected sections + 4 items */
  const homeFaqs = useMemo(() => {
    const allowed = ["General Questions", "Pricing & Payment Questions"];

    return faqs
      .filter((group) => allowed.includes(group.section))
      .map((group) => ({
        ...group,
        items: group.items.slice(0, 4),
      }));
  }, []);

  const toggle = useCallback((key) => {
    setActive((prev) => (prev === key ? null : key));
  }, []);

  return (
    <section className="container text-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>

      <p className="text-gray-600 mb-6">
        Quick answers about our services and pricing.
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
        <Link to="/faq" className="text-blue-600 font-medium hover:underline">
          View All FAQs →
        </Link>
      </div>
    </section>
  );
};
