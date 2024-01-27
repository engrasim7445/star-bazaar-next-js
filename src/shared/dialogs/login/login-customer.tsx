'use client';
import { Apple, Facebook, Google } from '@mui/icons-material';
import { DialogLoginBase } from './login-base';
import { BtnDefault } from '@/shared';

export function DialogLoginCustomer() {
  return (
    <DialogLoginBase
      dialogName="LoginCustomer"
      heading="Customer Login"
      type="customer"
    >
      <div className="w-full flex justify-between gap-2">
        <BtnDefault className="w-32 mt-2">
          <Google className="text-red-500" /> &nbsp; Gmail
        </BtnDefault>
        <BtnDefault className="w-32 mt-2">
          <Facebook className="text-sky-500" /> &nbsp; Facebook 
        </BtnDefault>
        <BtnDefault className="w-32 mt-2">
          <Apple /> &nbsp; Apple
        </BtnDefault>
      </div>
    </DialogLoginBase>
  );
}


// export function NavDialogs() {

//   <DialogSketch>some my content</DialogSketch>
// }
