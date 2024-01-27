'use client';

import { StrgGet, StrgSet } from "@/core/storage";
import { createSlice, current } from "@reduxjs/toolkit";
import { initialObj } from "../global-redux";

const Slice = createSlice({
  name: 'user',
  initialState: initialObj,
  reducers: {
    setUser: (state, action) => {
      const {payload} = action;
      state.data = payload
      console.log()
      const d = JSON.stringify(payload);
      StrgSet('user', d)
    },
    getUser: (state, action) => {
      state.data = StrgGet('user') || {}
    }
  }
});

export const { setUser, getUser } = Slice.actions
export default Slice.reducer;



