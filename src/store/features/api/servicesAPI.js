import { supabase } from "../../../lib/supabaseClient";

export async function fetchServicesByAc(acTypeId) {
  const { data, error } = await supabase
    .from("all_services")
    .select(`
      id,
      name,
      image,
      price,
      description,
      service_type_id,

      service_types!all_services_service_type_id_fkey (
        id,
        name,
        icon
      ),

      service_features (
        id,
        title,
        subtext
      )
    `)
    .eq("ac_type_id", acTypeId)
    .order("id", { ascending: true });

  if (error) {
    console.error("Supabase error:", error);
    throw error;
  }

  return data || [];
}
