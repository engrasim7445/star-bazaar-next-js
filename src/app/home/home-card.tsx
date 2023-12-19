import { Iconz } from "@/shared";
import Image from "next/image";

export function HomeCard({d}: any) {
  d = d || {image: 'https://dqc65nwcqwvpl.cloudfront.net/1701759239804-EYVxlOSXsAExOpX.jpg'}
  return (
    <div className="col-span-2 md:col-span-1 h-full 
      text-sm xl:text-xl text-white ">
      <div className="rounded-xl overflow-hidden h-52 sm:h-72 md:h-52 xl:h-72 2xl:h-80">
        <Image
          alt="Image"
          width={150}
          height={250}
          objectFit="cover"
          style={{ height: '100%', width: '100%' }}
          src={d.image}
          className="hover:scale-110 w-full h-full transition duration-500 cursor-pointer object-cover"
        />
      </div>
      <div className=''>
        <div className="md:text-xl h-8">
          <h3 className="leading-4 sm:text-xl">Name of the Creator</h3>
        </div>
        <h3 className="col-span-5">Profession</h3>

        <div className="col-span-5 flex justify-between">
          <h3 >PKR 1000</h3>
          <div className="flex items-center text-yellow-300">
            <Iconz icon="timer" />
            <h3 >10 Days</h3>
          </div>
        </div>
      </div>
    </div>
  );
}