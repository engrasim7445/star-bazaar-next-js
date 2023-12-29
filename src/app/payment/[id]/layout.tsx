import {
  BtnDefault,
  BtnSuccess,
  Chk,
  GridHeading,
  Iconz,
  InputWrapper,
  LinkWrap,
  PaymentCreatorDetail,
  PaymentMethodButtons,
  Txt,
} from '@/shared';
import { ContainerBB, ContainerC } from '@/theme';

export default function PaymentBusiness({ children }: any) {
  const backgroundColor = 'bg-green1';
  const title = 'Business Payment';
  const icon = 'business_center';
  return (
    <ContainerBB>
      <PaymentCreatorDetail>{children}</PaymentCreatorDetail>
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
         <div className="col-span-12 flex justify-center gap-2">
          <PaymentMethodButtons lbl="EasyPaisa" isActive={true} />
          <PaymentMethodButtons lbl="JazzCash" />
          <PaymentMethodButtons lbl="1 Link" />
          <PaymentMethodButtons lbl="Visa / Master" />
        </div>
        <InputWrapper>
          <Txt name="mobileNo" lbl="Mobile Number" />
        </InputWrapper>
       
        <div className="col-span-12 mt-4">
          <Chk name='userPermit'>
          You permit to StarBazaar to use your order video for promotions on the starbazaar platform,<br className='hidden md:block'/> social media and for other promotional purposes.
          </Chk>
          <Chk name='termsAndCondition'>
            I agree to Star Tech Bazaar Pvt. Ltd &nbsp;
            <LinkWrap url='#' className='text-orange underline'>
              Terms & Conditions
            </LinkWrap>
          </Chk>
          <Chk name='privacyPolicy'>
            I agree to Star Tech Bazaar Pvt. Ltd &nbsp;
            <LinkWrap url='#' className='text-orange underline'>
              Privacy & Policy
            </LinkWrap>
          </Chk>
        </div>
        <div className="col-span-12 flex justify-end">
          <BtnSuccess className="w-40 py-2">Order Shoutout</BtnSuccess>
          {/* <BtnWarn>Submit</BtnWarn> */}
        </div>
      </ContainerC>
    </ContainerBB>
  );
}
