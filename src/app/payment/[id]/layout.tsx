import {
  BtnSuccess,
  Chk,
  ChksPrivacy_Terms,
  GridHeading,
  InputWrapper,
  LinkWrap,
  PaymentMethodButtons,
  Txt,
  TxtCopy,
} from '@/shared';
import { CardBG_SM, ContainerGrid_BG } from '@/theme';
import {
  AccountBalance,
  AccountBalanceWallet,
  CreditCard,
  Devices,
  LocalAtm,
  Payment,
  ShoppingCart,
} from '@mui/icons-material';
import { Switch } from '@mui/material';

export default function PaymentLayout({ children }: any) {
  const backgroundColor = 'bg-green1';
  const title = 'Business Payment';
  const icon = 'business_center';

  return (
    <CardBG_SM>
      {/* <PaymentCreatorDetail>{children}</PaymentCreatorDetail> */}
      <ContainerGrid_BG className="mb-3">
        <GridHeading className="bg-white1 text-black" heading="Shoutout Amount">
          <AccountBalanceWallet />
        </GridHeading>
        <div className="col-span-12 flex justify-between">
          <span>In Store Amount</span>
          <span>PKR 1,000</span>
        </div>
        <div className="col-span-12 flex justify-between">
          <span>Use Wallet</span>
          <span>
            <Switch color="warning" />
          </span>
        </div>
      </ContainerGrid_BG>
      <ContainerGrid_BG>
        <GridHeading className="bg-green1" heading="Payment Methods">
          <ShoppingCart />
        </GridHeading>
        <div className="col-span-12 flex justify-center gap-2">
          <PaymentMethodButtons
            className="h-12"
            icon="payments"
            lbl="EasyPaisa"
            isActive={true}
          >
            <Payment />
          </PaymentMethodButtons>
          <PaymentMethodButtons
            className="h-12"
            icon="local_atm"
            lbl="JazzCash"
          >
            <LocalAtm />
          </PaymentMethodButtons>
          <PaymentMethodButtons
            className="h-12"
            icon="account_balance"
            lbl="1 Link (IBFT)"
          >
            <AccountBalance />
          </PaymentMethodButtons>
          <PaymentMethodButtons
            className="h-12"
            icon="credit_card"
            lbl="Visa / Master"
          >
            <CreditCard />
          </PaymentMethodButtons>
        </div>

        <InputWrapper className="hidden">
          <Txt name="mobileNo" lbl="Mobile Number" />
        </InputWrapper>

        <div className="col-span-12 flex justify-cente">
          {/* mobile_friendly */}
          <PaymentMethodButtons
            className="w-full h-12"
            icon="devices"
            lbl="Bank Transfer"
          >
            <Devices />
          </PaymentMethodButtons>
        </div>
        <div className="col-span-12 hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
            <TxtCopy
              lbl="Bank Name"
              val="JS BANK LIMITED"
              className="col-span-1"
            />
            <TxtCopy
              lbl="Account Title"
              val="Star Tech Bazaar Pvt Ltd"
              className="col-span-1"
            />
            <TxtCopy
              lbl="Account Number"
              val="xxxxxxxxxxxx"
              className="col-span-1"
            />
            <TxtCopy
              lbl="IBAN Number"
              val="xxxxxxxxxxxx"
              className="col-span-1"
            />
            <TxtCopy
              lbl="Phone Number"
              val="xxxxxxxxxxxx"
              className="col-span-1"
            />
            <TxtCopy lbl="Email" val="xxxxxxxxxxxx" className="col-span-1" />
          </div>
        </div>

        <div className="col-span-12 mt-4">
          <Chk name="userPermit" checked={true}>
            You permit to StarBazaar to use your order video for promotions on
            the starbazaar platform,
            <br className="hidden md:block" /> social media and for other
            promotional purposes.
          </Chk>
          <ChksPrivacy_Terms />
        </div>
        <div className="col-span-12 flex justify-end">
          <BtnSuccess className="w-40 py-2">Order Shoutout</BtnSuccess>
          {/* <BtnWarn>Submit</BtnWarn> */}
        </div>
      </ContainerGrid_BG>
    </CardBG_SM>
  );
}
