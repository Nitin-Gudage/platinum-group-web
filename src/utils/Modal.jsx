"use client";

import Modal from "@mui/material/Modal";

export default function MuiModal({ open, onClose, children }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-describedby="modal-description"
      closeAfterTransition
    >
      {/* Backdrop */}
      <div
        className="
          fixed inset-0
          flex items-center justify-center
        "
        onClick={onClose}
      >
        {/* Modal Box */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            w-full max-w-5xl
            max-h-[90vh]
            bg-white
            rounded-xl
            py-4
            flex flex-col
          "
        >
          {/* Body */}
          <div
            id="modal-description"
            className="
              relative
              p-5
              flex-1
              overflow-y-auto
              text-gray-700
            "
          >
            {/* Close Button (Inside Content) */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="
                absolute top-3 right-3
                text-gray-500 hover:text-gray-800
                text-2xl font-bold
                transition
                z-20
              "
            >
              ✕
            </button>

            {/* Children Content */}
            {children}
          </div>
        </div>
      </div>
    </Modal>
  );
}
