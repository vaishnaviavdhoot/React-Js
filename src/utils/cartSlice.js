import { createSlice } from "@reduxjs/toolkit";
// import cartReducer from './'
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state) => {
      //RTK - either Mutate the existing state or return a new state
      state.items.length = 0; // OriginalState =[]
      //return{item: []}; // this new[] will be replaced inside originalState =[]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
