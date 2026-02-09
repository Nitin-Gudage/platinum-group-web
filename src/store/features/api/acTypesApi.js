import { supabase } from "../../../lib/supabaseClient";

/* Fetch only AC Types */
export const fetchAcTypes = async () => {
  const { data, error } = await supabase
    .from("ac_types")
    .select("id, name, description, image")
    .order("id");

  if (error) throw error;

  return data;
};

/* Fetch Services by AC Type ID */
export const fetchServicesByType = async (acTypeId) => {
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

  return data;
};
