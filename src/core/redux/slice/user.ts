'use client';

import { StrgGet, StrgSet } from "@/core/storage";
import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: 'user',
  initialState: {},
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



