import { CardImageUtil, LinkWrap } from '@/shared';
import { Timer } from '@mui/icons-material';
export function HomeCard({ d }: any) {
  let pricing = 0
  if(d.pricing[0].isActive) {
    pricing = d.pricing[0].amount
  } else if(d.pricing[1].isActive) {
    pricing = d.pricing[1].amount
  } else if(d.pricing[2].isActive) {
    pricing = d.pricing[2].amount
  } else {
    pricing = 0.00
  }
  return (
    <div className="col-span-2 md:col-span-1 h-full text-sm xl:text-xl text-white ">
      <LinkWrap url={`/creator/${d._id}`}>
        <CardImageUtil url={d?.photoUrl} className="h-52 sm:h-72 md:h-52 xl:h-72 2xl:h-80" />
        <div className="pt-2">
          <div className="md:text-xl h-10">
            <h3 className="sm:text-xl" style={{ lineHeight: 0.85 }}>
              {d.fullName}
            </h3>
          </div>
          <h3 className="col-span-5 leading-none h-4">Profession</h3>
          <div className="col-span-5 flex justify-between items-center">
            <h3 className="h-5">PKR { pricing } </h3>
            <div className="flex items-center text-yellow-300">
              <Timer />
              <h3 className="h-5 ">{d.responseTime} {d.responseTime > 1 ? 'Days': 'Day'}</h3>
            </div>
          </div>
        </div>
      </LinkWrap>
    </div>
  );
}
