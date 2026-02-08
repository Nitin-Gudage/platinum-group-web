import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAcTypes, fetchServicesByType } from "./api/acTypesApi";

/* ======================
   Thunks
====================== */

/* Get AC Types */
export const getAcTypes = createAsyncThunk(
    "ac/getTypes",
    async (_, { rejectWithValue }) => {
        try {
            return await fetchAcTypes();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

/* Get Services by Type */
export const getServicesByType = createAsyncThunk(
    "ac/getServices",
    async (acTypeId, { rejectWithValue }) => {
        try {
            return {
                acTypeId,
                services: await fetchServicesByType(acTypeId),
            };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

/* ======================
   Slice
====================== */

const acTypesSlice = createSlice({
    name: "ac",

    initialState: {
        types: [],

        servicesByType: {}, // { 1: [...], 2: [...] }

        status: "idle",
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder

            /* Types */
            .addCase(getAcTypes.pending, (s) => {
                s.status = "loading";
            })

            .addCase(getAcTypes.fulfilled, (s, a) => {
                s.status = "success";
                s.types = a.payload;
            })

            /* Services */
            .addCase(getServicesByType.fulfilled, (s, a) => {
                s.servicesByType[a.payload.acTypeId] =
                    a.payload.services;
            })

            /* Error */
            .addCase(getAcTypes.rejected, (s, a) => {
                s.status = "error";
                s.error = a.payload;
            });
    },
});

export default acTypesSlice.reducer;
