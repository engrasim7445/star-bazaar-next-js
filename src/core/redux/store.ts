import { configureStore } from '@reduxjs/toolkit'
import user from '@/core/redux/slice/user'
import userz from '@/core/redux/slice/userz'
import todo from '@/core/redux/slice/todo'


export const store = configureStore({
  reducer: {
    user,
    userz,
    todo
  }
})