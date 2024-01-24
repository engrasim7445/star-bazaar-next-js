// import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
// import { initialState } from "../global-redux";
// import { HttpGET } from "@/core/http";

// export const signIn = createAsyncThunk("signIn", async () => {
//   const result = await HttpGET({
//     ep: '',
//     body: {}
//   });
//   return await result;
// })

// const Slice = createSlice({
//   name: 'sliceSignIn',
//   initialState,
//   reducers: {
//     addUserz: (state, action) => {
//       const data = {
//         id: nanoid(),
//         ...action.payload
//       }
//       state.data.push(data)
//     },
//     rmvUserz: (state, action) => {
//       const data = state.data.filter(
//         (x: any) => x.id !== action.payload
//       )
//       state.data = data
//     }
//   },
//   // This is Reducer
//   extraReducers: (builder) => {
//     builder.addCase(
//       signIn.fulfilled, (state: any, action) => {
//         state.isloading = false;
//         state.data = action.payload;
//       })
//   }
// });

// export const { addUserz, rmvUserz } = Slice.actions
// export default Slice.reducer;

