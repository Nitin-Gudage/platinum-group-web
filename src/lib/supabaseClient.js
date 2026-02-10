import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

// Check if environment variables are valid
const isValidUrl = (url) => {
  return url && typeof url === 'string' && url.startsWith('http') && !url.includes('undefined');
};

const isValidKey = (key) => {
  return key && typeof key === 'string' && key.length > 10 && !key.includes('undefined');
};

// Create mock supabase client for development/fallback
const createMockClient = () => {
  console.warn('Supabase environment variables missing. Using mock client.');

  return {
    from: (table) => ({
      select: () => ({
        eq: () => ({
          order: () => Promise.resolve({ data: [], error: null })
        }),
        order: () => Promise.resolve({ data: [], error: null })
      }),
      insert: () => Promise.resolve({ data: null, error: { message: 'Service unavailable' } })
    }),
    channel: () => ({
      on: () => ({
        subscribe: () => ({ status: 'unsubscribed' })
      })
    }),
    getChannels: () => []
  };
};

// Initialize client or use mock
let supabase;

if (isValidUrl(supabaseUrl) && isValidKey(supabaseAnonKey)) {
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('client initialized successfully');
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    supabase = createMockClient();
  }
} else {
  console.warn('Missing or invalid Supabase environment variables. Please check your .env file.');
  console.warn(`VITE_SUPABASE_URL: ${supabaseUrl || 'NOT SET'}`);
  console.warn(`VITE_SUPABASE_KEY: ${supabaseAnonKey ? '****' + supabaseAnonKey.slice(-4) : 'NOT SET'}`);
  supabase = createMockClient();
}

// Helper function to check if Supabase is available
export const isSupabaseConfigured = () => {
  return isValidUrl(supabaseUrl) && isValidKey(supabaseAnonKey);
};

// Helper function to get configuration status
export const getSupabaseStatus = () => {
  return {
    configured: isSupabaseConfigured(),
    url: supabaseUrl ? '***configured***' : 'not set',
    key: supabaseAnonKey ? '***configured***' : 'not set'
  };
};

export { supabase };
