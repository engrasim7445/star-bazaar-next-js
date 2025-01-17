'use client';
import { createSlice } from '@reduxjs/toolkit';
import { initialObj } from '../global-redux';

const Slice = createSlice({
  name: 'dialogz',
  initialState: initialObj, // We Need data in it
  reducers: {
    dialogShow: (state, action) => {
      state.data = {
        ...dialogs,
        ...action.payload,
      }
    },
    dialogHide: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      }
    },
    dialogHideAll: (state, action) => {
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

// const dispatch = useDispatch();
// dispatch(dialogHide({ [dialogName]: false }));



