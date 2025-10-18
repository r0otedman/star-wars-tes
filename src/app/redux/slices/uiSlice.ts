import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isModalOpen: boolean;
}

const initialState: UIState = {
  isModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    setModal(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { openModal, closeModal, toggleModal, setModal } = uiSlice.actions;
export default uiSlice.reducer;
