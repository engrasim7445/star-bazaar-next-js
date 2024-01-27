'use client'
import { EP } from "./end-points";
import { HttpPOST } from "./http";
import { Error, Success } from "@/utils/alertz";
import { setUser } from "@/core/redux/slice/user";
import { StrgSet } from "@/core/storage";

export interface SignIn {
  email: string;
  loginField?: string;
  password: string;
  userType: string;
  type?: 'email' | 'phone'
}
export function HTTP_SignIn(data: SignIn, dispatch: any): Promise<any> {
  if (!data.password) return Error('Please enter password');
  if (!data.email) return Error('Please enter email')
  return HttpPOST({
    ep: EP.SIGN_IN,
    body: {
      ...data,
      type:'email',
      loginField:data.email
    }
  }).then((res) => {
    // const {token, user } = data
    if (res.isSuccess) {
      Success('Login Successfully');
      const { data: { token, user } } = res;
      dispatch(setUser(user));
      StrgSet('token', token.accessToken);
      StrgSet('accessToken', token.accessToken);
      return { user }
    }
  })
}