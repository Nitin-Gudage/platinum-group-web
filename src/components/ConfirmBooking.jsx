import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../store/features/bookingSlice";
import { BsCheckCircle } from "react-icons/bs";

const ConfirmBooking = ({ serviceId, serviceItem, onClose }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((s) => s.booking);

  const {
    register,
    handleSubmit,
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

  const onSubmit = (data) => {
    dispatch(
      createBooking({
        customer_name: data.name,
        email: data.email,
        mobile_number: data.mobile,
        address: data.address,
        message: data.message,
        selected_service_id: serviceId,
      }),
    ).then(() => {
      if (onClose) onClose();
    });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Half - Service Details */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 lg:p-8">
          {serviceItem && (
            <>
              <h2 className="text-xl font-bold text-white mb-6">
                Service Details
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-2 border-white/30 shadow-lg">
                  <img
                    src={serviceItem.image}
                    alt={serviceItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {serviceItem.name}
                  </h3>
                  {serviceItem.price && (
                    <p className="text-blue-100 font-semibold text-lg">
                      ₹{serviceItem.price}
                    </p>
                  )}
                  {serviceItem.description && (
                    <p className="text-blue-200 text-sm mt-2 line-clamp-2">
                      {serviceItem.description}
                    </p>
                  )}
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3 text-white">
                  <BsCheckCircle className="text-green-400" size={20} />
                  <span className="text-sm">Professional Service</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <BsCheckCircle className="text-green-400" size={20} />
                  <span className="text-sm">Verified Technicians</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <BsCheckCircle className="text-green-400" size={20} />
                  <span className="text-sm">100% Satisfaction</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Half - Form */}
        <div className="p-6 lg:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Book Your Service
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
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
                  className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border ${
                    errors.name && touchedFields.name
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  } transition-all outline-none text-sm`}
                />
                {errors.name && touchedFields.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
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
                  className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border ${
                    errors.email && touchedFields.email
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  } transition-all outline-none text-sm`}
                />
                {errors.email && touchedFields.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
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
                className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border ${
                  errors.mobile && touchedFields.mobile
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                } transition-all outline-none text-sm`}
              />
              {errors.mobile && touchedFields.mobile && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
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
                className={`w-full px-3 py-2.5 rounded-lg bg-gray-50 border ${
                  errors.address && touchedFields.address
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                } transition-all outline-none text-sm resize-none`}
                rows={2}
              />
              {errors.address && touchedFields.address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
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
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-6"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                "Book Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
