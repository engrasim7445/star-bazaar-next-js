// 'use client'
import Image from "next/image";

export function CardImageUtil({url, className, clz2}: any) {
  url = url || 'https://dqc65nwcqwvpl.cloudfront.net/1701759239804-EYVxlOSXsAExOpX.jpg';
  return (<>
  <div className={`rounded-xl overflow-hidden ${className}`}>
        <Image
          alt="Image"
          width={150}
          height={200}
          objectFit="cover"
          style={{ height: '100%', width: '100%' }}
          src={url}
          className={`hover:scale-110 w-full h-full transition duration-500 cursor-pointer object-cover ${clz2}`}
        />
      </div>
  </>)
}