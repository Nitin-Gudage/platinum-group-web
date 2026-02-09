import { supabase } from "../../../lib/supabaseClient";

export const fetchHeroSlides = async () => {
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

  return data;
};
