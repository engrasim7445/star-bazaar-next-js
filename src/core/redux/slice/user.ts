'use client';

import { StrgGet, StrgSet } from "@/core/storage";
import { createSlice, current } from "@reduxjs/toolkit";
import { initialObj } from "../global-redux";

const Slice = createSlice({
  name: 'user',
  initialState: initialObj,
  reducers: {
    setUser: (state, action) => {
      state = action.payload
      const d = JSON.stringify(current(state));
      StrgSet('user', d)
    },
    getUser: (state, action) => {
      state = StrgGet('user')
    }
  }
});

export const { setUser, getUser } = Slice.actions
export default Slice.reducer;



