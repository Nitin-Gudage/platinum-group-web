import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMetaData } from "./api/metaAPI";

export const getMeta = createAsyncThunk(
    "meta/get",
    async (_, { getState, rejectWithValue }) => {
        try {
            const { meta } = getState();

            /* Check cache */
            if (meta.cache) {
                return { fromCache: true, data: meta.cache };
            }

            /* Fetch API */
            const data = await fetchMetaData();

            return { fromCache: false, data };
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

        // ✅ Cache
        cache: null,

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
                const { fromCache, data } = action.payload;
                state.acTypes = data.acTypes;
                state.serviceTypes = data.serviceTypes;

                /* Save cache */
                if (!fromCache) {
                    state.cache = data;
                }
            })
            .addCase(getMeta.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            });
    },
});

export default metaSlice.reducer;
