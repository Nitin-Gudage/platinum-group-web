"use client";

import { useMemo, useState, useEffect } from "react";
import { testimonials } from "../Data/Data";
import { Animate, AnimateGroup } from "../utils/Animate";
import useSEO from "../utils/SeoComponents/useSEO";
import { Link } from "react-router-dom";

/* ================= GRID ================= */

const getRows = (data, isMobile) => {
  if (isMobile)
    return data.reduce(
      (acc, _, i) => (i % 2 === 0 ? [...acc, data.slice(i, i + 2)] : acc),
      [],
    );

  const rows = [];
  let i = 0,
    three = true;

  while (i < data.length) {
    const size = three ? 3 : 2;
    rows.push(data.slice(i, i + size));
    i += size;
    three = !three;
  }

  return rows;
};

/* ================= CARD ================= */

const TestimonialCard = ({ item }) => (
  <Animate
    delay={0.1}
    className="bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-500 w-full sm:w-[45%] lg:w-[30%]"
  >
    {/* Quote Icon */}
    <div className="mb-3">
      <svg
        className="w-6 h-6 text-blue-200"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
      </svg>
    </div>

    {/* Review */}
    <p className="text-gray-600 italic mb-4 leading-relaxed text-sm">
      "{item.review}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
      <div className="relative">
        <img
          src={item.image}
          alt={`${item.name} customer review`}
          loading="lazy"
          decoding="async"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
        />

        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
      </div>

      <div>
        <h3 className="font-semibold text-sm text-secondary">{item.name}</h3>

        <p className="text-xs text-gray-500">{item.position}</p>
      </div>
    </div>
  </Animate>
);

/* ================= MAIN ================= */

const Testimonials = () => {
  /* SEO */

  // useSEO({
  //   title: "Customer Reviews | Best AC Service in India | Platinum Group",
  //   description:
  //     "Read verified customer reviews about our AC repair, installation, and HVAC services across India.",
  // });

  /* ================= REVIEW SCHEMA ================= */

  useEffect(() => {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Platinum Group AC Services",

      review: testimonials.map((t) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: t.name,
        },
        reviewBody: t.review,
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      })),

      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: testimonials.length,
      },
    };

    const old = document.getElementById("review-schema");

    if (old) old.remove();

    const script = document.createElement("script");
    script.id = "review-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(reviewSchema);

    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  /* ================= RESPONSIVE ================= */

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const limited = useMemo(
    () => (isMobile ? testimonials.slice(0, 4) : testimonials.slice(0, 8)),
    [isMobile],
  );

  const rows = useMemo(() => getRows(limited, isMobile), [limited, isMobile]);

  return (
    <section aria-label="Customer Reviews" className="pt-10">
      <Animate>
        <div className="container text-center mb-8">
          <h2 className="section-title">Customer Reviews Across India</h2>

          <p className="section-subtitle mt-2">
            Trusted AC & HVAC Service Provider
          </p>
        </div>
      </Animate>

      <AnimateGroup className="container px-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className="flex justify-center gap-4 flex-wrap md:flex-nowrap mb-4"
          >
            {row.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        ))}
      </AnimateGroup>

      <div className="container text-center mt-6">
        <Link
          to="/contact"
          className="border border-gray-300 p-2 w-60 justify-around rounded-lg mb-5 inline-flex items-center gap-2 text-sm"
        >
          {" "}
          Share Your Experience{" "}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />{" "}
          </svg>{" "}
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
