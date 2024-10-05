import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    getStatusFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const getFilter = (state) => state.filters.name;
export const { getStatusFilter } = slice.actions;
export default slice.reducer;
