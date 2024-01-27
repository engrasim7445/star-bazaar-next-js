'use client';
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../global-redux';

const Slice = createSlice({
  name: 'dialogz',
  initialState: {} as any,
  reducers: {
    dialogShow: (state, action) => {
      state = {
        ...dialogs,
        ...action.payload,
      }
    },
    dialogHide: (state, action) => {
      state = {
        ...state,
        ...action.payload,
      }
    },
    dialogHideAll: (state, action) => {
      state = {
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



