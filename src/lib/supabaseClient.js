import { createClient } from "@supabase/supabase-js";

const isDev = import.meta.env.DEV;

// URLs
const SUPABASE_URL = isDev
  ? import.meta.env.VITE_SUPABASE_URL
  : `${window.location.origin}/api`;

const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

console.log("Supabase key loaded:", SUPABASE_KEY);

// timeout-safe fetch WITHOUT removing headers
const fetchWithTimeout = async (url, options = {}, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return res;
  } finally {
    clearTimeout(id);
  }
};

let supabase;

try {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Missing Supabase env variables");
  }

  supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
    global: {
      fetch: fetchWithTimeout
    },
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  });

  console.log("Supabase client initialized successfully");

} catch (error) {
  console.error("Supabase init failed:", error);

  // fallback client
  supabase = {
    from: () => ({
      select: async () => ({ data: [], error: null })
    })
  };
}

export { supabase };