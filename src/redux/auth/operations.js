import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  fetchTransaction,
  fetchTransactionCategory,
} from "../transactions/operations";
axios.defaults.baseURL = "https://wallet.b.goit.study";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/sign-up", credentials);
      setAuthHeader(res.data.token);
      console.log(res.data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/sign-in", credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logot", async (_, thunkAPI) => {
  try {
    await axios.delete("/api/auth/sign-out");
    clearAuthHeader();
    localStorage.removeItem("persist:token");
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Token yok!");
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/api/users/current");
      thunkAPI.dispatch(fetchTransaction());
      thunkAPI.dispatch(fetchTransactionCategory());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
