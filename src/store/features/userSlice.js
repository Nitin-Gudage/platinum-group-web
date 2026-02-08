import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserDetails } from "./api/user";

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
            return await fetchUserDetails();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

const userSlice = createSlice({
    name: "user",

    initialState: {
        data: null,
        status: "idle",
        error: null,
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "success";
                state.data = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;
