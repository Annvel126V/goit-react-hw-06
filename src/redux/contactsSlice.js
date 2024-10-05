import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../initialContact.json";

const initialState = {
  items: [...initialContacts],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    deleteContacts(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const getContacts = (state) => state.contacts.items;
export const { addContacts, deleteContacts } = slice.actions;
export default slice.reducer;
