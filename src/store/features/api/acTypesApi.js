import { supabase } from "../../../lib/supabaseClient";
import { getCached, setCache, cacheKeys, cacheTTL } from "../../../utils/cache";

/* Fetch only AC Types with caching */
export const fetchAcTypes = async () => {
  // Try to get cached data first
  const cached = getCached(cacheKeys.acTypes);
  if (cached) {
    return cached;
  }

  const { data, error } = await supabase
    .from("ac_types")
    .select("id, name, description, image")
    .order("id");

  if (error) throw error;

  // Cache the response
  if (data) {
    setCache(cacheKeys.acTypes, data, cacheTTL.long);
  }

  return data;
};

/* Fetch Services by AC Type ID with caching */
export const fetchServicesByType = async (acTypeId) => {
  const cacheKey = cacheKeys.servicesByType(acTypeId);

  // Try to get cached data first
  const cached = getCached(cacheKey);
  if (cached) {
    return cached;
  }

  const { data, error } = await supabase
    .from("ac_services")
    .select(`
      id,
      name,
      image,
      price,

      service_features (
        id,
        title,
        subtext
      )
    `)
    .eq("ac_type_id", acTypeId)
    .order("id");

  if (error) throw error;

  // Cache the response
  if (data) {
    setCache(cacheKey, data, cacheTTL.medium);
  }

  return data;
};
