import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServiceStepsAPI } from "./api/serviceStepsAPI";

/* Async Action */
export const fetchServiceSteps = createAsyncThunk(
    "serviceSteps/fetchServiceSteps",
    async (_, { rejectWithValue }) => {
        try {
            return await fetchServiceStepsAPI();
        } catch (err) {
            return rejectWithValue(
                err?.message || "Failed to load service steps"
            );
        }
    }
);

const serviceStepsSlice = createSlice({
    name: "serviceSteps",

    initialState: {
        data: [],
        status: "idle", // idle | loading | success | error
        error: null,
    },

    reducers: {
        resetServiceSteps: (state) => {
            state.data = [];
            state.status = "idle";
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder

            // Loading
            .addCase(fetchServiceSteps.pending, (state) => {
                if (state.data.length === 0) {
                    state.status = "loading";
                }
                state.error = null;
            })

            // Success
            .addCase(fetchServiceSteps.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
                state.error = null;
            })

            // Error
            .addCase(fetchServiceSteps.rejected, (state, action) => {
                state.status = "error";
                state.error =
                    action.payload || "Something went wrong. Please try again.";
            });
    },
});

export const { resetServiceSteps } = serviceStepsSlice.actions;

export default serviceStepsSlice.reducer;
