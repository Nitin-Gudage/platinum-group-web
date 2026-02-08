import { supabase } from "../../../lib/supabaseClient";

export async function fetchUserDetails() {
    const { data, error } = await supabase
        .from("contact_details")
        .select("*")
        .limit(1)
        .single();

    if (error) throw error;

    return data;
}
