import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,

  user: {
    id: null,
    name: "",
    email: "",
    role: "",
    department: "",
  },

  token: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.isAuthenticated = false;

      state.user = {
        id: null,
        name: "",
        email: "",
        role: "",
        department: "",
      };

      state.token = null;
    },

    updateProfile: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const {
  loginSuccess,
  logout,
  updateProfile,
} = authSlice.actions;

export default authSlice.reducer;