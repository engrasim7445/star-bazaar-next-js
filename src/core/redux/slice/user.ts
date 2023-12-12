'use client';

import { createSlice, nanoid, current } from "@reduxjs/toolkit";


const initialState = {
  // data: JSON?.parse(localStorage?.getItem('user')) || []
  data: [] as any
}

const Slice = createSlice({
  name: 'sliceUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        ...action.payload
      }
      state.data.push(data)
      const d = JSON.stringify(current(state.data));
      localStorage.setItem('user', d)
    },
    rmvUser: (state, action) => {
      const data = state.data.filter(
        (x: any) => x.id !== action.payload
      )
      state.data = data
    }
  }
});

export const { addUser, rmvUser } = Slice.actions
export default Slice.reducer;

