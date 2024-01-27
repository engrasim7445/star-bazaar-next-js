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
    formzUpdateKey: (state, action) => {
      state.data[state.data.key] = state.data.value
    },
    formzReset: (state, action) => {
      state.data = { }
    }
  }
});

const dialogs = {
  
}

export const { formzInit, formzUpdate, formzReset, formzUpdateKey } = Slice.actions
export default Slice.reducer;

