"use client";

import React from "react";
import { SyncLoader } from "react-spinners";

const InlineSyncLoader = ({ loading = true, text = "Loading services..." }) => {
  if (!loading) return null;

  return (
    <div className="w-full min-h-[300px] flex flex-col items-center justify-center">
      {/* Loader */}
      <SyncLoader
        color="#2563eb" // blue-600
        loading={loading}
        size={10}
        speedMultiplier={1}
      />

      {/* Text */}
      <p className="mt-3 text-gray-500 text-sm">{text}</p>
    </div>
  );
};

export default InlineSyncLoader;
