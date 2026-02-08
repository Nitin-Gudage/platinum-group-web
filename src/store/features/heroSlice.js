import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHeroSlides } from "./api/heroApi";

/* ✅ Thunk with cache */
export const getHeroSlides = createAsyncThunk(
  "hero/getSlides",

  async (_, { getState, rejectWithValue }) => {
    try {
      const { hero } = getState();

      /* Check cache */
      if (hero.cache) {
        return {
          fromCache: true,
          data: hero.cache,
        };
      }

      /* Fetch API */
      const data = await fetchHeroSlides();

      return {
        fromCache: false,
        data,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const heroSlice = createSlice({
  name: "hero",

  initialState: {
    data: [],
    status: "idle",
    error: null,

    // ✅ Cache
    cache: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      /* Loading */
      .addCase(getHeroSlides.pending, (state) => {
        state.status = "loading";
      })

      /* Success */
      .addCase(getHeroSlides.fulfilled, (state, action) => {
        state.status = "success";

        const { fromCache, data } = action.payload;

        state.data = data;

        /* Save cache */
        if (!fromCache) {
          state.cache = data;
        }
      })

      /* Error */
      .addCase(getHeroSlides.rejected, (state, action) => {
        state.status = "error";
        state.error =
          action.payload || action.error.message;
      });
  },
});

export default heroSlice.reducer;
