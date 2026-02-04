"use client";

import React from "react";
import { useForm } from "react-hook-form";

import WhyChoose from "../components/WhyChoose";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { footerLinks } from "../Data/Data";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Submit Handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // Optional: Reset form after submit
    reset();
  };

  return (
    <div className="max-w-full md:container">
      {/* ================= HERO ================= */}
      <section className="bg-white  py-10 text-center">
        <h1 className="text-4xl font-bold text-primary pb-5">Contact Us</h1>

        <p className="text-gray-600 max-w-3xl mx-auto px-5 mb-16 ">
          Get in touch for all your HVAC service needs.
        </p>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {/* LEFT: INFO + MAP */}
          <div className="flex flex-col h-full">
            <h2 className="subheading text-primary py-4">
              Contact Information
            </h2>

            <ul className="space-y-4 text-gray-700 mb-6">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <span>{footerLinks.contact[1].title}</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-600" />
                <span>{footerLinks.contact[2].title}</span>
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-600" />
                <span>{footerLinks.contact[0].title}</span>
              </li>
            </ul>

            {/* Map */}
            <div className="flex-1 rounded-xl  overflow-hidden shadow">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Pune,India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full md:h-full h-[35vh] border-0"
              />
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Phone */}
              {/* Phone */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  {...register("phone", {
                    required: "Phone is required",

                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter valid 10 digit number",
                    },
                  })}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, "");
                  }}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",

                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <input
                  type="text"
                  placeholder="Preferred Service"
                  {...register("service", {
                    required: "Service is required",
                  })}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* Meeting */}
              <div>
                <select
                  {...register("meeting", {
                    required: "Please select meeting type",
                  })}
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Meeting</option>
                  <option value="online">Online</option>
                  <option value="office">Office</option>
                  <option value="home">Home Visit</option>
                </select>

                {errors.meeting && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.meeting.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
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
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <WhyChoose />

      {/* ================= TEAM ================= */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Meet Our Team
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-2">
          {[
            { name: "John K." },
            { name: "Banny M." },
            { name: "Jett Peam" },
            { name: "Sunny S." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow text-center p-3">
              <img
                src="https://i.pravatar.cc/300"
                alt={item.name}
                className="w-full h-40 md:h-56 object-cover rounded-lg mb-4"
              />

              <h3 className="font-semibold">{item.name}</h3>

              <p className="subtext">HVAC Technician</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
