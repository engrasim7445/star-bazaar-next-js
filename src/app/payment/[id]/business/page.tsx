import {
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
    <ContainerB>
      <ContainerC className="mb-3 p-0 pe-2">
        {/* lg:col-span-8 */}
        <div className="col-span-12  flex justify-start items-center">
          <div className="w-2/12 me-3 ">
            <CardImageUtil />
          </div>
          <div className="w-10/12 flex items-center justify-between">
            <div>
              <h1 className="text-2xl">Here goes the Creator Name</h1>
              <h3>
                <ProfessionBage item="Influencer" />
                <ProfessionBage item="Female Actor" />
                <ProfessionBage item="Musician" />
              </h3>
            </div>

            <div className="flex flex-row">
              <Followerz lbl="Total Followers" val="335.221 K" />
              <Followerz lbl="Starting Price" val="PKR 999,999,9" />
            </div>
          </div>
        </div>
      </ContainerC>
      <ContainerC className='gap-x-10'>
        <div className="col-span-12 flex items-center">
          <span className="-full flex items-center">
            <Iconz icon="edit_note" className="me-3" stl={{ fontSize: '40px' }} />
          </span>
          <h1 className="text-2xl"> Business Payments</h1>
        </div>
        <InputWrapper className='md:col-span-6'>
          <Txt name="businessName" lbl="Business Name" />
        </InputWrapper>
        <InputWrapper className='md:col-span-6'>
          <Txt name="url" lbl="Website or Social URL of Business" />
        </InputWrapper>
        <InputWrapper className='md:col-span-6'>
          <Txt name="contactPerson" lbl="Contact Person" />
        </InputWrapper >
        <InputWrapper className='md:col-span-6'>
          <Txt name="contactNumber" lbl="Contact Number" />
        </InputWrapper>
        <InputWrapper className='md:col-span-6'>
          <Txt name="deliveryDate" lbl="Delivery Date" />
        </InputWrapper>
        <InputWrapper className='md:col-span-6'>
          <Txt name="email" lbl="Business Email" />
        </InputWrapper>
        <InputWrapper >
          <TxtArea name="details" lbl="Inquiry Details" />
        </InputWrapper>
      </ContainerC>
    </ContainerB>
  );
}
export function Followerz({ val, lbl }: any) {
  return (
    <div>
      <h4 className="text-xl w-40 flex justify-center">{lbl}</h4>
      <h4 className="bg-yellow1 me-2 text-2xl w-40 flex justify-center rounded-lg py-1 text-black">
        <b>{val}</b>
      </h4>
    </div>
  );
}
