'use client';
import { createSlice } from '@reduxjs/toolkit';
import { initialObj } from '../global-redux';

const Slice = createSlice({
  name: 'formz',
  initialState : initialObj,
  reducers: {
    formzInit: (state, action) => {
      state.data = {
        ...action.payload,
      }
    },
    formzUpdate: (state, action) => {
      state.data = {
        ...state.data,
        ...action.payload,
      }
    },
    formzUpdateKey: (state, action) => {
      state.data[state.data.key] = state.data.value
    },
    formzReset: (state, action) => {
      state.data = { }
    }
  }
});

export const { formzInit, formzUpdate, formzReset, formzUpdateKey } = Slice.actions
export default Slice.reducer;
// const dialogz = useSelector((state: any) => state?.dialogz);

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(
//     formzInit({
//       userType: type, 
//       type: 'email', 
//     })
//   )
// }, [])

