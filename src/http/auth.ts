'use client'

import { useDispatch } from "react-redux";
import { EP } from "./end-points";
import { HttpPOST } from "./http";
import { Success } from "@/utils/alertz";
import { setUser } from "@/core/redux/slice/user";
import { StrgSet } from "@/core/storage";

export function SIGN_IN() {
  const dispatch = useDispatch()
  return HttpPOST({
    ep: EP.SIGN_IN
  }).then((res) => {
    // const {token, user } = data
    if (res.isSuccess) {
      Success('Login Successfully');

      const { data: { token, user } } = res;
      dispatch(setUser(user));
      StrgSet('token', token.accessToken);
      StrgSet('accessToken', token.accessToken);

      if (user.type == 'creator') {
        // Navigate to Creator Profile
      } else if (user.type == 'customer') {
        // Navigate to Customer Profile
      } else if (user.type == 'business') {

      } else if (user.type == 'agent') {

      }
      return { user }

    }
  })
}