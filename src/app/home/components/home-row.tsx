import { ContainerXL } from '@/theme';
import { HomeCard } from '.';
import { BtnPrimary, Iconz } from '@/shared';

export function HomeRow({ d }: any) {
  return (
    <>
      <div className="col-span-12 flex justify-between items-start mb-1 mt-4 pb-1" >
        <h2 className="text-2xl flex items-center"> 
        <Iconz icon='hotel_class' className='text-orange me-2' />
         Heading for Row
         </h2>
        <BtnPrimary className='text-md py-1'>View All</BtnPrimary>
      </div>
      <div className="col-span-12">
        <div className="grid grid-cols-6 gap-1 md:gap-2 xl:gap-4">
          <Card_6 />
          {/* <HomeCard d={{ image: '/temp/mikaal.webp' }} /> */}
        </div>
      </div>
    </>
  );
}
export function Card_6() {
  return (
    <>
      <HomeCard d={{ image: '/temp/mikaal.webp' }} />
      <HomeCard d={{ image: '/temp/mahira-khan.webp' }} />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </>
  );
}
