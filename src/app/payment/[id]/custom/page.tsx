import {
  BtnSuccess,
  InputWrapper,
  Txt,
} from '@/shared';

export default function PaymentCustom() {
  return (
    <>
      <InputWrapper className="md:col-span-6">
        <Txt name="businessName" lbl="Business Name" />
      </InputWrapper>
      <div className="col-span-12 flex justify-center">
        <BtnSuccess className="w-40 py-2">Order Shoutout</BtnSuccess>
        {/* <BtnWarn>Submit</BtnWarn> */}
      </div>
    </>
  );
}
