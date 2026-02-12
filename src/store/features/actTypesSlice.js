import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAcTypes, fetchServicesByType } from "./api/acTypesApi";

/* ======================
   Thunks
====================== */

/* Get AC Types */
export const getAcTypes = createAsyncThunk(
    "ac/getTypes",
    async (_, { getState, rejectWithValue }) => {
        try {
            const { ac } = getState();

            /* Check cache */
            if (ac.cache) {
                return { fromCache: true, data: ac.cache };
            }

            /* Fetch API */
            const data = await fetchAcTypes();

            return { fromCache: false, data };
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

        // ✅ Cache
        cache: null,

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
                const { fromCache, data } = a.payload;
                s.types = data;

                /* Save cache */
                if (!fromCache) {
                    s.cache = data;
                }
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
