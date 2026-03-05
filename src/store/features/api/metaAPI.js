import { supabase } from "../../../lib/supabaseClient";
import { getCached, setCache, cacheKeys, cacheTTL } from "../../../utils/cache";

export async function fetchMetaData() {
  // Try to get cached data first
  const cached = getCached(cacheKeys.metaData);
  if (cached) {
    return cached;
  }

  const [acRes, serviceRes] = await Promise.all([

    supabase.from("ac_types").select("*").order("id"),

    supabase.from("service_types").select("*").order("id"),
  ]);

  if (acRes.error) throw acRes.error;
  if (serviceRes.error) throw serviceRes.error;

  const result = {
    acTypes: acRes.data,
    serviceTypes: serviceRes.data,
  };

  // Cache the response
  setCache(cacheKeys.metaData, result, cacheTTL.long);

  return result;
}
