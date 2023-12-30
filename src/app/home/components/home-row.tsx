import { ContainerXL } from '@/theme';
import { HomeCard } from '.';

export function HomeRow({ d }: any) {
  return (
    <>
      <div className="col-span-12 flex justify-between mb-2">
        <h2 className="text-2xl">Heading for Row</h2>
        <div className="col-span-4">Buttons</div>
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
