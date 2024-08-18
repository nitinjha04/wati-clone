import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  modalChildren: null,
};

const nodesSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.open = true;
      state.modalChildren = action.payload; 
    },
    closeModal: (state) => {
      state.open = false;
      state.modalChildren = null; 
    },
  },
});

export const { openModal, closeModal } = nodesSlice.actions;

export default nodesSlice.reducer;
