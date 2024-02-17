/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";
import {
  IAuthState,
  ILogin,
  IRegister,
  IResetPass,
  AddUserFunc,
} from "./types";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState: IAuthState = {
  user: user ? JSON.parse(user) : null,
  token: token || null,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const addUserToLocalStorage: AddUserFunc = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo: IRegister, thunkApi) => {
    try {
      const response = await api.post("/auth/register", userInfo);
      return response.data;
    } catch (err: any) {
      const msg =
        typeof err?.response?.data?.message === "object"
          ? err?.response?.data?.message[0]
          : err?.response?.data?.message;
      return thunkApi.rejectWithValue(msg);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userInfo: ILogin, thunkApi) => {
    try {
      const response = await api.post("/auth/login", userInfo);
      const { username } = userInfo;
      return {
        ...response.data,
        user: {
          username,
        },
      };
    } catch (err: any) {
      const msg =
        typeof err?.response?.data?.message === "object"
          ? err?.response?.data?.message[0]
          : err?.response?.data?.message;
      return thunkApi.rejectWithValue(msg);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "auth/forget-password",
  async (email: string | undefined, thunkApi) => {
    try {
      const response = await api.get(`/auth/forget-password/${email}`);
      return response.data;
    } catch (err: any) {
      const msg =
        typeof err?.response?.data?.msg === "object"
          ? err?.response?.data?.msg[0]
          : err?.response?.data?.msg;
      return thunkApi.rejectWithValue(msg);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async (resetPassInfo: IResetPass, thunkApi) => {
    try {
      const { token, newPassword } = resetPassInfo;
      const response = await api.post(`/auth/reset-password/${token}`, {
        newPassword,
      });
      return response.data;
    } catch (err: any) {
      console.log(err);
      const msg =
        typeof err?.response?.data?.message === "object"
          ? err?.response?.data?.message[0]
          : err?.response?.data?.message;
      return thunkApi.rejectWithValue(msg);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    clearAlert: (state) => {
      return {
        ...state,
        isLoading: false,
        showAlert: false,
        alertText: "",
        alertType: "",
      };
    },
    displayAlert: (state, action) => {
      const { alertText, alertType } = action.payload;
      return {
        ...state,
        showAlert: true,
        alertText: alertText,
        alertType: alertType,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.showAlert = true;
      state.alertText = "Creating your account...";
      state.alertType = "info";
    }),
      builder.addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.showAlert = true;
        state.alertText = "Created your account and Please verify your email";
        state.alertType = "success";
      }),
      builder.addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.showAlert = true;
        state.alertText = action.payload as string;
        state.alertType = "error";
      }),
      builder.addCase(login.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(login.fulfilled, (state, action) => {
        const { user, access_token } = action.payload;
        state.isLoading = false;
        state.user = user;
        state.token = access_token;
        addUserToLocalStorage(user, access_token);
      }),
      builder.addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.showAlert = true;
        state.alertText = action.payload as string;
        state.alertType = "error";
      }),
      builder.addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(forgetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.showAlert = true;
        state.alertText = "Reset password was check in your email";
        state.alertType = "success";
      }),
      builder.addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.showAlert = true;
        state.alertText = action.payload as string;
        state.alertType = "error";
      }),
      builder.addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.showAlert = true;
        state.alertText =
          "Your password has been reset . Try with new password";
        state.alertType = "success";
      }),
      builder.addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.showAlert = true;
        state.alertText = action.payload as string;
        state.alertType = "error";
      });
  },
});

export const { clearAlert, displayAlert } = AuthSlice.actions;

export default AuthSlice.reducer;
