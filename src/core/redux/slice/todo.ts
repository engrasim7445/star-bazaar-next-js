'use client';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialArr } from '../global-redux';

const Slice = createSlice({
  name: 'sliceTodo',
  initialState: initialArr,
  reducers: {
    addTodo: (state, action) => {
      const data = {
        id: nanoid(),
        ...action.payload
      } as never
      state.data.push(data)
    },
    rmvTodo: (state, action) => {
      const data = state.data.filter(
        (x: any) => x.id !== action.payload
      )
      state.data = data
    }
  }
});

export const { addTodo, rmvTodo } = Slice.actions
export default Slice.reducer;

