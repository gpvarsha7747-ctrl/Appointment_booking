// src/redux/Slice/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { saveToStorage, getFromStorage, removeFromStorage } from "../store/storage";

const API_URL = "http://localhost:5000/api/auth";

// ✅ Register User
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/register`, userData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Registration failed");
    }
  }
);





export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      return res.data; // { user: {role: "user/admin", ...}, token: "..." }
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);

const storedUser = getFromStorage("user");
const storedToken = getFromStorage("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
    token: storedToken || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      removeFromStorage("user");
      removeFromStorage("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        saveToStorage("user", action.payload.user);
        saveToStorage("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
