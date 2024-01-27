'use client';
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../global-redux';

const Slice = createSlice({
  name: 'formz',
  initialState : {} as any,
  reducers: {
    formzInit: (state, action) => {
      state = {
        ...action.payload,
      }
    },
    formzUpdate: (state, action) => {
      state = {
        ...state,
        ...action.payload,
      }
    },
    formzUpdateKey: (state, action) => {
      state[state.key] = state.value
    },
    formzReset: (state, action) => {
      state = { }
    }
  }
});

export const { formzInit, formzUpdate, formzReset, formzUpdateKey } = Slice.actions
export default Slice.reducer;

