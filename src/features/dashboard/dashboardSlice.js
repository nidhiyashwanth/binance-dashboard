import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    coins: [],
  },
  reducers: {
    setCoins: (state, action) => {
      const index = state.coins.findIndex(
        (coin) => coin.symbol === action.payload.symbol
      );
      if (index !== -1) {
        // If the coin already exists, update its price
        state.coins[index] = {
          ...state.coins[index],
          price: action.payload.price,
        };
      } else {
        // If the coin doesn't exist, add it to the state
        state.coins.push(action.payload);
      }
    },
    updateCoin: (state, action) => {
      const index = state.coins.findIndex(
        (coin) => coin.symbol === action.payload.s
      );
      if (index !== -1) {
        const newCoins = [...state.coins];
        newCoins[index] = { ...newCoins[index], price: action.payload.p };
        return { ...state, coins: newCoins };
      }
    }
    ,
  },
});

export const { setCoins, updateCoin } = dashboardSlice.actions;
export default dashboardSlice.reducer;
