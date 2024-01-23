import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    coins: [],
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    updateCoin: (state, action) => {
      state.coins = state.coins.map((coin) =>
        coin.symbol === action.payload.s
          ? { ...coin, price: action.payload.p }
          : coin
      );
    },
  },
});

export const { setCoins, updateCoin } = dashboardSlice.actions;

export default dashboardSlice.reducer;
