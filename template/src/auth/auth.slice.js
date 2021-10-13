import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userName = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
