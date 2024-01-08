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
  CardBG_LG,
  CardBG_MD,
  CardBG_XL,
  ContainerXL_Height,
} from '@/theme';
import { AccountBox } from '@mui/icons-material';

export default function SignUpCreator() {
  return (
    <CardBG_XL>
      <ContainerGrid_BG>
        <GridHeading className="bg-orange1" heading="Signup Creator">
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
    </CardBG_XL>
  );
}
