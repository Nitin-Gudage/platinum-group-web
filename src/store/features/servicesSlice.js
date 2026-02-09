import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServicesByAc } from "./api/servicesAPI";

/* Fetch Services By AC (With Cache) */
export const getServices = createAsyncThunk(
    "services/get",

    async (acId, { getState, rejectWithValue }) => {
        try {
            const { services } = getState();

            /* Return from cache if exists */
            if (services.cache[acId]) {
                return {
                    data: services.cache[acId],
                    acId,
                    fromCache: true,
                };
            }

            /* Fetch from API */
            const data = await fetchServicesByAc(acId);

            return {
                data,
                acId,
                fromCache: false,
            };
        } catch (err) {
            return rejectWithValue(
                err?.message || "Failed to fetch services"
            );
        }
    }
);

const servicesSlice = createSlice({
    name: "services",

    initialState: {
        /* Service List */
        list: [],

        /* Active Filters */
        activeAc: null,
        activeServiceType: "Super Saver Package",

        /* Status */
        status: "idle",
        error: null,

        /* Cache: acId → services[] */
        cache: {},
    },

    reducers: {
        /* Select AC */
        setActiveAc: (state, action) => {
            state.activeAc = action.payload;
        },

        /* Select Service Type */
        setActiveServiceType: (state, action) => {
            state.activeServiceType = action.payload;
        },

        /* Reset (Optional) */
        resetServices: (state) => {
            state.list = [];
            state.status = "idle";
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder

            /* ================= LOADING ================= */
            .addCase(getServices.pending, (state, action) => {
                state.status = "loading";
                state.error = null;

                const acId = action.meta.arg;

                /* Show cached data immediately */
                if (state.cache[acId]) {
                    state.list = state.cache[acId];
                }
            })

            /* ================= SUCCESS ================= */
            .addCase(getServices.fulfilled, (state, action) => {
                const { data, acId, fromCache } = action.payload;

                state.status = "success";
                state.list = data;

                /* Save fresh data to cache */
                if (!fromCache) {
                    state.cache[acId] = data;
                }
            })

            /* ================= ERROR ================= */
            .addCase(getServices.rejected, (state, action) => {
                state.status = "error";

                state.error =
                    action.payload || "Something went wrong";
            });
    },
});

export const {
    setActiveAc,
    setActiveServiceType,
    resetServices,
} = servicesSlice.actions;

export default servicesSlice.reducer;
