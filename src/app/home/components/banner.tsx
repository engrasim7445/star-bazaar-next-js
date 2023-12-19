'use client';
import Image from 'next/image';

export function Banners() {
  return (
    <>
      <Image
        alt="Image"
        width={600}
        height={300}
        style={{ width: '100%', height: 'auto' }}
        className="block md:hidden"
        src="/other/banner-small.webp"
      />
      <Image
        alt="Image"
        width={1300}
        height={300}
        style={{ width: '100%', height: 'auto' }}
        className="hidden md:block lg:hidden"
        src="/other/banner-medium.webp"
      />
      <Image
        alt="Image"
        width={1600}
        height={300}
        style={{ width: '100%', height: 'auto' }}
        className="hidden lg:block"
        src="https://dqc65nwcqwvpl.cloudfront.net/new_banner_meta_1.webp"
      />
    </>
  );
}

{
  /* <Image
alt="Image"
// layout='cover'
fill={true}
style={{ objectFit: 'cover', width: '100%' }}
className="hidden lg:block"
src="https://dqc65nwcqwvpl.cloudfront.net/new_banner_meta_1.webp"
/> */
}
{
  /* <div
          className="grid "
          style={{ marginTop: '-300px', cursor: 'pointer' }}>
          <div className="col-span-1" ></div>
          <div className="col-span-1" ></div>

        </div> */
}
{
  /* onClick={gotoBusiness()} */
}
{
  /* onClick={targetLarge.scrollIntoView()} */
}
