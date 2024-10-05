import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectNameFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const gchangeFilter = (state) => state.filters.name;
export const { selectNameFilter } = slice.actions;
export default slice.reducer;
