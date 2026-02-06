"use client";

import React, { useState } from "react";

/* FAQ Data */
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

/* Accordion Item */
function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg bg-white/80 backdrop-blur mb-3 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 font-medium text-left hover:bg-blue-50 transition"
      >
        {q}

        {/* Animated Icon */}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl"
        >
          +
        </motion.span>
      </button>

      {/* Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 text-gray-600 text-sm">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Main Page */
export default function FaqPage() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-20 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600 mb-6">
            Find answers to your most common questions below.
          </p>

          <div className="flex overflow-hidden rounded-lg border">
            <input
              type="text"
              placeholder="Have questions? Search here..."
              className="flex-1 px-4 py-3 outline-none"
            />
            <button className="bg-blue-600 text-white px-5">🔍</button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="w-full h-[300px] bg-gray-300 rounded-xl flex items-center justify-center">
          <span className="text-gray-600">Image Placeholder</span>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* FAQ Column */}
        <div className="md:col-span-2">
          {faqs.map((group, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-2xl font-semibold mb-5">{group.section}</h2>

              {group.items.map((item, index) => (
                <AccordionItem key={index} q={item.q} a={item.a} />
              ))}
            </div>
          ))}
        </div>

        {/* Contact Box */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h3 className="text-xl font-semibold mb-3">Need More Assistance?</h3>

          <p className="text-gray-600 mb-5">
            If you have any other questions, feel free to contact us.
          </p>

          <div className="space-y-3 text-sm">
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@example.com</p>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Start Live Chat
          </button>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Placeholder */}
        <div className="w-full h-[280px] bg-gray-300 rounded-xl flex items-center justify-center">
          <span className="text-gray-600">Image Placeholder</span>
        </div>

        {/* Right CTA */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-3">Didn’t find the answer?</h3>

          <p className="text-gray-600 mb-6">
            Feel free to contact us, our team will reach out quickly.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
