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
          <div className="w-4/12 sm:2/12 md:w-2/12  me-3 ">
          {/* rounded-br-none */}
            <CardImageUtil className='rounded-tr-none ' />
          </div>
          <div className="w-10/12 relative">
            <div className="absolute bottom-1 left-1">
              <h1 className="text-xl xl:text-2xl">Here goes the Creator Name</h1>
              <h3>
                <ProfessionBage item="Influencer" />
                <ProfessionBage item="Female Actor" />
                <ProfessionBage item="Musician" />
              </h3>
            </div>

            <div className="absolute -top-2 md:-top-4 right-1 w-full flex flex-row md:flex-row-reverse">
              <Followerz lbl="Total Followers" val="335.221 K" />
              <Followerz lbl="Starting Price" val="PKR 999,999,9" />
            </div>
          </div>
        </div>
      </ContainerC>
      <ContainerC>
        <div className="col-span-12 -m-3 mb-1 ps-4 flex items-center bg-green1 p-1">
          <span className="flex items-center">
            <Iconz
            // edit_note
              icon="business_center"
              className="me-3"
              stl={{ fontSize: '40px' }}
            />
          </span>
          <h1 className="text-2xl w-52"> Business Inquiry</h1>
        </div>
        
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
      </ContainerC>
    </ContainerB>
  );
}
export function Followerz({ val, lbl }: any) {
  return (
    <div>
      <h4 className="text-sm md:text-md xl:text-2xl w-28 md:w-32 xl:w-40 flex justify-center me-2">{lbl}</h4>
      <h4 className="text-md md:text-xl xl:text-2xl bg-yellow1 w-28 md:w-32 xl:w-40 flex justify-center me-2 rounded-lg py-1 text-black">
        <b>{val}</b>
      </h4>
    </div>
  );
}
