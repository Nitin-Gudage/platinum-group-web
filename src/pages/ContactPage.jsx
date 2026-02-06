"use client";

import React from "react";
import { useForm } from "react-hook-form";

import WhyChoose from "../components/WhyChoose";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { footerLinks } from "../Data/Data";
import contactHero from "../assets/contactpage/contact-hero.png";
import ImageOverlay from "../utils/ImageOverlay";

/* ================= Reusable Styles ================= */

const inputStyle =
  "w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500";

const errorStyle = "text-red-500 text-sm mt-1";

/* ================= Reusable Field ================= */

const Field = ({ children, error }) => (
  <div>
    {children}
    {error && <p className={errorStyle}>{error}</p>}
  </div>
);

/* ================= Main ================= */

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div>
      {/* ================= HERO ================= */}
      <ImageOverlay image={contactHero} className="h-[30vh] md:h-[80vh]">
        <h1 className="text-5xl md:text-7xl font-bold text-primary md:mb-4">
          Contact Us
        </h1>

        <p className="text-primary text-lg md:text-2xl max-w-xl">
          Get in touch for all your HVAC service needs.
        </p>
      </ImageOverlay>

      {/* ================= CONTACT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT */}
          <aside className="flex flex-col bg-white rounded-2xl p-8">
            <div className="py-10 md:py-5">
              <div className="py-5">
                <h2 className="text-3xl font-bold py-2 text-primary ">
                  Have an Urgent Issue?
                </h2>
                <p className="subtext text-lg text-gray-500">
                  Call us directly for immediate assistance:
                </p>
              </div>
              <ul className="space-y-4 text-gray-700 mb-6">
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-600" />
                  {footerLinks.contact[1].title}
                </li>

                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-600" />
                  {footerLinks.contact[2].title}
                </li>

                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-red-600" />
                  {footerLinks.contact[0].title}
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="flex-1 rounded-xl overflow-hidden shadow">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Pune,India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[35vh] md:h-full border-0"
              />
            </div>
          </aside>

          {/* RIGHT - FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Phone */}
              <Field error={errors.phone?.message}>
                <input
                  type="tel"
                  placeholder="Phone"
                  inputMode="numeric"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter valid 10 digit number",
                    },
                  })}
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/\D/g, ""))
                  }
                  className={inputStyle}
                />
              </Field>

              {/* Email */}
              <Field error={errors.email?.message}>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter valid email",
                    },
                  })}
                  className={inputStyle}
                />
              </Field>

              {/* Service */}
              <Field error={errors.service?.message}>
                <input
                  type="text"
                  placeholder="Preferred Service"
                  {...register("service", {
                    required: "Service is required",
                  })}
                  className={inputStyle}
                />
              </Field>

              {/* Meeting */}
              <Field error={errors.meeting?.message}>
                <select
                  {...register("meeting", {
                    required: "Select meeting type",
                  })}
                  className={inputStyle}
                >
                  <option value="">Select Meeting</option>
                  <option value="online">Online</option>
                  <option value="office">Office</option>
                  <option value="home">Home Visit</option>
                </select>
              </Field>

              {/* Message */}
              <Field error={errors.message?.message}>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Minimum 10 characters",
                    },
                  })}
                  className={inputStyle}
                />
              </Field>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full bg-blue-700 text-white py-3
                  rounded-lg font-semibold
                  hover:bg-blue-800 transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <WhyChoose />

      {/* ================= TEAM ================= */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Meet Our Team
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {["John K.", "Banny M.", "Jett Peam", "Sunny S."].map((name) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow text-center p-4"
            >
              <img
                src="https://i.pravatar.cc/300"
                alt={name}
                loading="lazy"
                className="w-full h-40 md:h-56 object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold">{name}</h3>

              <p className="subtext">HVAC Technician</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
