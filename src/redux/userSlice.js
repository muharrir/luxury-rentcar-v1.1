import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "http://localhost:4000/api/getme",
        config
      );
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const clearUser = () => {
  return { type: "user/clearUser" };
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    fullname: "",
    profileImage: null,
  },
  reducers: {
    setFullname: (state, action) => {
      state.fullname = action.payload;
    },
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.fullname = action.payload.fullname;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log("Error fetching user data:", action.payload);
      })
      .addCase(clearUser, (state) => {
        state.fullname = "";
        state.profileImage = null;
      });
  },
});

export const { setFullname, setProfileImage } = userSlice.actions;

export default userSlice.reducer;
