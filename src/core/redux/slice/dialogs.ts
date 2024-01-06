'use client';
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../global-redux';

const Slice = createSlice({
  name: 'dialogShow',
  initialState,
  reducers: {
    dialogShow: (state, action) => {
      state.data = {
        ...dialogs,
        [action.payload.key]: action.payload.value
      }
    },
    dialogHide: (state, action) => {
      state.data = {
        ...dialogs
      }
    }
  }
});

const dialogs = {
  LoginCustomer: false,
  LoginCreator: false,
  LoginBusiness: false,
  Success: false,
  Error: false,
  Warn: false,
  Confirm: false
}

export const { dialogHide, dialogShow } = Slice.actions
export default Slice.reducer;

