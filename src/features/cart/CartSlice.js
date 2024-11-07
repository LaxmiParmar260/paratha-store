import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    allCart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allCart = action.payload;
      })
      .addCase(getCart.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const getCart = createAsyncThunk("/FETCH/CART", async () => {
  const response = await axios.get("/data");
  console.log(response.data);
  return response.data;
});

export default cartSlice.reducer;
