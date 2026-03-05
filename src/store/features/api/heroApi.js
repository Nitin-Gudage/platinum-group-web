import { supabase } from "../../../lib/supabaseClient";
import { getCached, setCache, cacheKeys, cacheTTL } from "../../../utils/cache";

/* Fetch hero slides with caching */
export const fetchHeroSlides = async () => {
  // Try to get cached data first
  const cached = getCached(cacheKeys.heroSlides);
  if (cached) {
    return cached;
  }

  const { data, error } = await supabase
    .from("hero_slides")
    .select(`
  id,
  image,
  title,
  subtitle,
  subtext,
  rating,

  ac_types!hero_slides_ac_type_id_fkey (
    id,
    name
  )
`)
    .order("id", { ascending: true });

  if (error) throw error;

  // Cache the response
  if (data) {
    setCache(cacheKeys.heroSlides, data, cacheTTL.medium);
  }

  return data;
};
