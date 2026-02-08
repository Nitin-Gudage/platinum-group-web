import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitContactForm } from "../features/api/contactAPI";

/* Async */
export const sendContactQuery = createAsyncThunk(
    "contact/send",
    async (formData, { rejectWithValue }) => {
        try {
            return await submitContactForm(formData);
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const contactSlice = createSlice({
    name: "contact",

    initialState: {
        status: "idle",
        error: null,
        success: false,
    },

    reducers: {
        resetStatus: (state) => {
            state.status = "idle";
            state.error = null;
            state.success = false;
        },
    },

    extraReducers: (builder) => {
        builder

            .addCase(sendContactQuery.pending, (state) => {
                state.status = "loading";
            })

            .addCase(sendContactQuery.fulfilled, (state) => {
                state.status = "succeeded";
                state.success = true;
            })

            .addCase(sendContactQuery.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { resetStatus } = contactSlice.actions;

export default contactSlice.reducer;
