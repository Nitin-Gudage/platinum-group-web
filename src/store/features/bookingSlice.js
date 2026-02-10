import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBookingAPI } from "./api/bookingApi";

/* Create Booking */
export const createBooking = createAsyncThunk(
    "booking/create",
    async (formData, { rejectWithValue }) => {
        try {
            return await createBookingAPI(formData);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const bookingSlice = createSlice({
    name: "booking",

    initialState: {
        data: null,
        status: "idle",
        error: null,
    },

    reducers: {
        resetBooking: (state) => {
            state.data = null;
            state.status = "idle";
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder

            /* Create */
            .addCase(createBooking.pending, (state) => {
                state.status = "loading";
            })

            .addCase(createBooking.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            })

            .addCase(createBooking.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            });
    },
});

export const { resetBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
