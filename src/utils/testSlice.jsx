import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = testSlice.actions;
export default testSlice.reducer;
