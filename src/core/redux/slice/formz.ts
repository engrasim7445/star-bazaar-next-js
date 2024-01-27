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
// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(
//     formzInit({
//       userType: 'customer', 
//     })
//   )
// }, [])

// const formz = useSelector((state: any) => state?.formz.data);
// const logIn = () => {
//   HTTP_SignIn({
//     ...formz
//   }, dispatch).then((result) => {
//     if(result?.user) {
//     }
//   })
// }

// export function HTTP_SignIn(data: SignIn, dispatch: any): Promise<any> {
//   if (!data.password) return Error('Please enter password');
//   if (!data.email) return Error('Please enter email')
//   return HttpPOST({
//     ep: EP.SIGN_IN,
//     body: {
//       ...data,
//       type:'email',
//       loginField:data.email
//     }
//   }).then((res) => {
//     // const {token, user } = data
//     if (res.isSuccess) {
//       const { data: { token, user } } = res;
//       Success('Login Successfully');
//       dispatch(setUser(user));
//       StrgSet('token', token.accessToken);
//     }
//   })
// }
