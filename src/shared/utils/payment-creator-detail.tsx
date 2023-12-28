import { CardImageUtil, ProfessionBage } from '@/shared';
import { ContainerC } from '@/theme';

export function PaymentCreatorDetail({ children }: any) {
  return (
    <ContainerC className="mb-3 p-0 pe-2">
      <div className="col-span-12 flex justify-start">
      {/* w-4/12 sm:3/12 md:w-3/12  */}
        <div className="max-w-[120px]">
          <CardImageUtil className="rounded-tr-none -m-3 me-3" />
        </div>
        <div className="w-full relative pb-1">
          <div className="absolute -top-3">
            <h1 className="text-xl xl:text-2xl p-0 m-0">
              Here goes the Creator Name
            </h1>
            <h3>
              <ProfessionBage item="Influencer" />
              <ProfessionBage item="Female Actor" />
              <ProfessionBage item="Musician" />
            </h3>
          </div>
          <div className="absolute -bottom-1 right-0 w-full flex justify-end gap-2">
            {children}
          </div>
        </div>
      </div>
    </ContainerC>
  );
}

export function Followerz({ val, lbl }: any) {
  return (
    <div className=' w-32 xl:w-40 flex justify-center flex-col text-center'>
      <h4 className="text-md ">
        {lbl}
      </h4>
      <h4 className="text-xl xl:text-2xl bg-yellow1 rounded-lg py-1 text-black">
        <b>{val}</b>
      </h4>
    </div>
  );
}
