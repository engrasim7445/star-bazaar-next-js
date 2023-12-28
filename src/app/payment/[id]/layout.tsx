import {
  BtnSuccess,
  CardImageUtil,
  Iconz,
  InputWrapper,
  ProfessionBage,
  Txt,
} from '@/shared';
import { ContainerBB, ContainerC } from '@/theme';
import { GridHeading } from '../heading-grid';
import { PaymentCreatorDetail } from '../payment-creator-detail';

export default function PaymentBusiness({ children }: any) {
  const backgroundColor = 'bg-green1';
  const title = 'Business Payment';
  const icon = 'business_center';
  return (
    <ContainerBB>
      {/* <PaymentCreatorDetail>{children}</PaymentCreatorDetail> */}
      <ContainerC className="mb-3">
        <GridHeading
          className="bg-white1 text-black"
          heading="Shoutout Amount"
          icon="account_balance_wallet"
        />
        <div className="col-span-12 flex justify-between">
          <span>In Store Amount</span>
          <span>PKR 1,000</span>
        </div>
        <div className="col-span-12 flex justify-between">
          <span>Use Wallet</span>
          <span>Toggle</span>
        </div>
      </ContainerC>
      <ContainerC>
        <GridHeading
          className="bg-green1"
          heading="Payment Methods"
          icon={'shopping_cart'}
        />
        <InputWrapper>
          <Txt name="businessName" lbl="Business Name" />
        </InputWrapper>

        <div className="col-span-12 flex justify-center">
          <BtnSuccess className="w-40 py-2">Order Shoutout</BtnSuccess>
          {/* <BtnWarn>Submit</BtnWarn> */}
        </div>
      </ContainerC>
    </ContainerBB>
  );
}
