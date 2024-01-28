'use client';
import { HomeCard } from '.';
import { BtnPrimary, LinkWrap } from '@/shared';
import { LocalActivity } from '@mui/icons-material';

export function HomeRow({ d, noCategory }: any) {
  const row = d.creators || d.data
  return (
    <>
      <div className={`col-span-12 flex justify-between items-start mb-1 mt-4 pb-1 ${row.length ? '': 'hidden'}`}>
        <h2 className="text-2xl flex items-center">
          <LocalActivity className="text-orange me-2" />
          {d.name}
        </h2>
        <LinkWrap url="/search?category=fashion" className={`${noCategory ? 'hidden' : ''}`}>
          <BtnPrimary>View All</BtnPrimary>
        </LinkWrap>
      </div>
      <div className="col-span-12">
        <div className="grid grid-cols-6 gap-1 md:gap-2 xl:gap-4">
          {
            row.map((x: any, i: any) => (
              <HomeCard d={x} key={x.fullName + i} />
            ))
          }
        </div>
      </div>
    </>
  );
}

// export function Card_6() {
//   return (
//     <>
//       <HomeCard d={{ image: '/temp/mikaal.webp' }} />
//       <HomeCard d={{ image: '/temp/mahira-khan.webp' }} />
//       <HomeCard />
//       <HomeCard />
//       <HomeCard />
//       <HomeCard />
//     </>
//   );
// }
