import {
  CardImageUtil,
  Iconz,
  ProfessionBage,
} from '@/shared';
import { ContainerB, ContainerC } from '@/theme';

export default function PaymentBusiness({ children }: any) {
  return (
    <ContainerB>
      <ContainerC className="mb-3 p-0 pe-2">
        {/* lg:col-span-8 */}
        <div className="col-span-12 flex justify-start items-center">
          <div className="w-4/12 sm:2/12 md:w-2/12 ">
            {/* rounded-br-none */}
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
        {children}
      </ContainerC>
    </ContainerB>
  );
}
export function Followerz({ val, lbl }: any) {
  return (
    <div>
      <h4 className="text-sm md:text-md xl:text-2xl w-28 md:w-32 xl:w-40 flex justify-center">
        {lbl}
      </h4>
      <h4 className="text-md md:text-xl xl:text-2xl bg-yellow1 w-28 md:w-32 xl:w-40 flex justify-center rounded-lg py-0 md:py-1 text-black">
        <b>{val}</b>
      </h4>
    </div>
  );
}
