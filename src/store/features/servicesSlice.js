import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServicesByAc } from "./api/servicesAPI";

/* ✅ Thunk with cache */
export const getServices = createAsyncThunk(
    "services/get",

    async (acTypeId, { getState, rejectWithValue }) => {
        try {
            const { services } = getState();

            /* Check cache */
            if (services.cache[acTypeId]) {
                return {
                    fromCache: true,
                    data: services.cache[acTypeId],
                    acTypeId,
                };
            }

            /* Fetch API */
            const data = await fetchServicesByAc(acTypeId);

            return {
                fromCache: false,
                data,
                acTypeId,
            };
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const servicesSlice = createSlice({
    name: "services",

    initialState: {
        list: [],
        activeAc: null,

        status: "idle",
        error: null,

        // ✅ Cache
        cache: {},
    },

    reducers: {
        setActiveAc: (state, action) => {
            state.activeAc = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder

            .addCase(getServices.pending, (state) => {
                state.status = "loading";
            })

            .addCase(getServices.fulfilled, (state, action) => {
                state.status = "success";

                const { fromCache, data, acTypeId } = action.payload;

                state.list = data;

                /* Save cache */
                if (!fromCache) {
                    state.cache[acTypeId] = data;
                }
            })

            .addCase(getServices.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            });
    },
});

export const { setActiveAc } = servicesSlice.actions;

export default servicesSlice.reducer;
