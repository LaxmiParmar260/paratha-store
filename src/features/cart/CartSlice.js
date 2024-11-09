import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("/FETCH/CART", async () => {
  const response = await axios.get("https://paratha-store.onrender.com/data");
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    allCart: [],
    products: [],
  },
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already in cart
      } else {
        state.products.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.products.find((product) => product.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity); // Prevent quantity from going below 1
      }
    },
    toggleExtraSauce: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload
      );
      if (item) {
        item.extraSauce = !item.extraSauce; // Toggle extra sauce property
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
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

export const { addCart, updateQuantity, toggleExtraSauce, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
