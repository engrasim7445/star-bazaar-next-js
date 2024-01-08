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
  CardBG_XL,
} from '@/theme';
import { AccountBox, Photo, Videocam } from '@mui/icons-material';

export default function SignUpCreator() {
  return (
    <CardBG_XL>
      <ContainerGrid_BG>
        <GridHeading className="bg-orange1" heading="Signup Creator">
          <AccountBox />
        </GridHeading>

        <div className="col-span-12 flex flex-row justify-center gap-3 ">
          <div className='flex justify-center items-center flex-col bg-gray-500 rounded-lg' 
            style={{width: '150px', height: '220px', border: '1px solid white'}}>
            <Photo />
            <h3>Take Professional Photo</h3>
          </div>
          <div className='flex justify-center items-center flex-col bg-gray-500 rounded-lg' 
            style={{width: '150px', height: '220px', border: '1px solid white'}}>
            <Videocam />
            <h3>Upload Introductory Video</h3>
          </div>
        </div>
        <InputWrapper className="md:col-span-4 xl:col-span-4">
          <Txt name="fullName" lbl="Full Name" />
        </InputWrapper>
        <InputWrapper className="md:col-span-4 xl:col-span-4">
          <Txt name="email" lbl="Email" />
        </InputWrapper>
        <InputWrapper className="md:col-span-4 xl:col-span-4">
          <Txt name="mobile" lbl="Mobile Number" />
        </InputWrapper>
        <InputWrapper className="md:col-span-4 xl:col-span-4">
          <Txt name="professions" lbl="Select Multiple Profession" />
        </InputWrapper>
        <InputWrapper className="md:col-span-4 xl:col-span-4">
          <TxtPassword name="password" lbl="Password" />
        </InputWrapper>
        <InputWrapper className="md:col-span-4 xl:col-span-4">
          <TxtPassword name="confirmPassword" lbl="Confirm Password" />
        </InputWrapper>
        <div className="col-span-12 flex flex-col">
          <ChksPrivacy_Terms />
          <BtnWarn className="self-center w-52"> Save & Continue</BtnWarn>
        </div>
      </ContainerGrid_BG>
    </CardBG_XL>
  );
}
