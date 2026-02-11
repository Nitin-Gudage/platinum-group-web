import { contactInfo } from "../Data/Data";

/**
 * StickyCallButton - Mobile-only always visible call button (No animation)
 */
export default function StickyCallButton() {

  const handleCall = () => {
    const phoneNumber = contactInfo.mobile1.replace(/[^0-9+]/g, "");
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14
        bg-green-500
        text-white rounded-full
        shadow-lg shadow-green-500/30
        md:hidden
      "
      aria-label="Call now"
      title="Call us now"
    >
      {/* Phone Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </button>
  );
}
