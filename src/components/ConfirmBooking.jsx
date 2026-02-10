import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../store/features/bookingSlice";
import { BsCheckCircle, BsClock, BsShieldCheck } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../Data/Data";

const ConfirmBooking = ({ serviceId, serviceItem, onClose }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((s) => s.booking);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      address: "",
      message: "",
    },
  });

  const benefits = [
    { icon: BsShieldCheck, text: "Professional Service" },
    { icon: BsClock, text: "Quick Response" },
    { icon: BsCheckCircle, text: "100% Satisfaction" },
  ];

  const getInputClass = (field) =>
    `w-full px-3 py-2.5 rounded-lg bg-gray-50 border transition-all outline-none text-sm ${
      errors[field] && touchedFields[field]
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    }`;

  const getErrorMsg = (field) =>
    errors[field]?.touchedFields && errors[field]?.message;

  const handleBooking = (onSuccess) => {
    const payload = {
      customer_name: "",
      email: "",
      mobile: "",
      address: "",
      message: "",
      selected_service_id: serviceId,
    };
    dispatch(createBooking(payload)).then((result) => {
      if (createBooking.fulfilled.match(result)) {
        const bookingId = result.payload?.id || "N/A";
        const featuresMsg =
          serviceItem?.service_features
            ?.map((f, i) => `${i + 1}. ${f.title}`)
            .join("%0A") || "";
        const message = `*New Booking Request*%0A%0A*Booking ID:* ${bookingId}%0A*Service:* ${serviceItem?.name || "N/A"}%0A*Price:* ₹${serviceItem?.price || "N/A"}%0A%0A*Service Features:*%0A${featuresMsg}`;
        onSuccess(message);
      }
      if (onClose) onClose();
    });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Half - Service Details */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 lg:p-8 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3"></div>

          {serviceItem && (
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-white/20 rounded-full text-blue-100 text-xs font-medium uppercase tracking-wide">
                  {serviceItem.category || "AC Service"}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-4">
                Service Details
              </h2>

              {/* Service Header */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 border-3 border-white/30 shadow-xl">
                  <img
                    src={serviceItem.image}
                    alt={serviceItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {serviceItem.name}
                  </h3>
                  {serviceItem.rating && (
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white text-sm font-medium">
                        {serviceItem.rating}
                      </span>
                      <span className="text-blue-200 text-sm">
                        (120+ bookings)
                      </span>
                    </div>
                  )}
                  {serviceItem.price && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">
                        ₹{serviceItem.price}
                      </span>
                      {serviceItem.originalPrice && (
                        <span className="text-blue-300 line-through text-sm">
                          ₹{serviceItem.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {serviceItem.description && (
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {serviceItem.description}
                  </p>
                </div>
              )}

              {/* Service Features */}
              {serviceItem.service_features?.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-3">
                    What's Included
                  </h4>
                  <div className="bg-white/10 rounded-xl p-4 space-y-2">
                    {serviceItem.service_features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-white"
                      >
                        <BsCheckCircle
                          className="text-green-400 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm">{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              <div>
                <h4 className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-3">
                  Why Choose Us
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-lg p-3 text-center"
                    >
                      <benefit.icon
                        className="text-green-400 mx-auto mb-2"
                        size={20}
                      />
                      <span className="text-xs text-blue-100">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Half - Form */}
        <div className="p-6 lg:p-8 bg-white">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Book Your Service
          </h2>
          <form
            onSubmit={handleSubmit((data) => {
              const payload = {
                customer_name: data.name,
                email: data.email,
                mobile: data.mobile,
                address: data.address,
                message: data.message,
                selected_service_id: serviceId,
              };
              dispatch(createBooking(payload)).then((result) => {
                if (createBooking.fulfilled.match(result))
                  alert(
                    `Booking Submitted Successfully!\n\nBooking ID: ${result.payload?.id || "N/A"}`,
                  );
                if (onClose) onClose();
              });
            })}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 6,
                      message: "Name must be at least 6 characters",
                    },
                  })}
                  className={getInputClass("name")}
                />
                {getErrorMsg("name") && (
                  <p className="text-red-500 text-xs mt-1">
                    {getErrorMsg("name")}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={getInputClass("email")}
                />
                {getErrorMsg("email") && (
                  <p className="text-red-500 text-xs mt-1">
                    {getErrorMsg("email")}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                Phone *
              </label>
              <input
                type="tel"
                placeholder="9876543210"
                {...register("mobile", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number",
                  },
                })}
                className={getInputClass("mobile")}
              />
              {getErrorMsg("mobile") && (
                <p className="text-red-500 text-xs mt-1">
                  {getErrorMsg("mobile")}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                Address *
              </label>
              <textarea
                placeholder="Complete address..."
                {...register("address", {
                  required: "Address is required",
                  minLength: {
                    value: 10,
                    message: "Address must be at least 10 characters",
                  },
                })}
                className={getInputClass("address")}
                rows={2}
              />
              {getErrorMsg("address") && (
                <p className="text-red-500 text-xs mt-1">
                  {getErrorMsg("address")}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                Message <span className="text-gray-400">(Optional)</span>
              </label>
              <textarea
                placeholder="Additional notes..."
                {...register("message")}
                className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-sm resize-none"
                rows={2}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {status === "loading" ? "Processing..." : "Book Now"}
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">
                Or
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <button
              type="button"
              onClick={() =>
                handleBooking((message) =>
                  window.open(
                    `https://wa.me/${contactInfo.whatsapp}?text=${message}`,
                    "_blank",
                  ),
                )
              }
              className="w-full py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              Send booking details on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
