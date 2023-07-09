import { createSlice } from "@reduxjs/toolkit";
import dataCar from "@/data/car.json";

const carSlice = createSlice({
  name: "dataCar",
  initialState: {
    loading: false,
    dataCar: null,
    selectedData: null,
  },
  reducers: {
    fetchData: (state) => {
      state.loading = true;
      state.dataCar = dataCar;
    },
    setSelectedData: (state, action) => {
      state.selectedData = action.payload;
    },
  },
});

export const { fetchData, setSelectedData } = carSlice.actions;

export default carSlice.reducer;
