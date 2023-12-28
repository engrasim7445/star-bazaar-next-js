import { GridHeading } from '@/app/payment/heading-grid';
import {
  Followerz,
  PaymentCreatorDetail,
} from '@/app/payment/payment-creator-detail';
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

export default function BusinessInquiry() {
  return (
    <ContainerB>
      <PaymentCreatorDetail>
        <Followerz lbl="Total Followers" val="335.221 K" />
        <Followerz lbl="Starting Price" val="PKR 999,999,9" />
      </PaymentCreatorDetail>

      {/* <ContainerC className="mb-3 p-0 pe-2">
        <div className="col-span-12 flex justify-start items-center">
          <div className="w-4/12 sm:2/12 md:w-2/12 ">
            <CardImageUtil className="rounded-tr-none -m-3 me-3" />
          </div>
          <div className="w-10/12 relative pb-1">
            <div className="absolute bottom-0  mb-1 md:mb-0">
              <h1 className="text-xl xl:text-2xl">
                Here goes the Creator Name
              </h1>
              <h3>
                <ProfessionBage item="Influencer" />
                <ProfessionBage item="Female Actor" />
                <ProfessionBage item="Musician" />
              </h3>
            </div>

            <div className="absolute top-0 right-1 w-96 flex justify-end gap-2">
              <Followerz lbl="Total Followers" val="335.221 K" />
              <Followerz lbl="Starting Price" val="PKR 999,999,9" />
            </div>
          </div>
        </div>
      </ContainerC> */}
      <ContainerC>
        <GridHeading
          className="bg-green1"
          heading="Business Inquiry"
          icon="assignments"
        />
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
      </ContainerC>
    </ContainerB>
  );
}