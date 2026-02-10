import { supabase } from "../../../lib/supabaseClient";

export const createBookingAPI = async (bookingData) => {
    const { data, error } = await supabase
        .from("booking_data")
        .insert([bookingData])
        .select("id")     // ✅ string
        .single();

    if (error) {
        console.error("Booking error:", error);
        throw error;
    }

    return data;
};
