import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggled: false, 
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled; 
    },
  },
});

export const { toggle } = uiSlice.actions;
export default uiSlice.reducer;