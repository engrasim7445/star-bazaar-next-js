import { CardImageUtil, ProfessionBage } from '@/shared';

export function CreatorDetails() {
  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-7 row-span-1 order-2">
      <div className="grid grid-cols-12 mb-3">
        <div className="col-span-4 md:col-span-6 lg:col-span-3">
          <CardImageUtil className="h-52  me-3" />
        </div>
        <div className="col-span-8 md:col-span-12 lg:col-span-9">
          <h2 className="text-2xl">Name of the Creator</h2>
          <h2 className="text-xl">
            Starting From :{' '}
            <b className="text-yellow px-3 rounded-md ">PKR 20,00,000</b>
          </h2>
          <h2 className="text-xl mb-1">
            Response In : <b className="text-orange px-3 rounded-md ">3 Days</b>
          </h2>
          <h3>
            <ProfessionBage item='Influencer' />
            <ProfessionBage item='Female Actor' />
            <ProfessionBage item='Musician' />
          </h3>
          {/* style={{textDecoration: '0.01px underline wavy yellow'}} */}
          <p className="w-11/12 mt-3 p-2 min-h-[70px] bg-blue2 rounded-md text-justify">
            Description of the Creator would display here Description of the
            Creator would display here Description of the Creator would display
            here Description of the Creator would display here Description of
            the Creator would display here
          </p>
        </div>
      </div>
    </div>
  );
}
