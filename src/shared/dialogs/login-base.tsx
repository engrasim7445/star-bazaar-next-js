'use client'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { BtnSuccess, BtnWarn, InputWrapper, LinkWrap, Txt, TxtPassword } from '..';
import { MatDialog } from './base-mat-dialog';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { dialogHide } from '@/core/redux/slice/dialogz';

export function DialogLoginBase({ children, dialogName, heading, type }: any) {
  const [typez, setTypez] = useState(type)
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(dialogHide({ [dialogName]: false }));
  };
  return (
    <MatDialog dialogName={dialogName} className="md:px-5" width='500px'>
      <h1 className="text-xl">{heading}</h1>
      <h2 className="text-lg mt-3">Enter Your Email Id & Password To Login</h2>
      <InputWrapper className="mt-2 bg-white text-black ">
        <Txt name="userName" lbl="" />
      </InputWrapper>
      <InputWrapper className="mt-4 bg-white text-black">
        <TxtPassword name="password" lbl="" />
      </InputWrapper>
      <div className={`ps-1 ${(type == 'creator' || type == 'agent') ? '' : 'hidden'}`}>
        <FormControl >
          {/* <FormLabel>Gender</FormLabel> */}
          <RadioGroup row onChange={(x, y) => setTypez(y)} value={typez}>
            <FormControlLabel value="creator" control={<Radio color="success" />} label="Creator" />
            <FormControlLabel value="agent" control={<Radio color="success"  />} label="Agent" />
          </RadioGroup>
        </FormControl>
      </div>
      <BtnSuccess className='w-full mt-3'>Submit</BtnSuccess>
      <h2  className='text-lg text-orange flex justify-end mt-2'>
        <LinkWrap url='/forgot-password'>
          Forgot Password?
        </LinkWrap>
      </h2>
      {children}
      <LinkWrap url={`/sign-up/${type}`} onClick={handleClose} className={typez == 'agent' ? 'hidden' : ''}>
        <BtnWarn className='w-full mt-4'>Register Now</BtnWarn>
      </LinkWrap>
    </MatDialog>
  );
}
