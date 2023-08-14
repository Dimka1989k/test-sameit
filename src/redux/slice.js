import { createSlice } from "@reduxjs/toolkit";
import { fetchInfo, fetchDepartments } from "./operations";

const initialState = {
  ttnInfo: {},
  selectedNumber: "",
  ttnNumbersList: [],
  departmentsList: [],
  infoError: false,
  departmentsError: false,
  isLoading: false,
  page: 1,
  city: "",
  totalCount: 0,
};

const infoSlice = createSlice({
  name: "info",
  initialState: initialState,
  reducers: {
    updateError(state, action) {
      state.infoError = action.payload;
    },
    updateSelectedNumber(state, action) {
      state.selectedNumber = action.payload;
    },
    clearRequestHistory(state, action) {
      state.ttnNumbersList = [];
    },
    updatePage(state, action) {
      state.page = action.payload;
    },
    updateCity(state, action) {
      state.city = action.payload;
      state.page = 1;
    },
    clearDepartmentsList(state, action) {
      state.departmentsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.pending, (state, action) => {
        state.infoError = false;
        state.isLoading = true;
      })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.ttnInfo = action.payload;
        state.isLoading = false;
        const currentTtnNumber = action.payload.Number;
        if (!state.ttnNumbersList.includes(currentTtnNumber)) {
          state.ttnNumbersList.push(currentTtnNumber);
        }
        state.selectedNumber = currentTtnNumber;
      })
      .addCase(fetchInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.infoError = action.payload[0];
      })
      .addCase(fetchDepartments.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.departmentsList = action.payload.data;
        } else {
          state.departmentsList = [
            ...state.departmentsList,
            ...action.payload.data,
          ];
        }
        state.totalCount = action.payload.totalCount;
        state.departmentsError = false;
        state.isLoading = false;
      })
      .addCase(fetchDepartments.rejected, (state, action) => {
        state.isLoading = false;
        state.departmentsError = true;
      });
  },
});

export const {
  updateError,
  updateSelectedNumber,
  deleteSelectedNumber,
  clearRequestHistory,
  updatePage,
  updateCity,
  clearDepartmentsList,
} = infoSlice.actions;

export const infoReducer = infoSlice.reducer;
