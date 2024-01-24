import { configureStore } from '@reduxjs/toolkit'
// import user from '@/core/redux/slice/user'
// import userz from '@/core/redux/slice/userz'
// import todo from '@/core/redux/slice/todo'
import dialogz from '@/core/redux/slice/dialogz'
import formz from '@/core/redux/slice/formz'


export const store = configureStore({
  reducer: {
    // user,
    // userz,
    // todo,
    dialogz,
    formz
  }
})