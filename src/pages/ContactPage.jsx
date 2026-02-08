"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import WhyChoose from "../components/WhyChoose";
import ImageOverlay from "../utils/ImageOverlay";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import { footerLinks } from "../Data/Data";
import contactHero from "../assets/contactpage/contact-hero.png";

import { sendContactQuery, resetStatus } from "../store/features/contactSlice";

/* ================= Styles ================= */

const inputStyle =
  "w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500";

const errorStyle = "text-red-500 text-sm mt-1";

/* ================= Field ================= */

const Field = ({ error, children }) => (
  <div>
    {children}
    {error && <p className={errorStyle}>{error}</p>}
  </div>
);

/* ================= Main ================= */

const ContactPage = () => {
  const dispatch = useDispatch();

  const { status, success, error } = useSelector((s) => s.contact);

  /* React Hook Form */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched", // ✅ validate after touch
    reValidateMode: "onChange", // ✅ fix while typing
  });

  /* Submit */
  const onSubmit = (data) => {
    dispatch(
      sendContactQuery({
        name: data.name,
        phone: data.phone,
        email: data.email,
        service_name: data.service,
        message: data.message,
      }),
    );
  };

  /* Reset on success */
  useEffect(() => {
    if (success) {
      reset();

      setTimeout(() => {
        dispatch(resetStatus());
      }, 3000);
    }
  }, [success, dispatch, reset]);

  return (
    <>
      {/* ================= HERO ================= */}

      <ImageOverlay image={contactHero} className="h-[30vh] md:h-[80vh]">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-3">
          Contact Us
        </h1>

        <p className="text-primary text-lg md:text-2xl max-w-xl">
          Get in touch for all your HVAC service needs.
        </p>
      </ImageOverlay>

      {/* ================= CONTACT ================= */}

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT INFO */}

          <aside className="bg-white rounded-2xl p-8 flex flex-col">
            <h2 className="text-3xl font-bold text-primary mb-2">
              Have an Urgent Issue?
            </h2>

            <p className="text-gray-500 mb-5">
              Call us directly for immediate assistance
            </p>

            <ul className="space-y-4 text-gray-700 mb-6">
              <li className="flex gap-3 items-center">
                <FaPhoneAlt className="text-blue-600" />
                {footerLinks.contact[1].title}
              </li>

              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-yellow-600" />
                {footerLinks.contact[2].title}
              </li>

              <li className="flex gap-3 items-center">
                <FaMapMarkerAlt className="text-red-600" />
                {footerLinks.contact[0].title}
              </li>
            </ul>

            {/* Map */}

            <div className="flex-1 rounded-xl overflow-hidden shadow">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Pune,India&t=&z=15&output=embed"
                className="w-full h-full border-0"
              />
            </div>
          </aside>

          {/* RIGHT FORM */}

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}

              <Field error={errors.name?.message}>
                <input
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Minimum 2 characters",
                    },
                  })}
                  className={inputStyle}
                />
              </Field>

              {/* Phone */}

              <Field error={errors.phone?.message}>
                <input
                  type="tel"
                  placeholder="Phone"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter 10 digit number",
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
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  })}
                  className={inputStyle}
                />
              </Field>

              {/* Service */}

              <Field error={errors.service?.message}>
                <input
                  placeholder="Preferred Service"
                  {...register("service", {
                    required: "Service is required",
                  })}
                  className={inputStyle}
                />
              </Field>

              {/* Message */}

              <Field error={errors.message?.message}>
                <textarea
                  rows="4"
                  placeholder="Your Message (Optional)"
                  {...register("message", {
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
                disabled={status === "loading"}
                type="submit"
                className="
                  w-full bg-blue-700 text-white py-3
                  rounded-lg font-semibold
                  hover:bg-blue-800 transition
                  disabled:opacity-60
                "
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {/* Status */}

              {success && (
                <p className="text-green-600 text-center font-medium">
                  ✅ Message sent successfully
                </p>
              )}

              {error && (
                <p className="text-red-600 text-center font-medium">
                  ❌ {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <WhyChoose />
    </>
  );
};

export default ContactPage;
