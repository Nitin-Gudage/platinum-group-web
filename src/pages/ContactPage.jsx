"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import WhyChoose from "../components/WhyChoose";
import ImageOverlay from "../utils/ImageOverlay";
import Animate from "../utils/Animate";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";

import { contactInfo } from "../Data/Data";
import contactHero from "/images/contactpage/contact-hero.png";

import { sendContactQuery, resetStatus } from "../store/features/contactSlice";
import BookServiceMobile from "../components/BookServiceMobile";

/* ================= Styles ================= */

const inputStyle = "input-text";

const error_style = "error-text";

/* ================= Field ================= */

const Field = ({ error, children }) => (
  <div>
    {children}
    {error && <p className={error_style}>{error}</p>}
  </div>
);

/* ================= Main ================= */

const ContactPage = () => {
  const dispatch = useDispatch();

  const { status, success, error } = useSelector((s) => s.contact);

  /* ================= FORM ================= */

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  /* ================= SUBMIT ================= */

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

  /* ================= RESET & ERROR HANDLING ================= */

  useEffect(() => {
    if (success) {
      toast.success("Message sent successfully! We'll get back to you soon.", {
        autoClose: 5000,
      });
      reset();
      const timer = setTimeout(() => {
        dispatch(resetStatus());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch, reset]);

  useEffect(() => {
    if (error) {
      toast.error(`Failed to send message: ${error}`);
    }
  }, [error]);

  /* ================= ADDRESS ================= */

  const fullAddress = `${contactInfo.address.street}, 
  ${contactInfo.address.city}, 
  ${contactInfo.address.state} - ${contactInfo.address.pincode}`;

  return (
    <div className="pt-[72px] md:pt-[88px]">
      {/* ================= HERO ================= */}

      <ImageOverlay image={contactHero}>
        <div className="relative z-10 text-left">
          <h1 className="heading-1 mb-4">Contact Us</h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            Get in touch for all your HVAC service needs
          </p>
        </div>
      </ImageOverlay>

      {/* ================= CONTACT ================= */}

      <section className="container py-16">
        <div className="grid lg:grid-cols-2 gap-10 h-full">
          {/* ================= LEFT ================= */}

          <Animate>
            <aside className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg h-full flex flex-col">
              <div className="mb-8">
                <h2 className="heading-3 mb-2">Have an Urgent Issue?</h2>
                <p className="text-secondary">
                  Call us directly for immediate assistance
                </p>
              </div>

              {/* Contact Info */}
              <ul className="space-y-5 mb-8">
                {/* Phone */}
                <li className="flex gap-4 items-center p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                  <span className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      Phone
                    </p>
                    <a
                      href={`tel:${contactInfo.mobile}`}
                      className="text-lg font-semibold text-secondary hover:text-blue-600 transition-colors"
                    >
                      {contactInfo.mobile}
                    </a>
                  </div>
                </li>

                {/* Email */}
                <li className="flex gap-4 items-center p-4 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors duration-300">
                  <span className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/25">
                    <FaEnvelope />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg font-semibold text-secondary hover:text-blue-600 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </li>

                {/* Address */}
                <li className="flex gap-4 items-center p-4 rounded-xl bg-red-50 hover:bg-red-100 transition-colors duration-300">
                  <span className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/25">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      Address
                    </p>
                    <p className="text-lg font-semibold text-secondary">
                      {fullAddress}
                    </p>
                  </div>
                </li>
              </ul>

              {/* ================= MAP ================= */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4681421343485!2d73.8763177!3d18.5077353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c041fca35a4d%3A0xbd31aa31bd87b266!2sPLATINUM%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1770799700265!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Platinum Enterprises Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </aside>
          </Animate>

          {/* ================= RIGHT ================= */}

          <Animate delay={0.2}>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg h-full flex flex-col">
              <h2 className="heading-3 mb-2">Send Us a Message</h2>
              <p className="text-secondary mb-8">
                Fill out the form below and we'll get back to you shortly
              </p>

              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
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
                    placeholder="Phone Number"
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
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email is required",
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
                    className={`${inputStyle} resize-none`}
                  />
                </Field>

                {/* Submit */}
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
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
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </Animate>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <WhyChoose />
    </div>
  );
};

export default ContactPage;
