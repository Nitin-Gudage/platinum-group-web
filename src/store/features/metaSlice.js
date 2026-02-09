import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMetaData } from "./api/metaAPI";

export const getMeta = createAsyncThunk(
    "meta/get",
    async (_, { rejectWithValue }) => {
        try {
            return await fetchMetaData();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const metaSlice = createSlice({
    name: "meta",

    initialState: {
        acTypes: [],
        serviceTypes: [],
        status: "idle",
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getMeta.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMeta.fulfilled, (state, action) => {
                state.status = "success";
                state.acTypes = action.payload.acTypes;
                state.serviceTypes = action.payload.serviceTypes;
            })
            .addCase(getMeta.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            });
    },
});

export default metaSlice.reducer;
