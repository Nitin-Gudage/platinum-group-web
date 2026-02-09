import { supabase } from "../../../lib/supabaseClient";

export const submitContactForm = async (payload) => {
    const { data, error } = await supabase
        .from("customer_query")
        .insert([payload])
        .select()
        .single();

    if (error) {
        console.error("Supabase Error:", error);
        throw error;
    }

    return data;
};
