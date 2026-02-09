import { supabase } from "../../../lib/supabaseClient";

export async function fetchServiceStepsAPI() {
  const { data, error } = await supabase
    .from("services")
    .select(`
      id,
      title,
      description,
      icon,
      service_steps (
        id,
        title,
        description,
        image,
        checkpoints
      )
    `)
    .order("id", { ascending: true });

  if (error) {
    console.error("Supabase fetch error:", error);
    throw new Error("Unable to fetch service steps");
  }

  return data || [];
}
