'use client';
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../global-redux';

const Slice = createSlice({
  name: 'formz',
  initialState,
  reducers: {
    formzInit: (state, action) => {
      state.data = {
        ...action.payload,
      }
    },
    formzUpdate: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      }
    },
    // formzReset: (state, action) => {
    //   state.data = { }
    // }
  }
});

const dialogs = {
  
}

export const { formzInit, formzUpdate } = Slice.actions
export default Slice.reducer;

