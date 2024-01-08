import {
  BtnWarn,
  ChksPrivacy_Terms,
  GridHeading,
  InputWrapper,
  Txt,
  TxtPassword,
} from '@/shared';
import {
  ContainerGrid_BG,
  ContainerHeight,
  CardBG_MD,
  CardBG_SM,
} from '@/theme';
import { AccountBox } from '@mui/icons-material';

export default function SignUpCustomer() {
  return (
    <CardBG_MD>
      <ContainerGrid_BG>
        <GridHeading className="bg-white1" heading="Signup Customer">
          <AccountBox />
        </GridHeading>
        <InputWrapper>
          <Txt name="fullName" lbl="Full Name" />
        </InputWrapper>
        <InputWrapper className="md:col-span-6">
          <Txt name="email" lbl="Email" />
        </InputWrapper>
        <InputWrapper className="md:col-span-6">
          <Txt name="mobile" lbl="Mobile Number" />
        </InputWrapper>
        <InputWrapper className="md:col-span-6">
          <TxtPassword name="password" lbl="Password" />
        </InputWrapper>
        <InputWrapper className="md:col-span-6">
          <TxtPassword name="confirmPassword" lbl="Confirm Password" />
        </InputWrapper>
        <div className="col-span-12 flex flex-col">
          <ChksPrivacy_Terms />
          <BtnWarn className="self-center w-52"> Register Now</BtnWarn>
        </div>
      </ContainerGrid_BG>
    </CardBG_MD>
  );
}
