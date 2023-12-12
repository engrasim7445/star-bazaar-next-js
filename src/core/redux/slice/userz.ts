import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "../global-redux";

export const fetchApiUserz = createAsyncThunk("fetchApiUserz", async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  return await result.json();
})

const Slice = createSlice({
  name: 'sliceUserz',
  initialState,
  reducers: {
    addUserz: (state, action) => {
      const data = {
        id: nanoid(),
        ...action.payload
      }
      state.data.push(data)
    },
    rmvUserz: (state, action) => {
      const data = state.data.filter(
        (x: any) => x.id !== action.payload
      )
      state.data = data
    }
  },
  // This is Reducer
  extraReducers: (builder) => {
    builder.addCase(
      fetchApiUserz.fulfilled, (state: any, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
  }
});

export const { addUserz, rmvUserz } = Slice.actions
export default Slice.reducer;

