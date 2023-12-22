import { CardImageUtil, Iconz, LinkWrap } from '@/shared';


export function HomeCard({ d }: any) {

  return (
    <div className="col-span-2 md:col-span-1 h-full text-sm xl:text-xl text-white ">
      <LinkWrap url='/detail/101'>
        <CardImageUtil url={d?.image} clz1="h-52 sm:h-72 md:h-52 xl:h-72 2xl:h-80" />
        <div className="pt-2">
          <div className="md:text-xl h-10">
            <h3 className="sm:text-xl" style={{ lineHeight: 0.85 }}>
              Name of the Creator of Length goes here
            </h3>
          </div>
          <h3 className="col-span-5 leading-none h-4">Profession</h3>
          <div className="col-span-5 flex justify-between items-center">
            <h3 className="h-5">PKR 1000 </h3>
            <div className="flex items-center text-yellow-300">
              <Iconz icon="timer" />
              <h3 className="h-5 ">10 Days</h3>
            </div>
          </div>
        </div>
      </LinkWrap>
    </div>
  );
}
