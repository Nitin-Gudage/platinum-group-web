import { supabase } from "../../../lib/supabaseClient";

export async function fetchMetaData() {
    const [acRes, serviceRes] = await Promise.all([

        supabase.from("ac_types").select("*").order("id"),

        supabase.from("service_types").select("*").order("id"),
    ]);

    if (acRes.error) throw acRes.error;
    if (serviceRes.error) throw serviceRes.error;

    return {
        acTypes: acRes.data,
        serviceTypes: serviceRes.data,
    };
}
