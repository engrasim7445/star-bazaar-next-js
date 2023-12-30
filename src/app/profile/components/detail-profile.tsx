import { CardImageUtil, ProfessionBage } from '@/shared';

export function DetailProfile() {
  return (
    <>
      <div className="col-span-3 ">
        <CardImageUtil className="h-5 me-3" />
      </div>
      <div className="col-span-9">
        <h2 className="text-2xl">Name of the Creator</h2>
        <h2 className="text-xl">
          Starting From :{' '}
          <b className="text-yellow px-3 rounded-md ">PKR 20,00,000</b>
        </h2>
        <h2 className="text-xl mb-1">
          Response In : <b className="text-orange px-3 rounded-md ">3 Days</b>
        </h2>
        <h3>
          <ProfessionBage item="Influencer" />
          <ProfessionBage item="Female Actor" />
          <ProfessionBage item="Musician" />
        </h3>
        {/* style={{textDecoration: '0.01px underline wavy yellow'}} */}
        <p className="w-11/12 mt-3 p-2 min-h-[70px] bg-blue2 rounded-md text-justify">
          Description of the Creator would display here Description of the
          Creator would display here Description of the Creator would display
          here Description of the Creator would display here Description of the
          Creator would display here
        </p>
      </div>
    </>
  );
}
