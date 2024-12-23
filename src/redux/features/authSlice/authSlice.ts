import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Student {
  name?: string;
  email?: string;
  institute?: string;
  interest?: string[];
  referredId?: string;
}

interface RegistrationData {
  password: string;
  student: Student;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  registrationData: RegistrationData | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  registrationData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.registrationData = null;
    },
    saveRegistrationData: (state, action: PayloadAction<RegistrationData>) => {
      state.registrationData = action.payload;
    },
    updateRegistrationData: (
      state,
      action: PayloadAction<Partial<RegistrationData>>
    ) => {
      if (state.registrationData) {
        state.registrationData = {
          ...state.registrationData,
          ...action.payload,
        }
      }
    },
    clearRegistrationData: (state) => {
      state.registrationData = null;
    },
  },
});

export const { setUser, logout, saveRegistrationData, updateRegistrationData, clearRegistrationData } =
  authSlice.actions;

export default authSlice.reducer;
