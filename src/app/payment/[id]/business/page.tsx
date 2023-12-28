import {
  BtnSuccess,
  BtnWarn,
  CardImageUtil,
  Iconz,
  InputWrapper,
  ProfessionBage,
  Txt,
  TxtArea,
} from '@/shared';
import { ContainerB, ContainerC } from '@/theme';

export default function PaymentBusiness() {
  return (
    <>
      <InputWrapper className="md:col-span-6">
        <Txt name="businessName" lbl="Business Name" />
      </InputWrapper>
      <InputWrapper className="md:col-span-6">
        <Txt name="url" lbl="Website or Social URL of Business" />
      </InputWrapper>
      <InputWrapper className="md:col-span-6">
        <Txt name="contactPerson" lbl="Contact Person" />
      </InputWrapper>
      <InputWrapper className="md:col-span-6">
        <Txt name="contactNumber" lbl="Contact Number" />
      </InputWrapper>
      <InputWrapper className="md:col-span-6">
        <Txt name="deliveryDate" lbl="Delivery Date" />
      </InputWrapper>
      <InputWrapper className="md:col-span-6">
        <Txt name="email" lbl="Business Email" />
      </InputWrapper>
      <InputWrapper>
        <TxtArea name="details" lbl="Inquiry Details" />
      </InputWrapper>
      <div className="col-span-12 flex justify-center">
        <BtnSuccess className="w-40 py-2">Submit</BtnSuccess>
        <BtnWarn className="w-40  ms-3 py-2  ">Back to Home</BtnWarn>
        {/* <BtnWarn>Submit</BtnWarn> */}
      </div>
    </>
  );
}
