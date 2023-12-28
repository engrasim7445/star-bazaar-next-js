'use client';
import Image from 'next/image';
const src = 'https://dqc65nwcqwvpl.cloudfront.net/brands_payment_security/1701778279455-Group%2020985.png'
export function Imgz(props: any) {
  const def = {
    ...{src, height:100, width: 100 },
    ...props
  }
  return (
    <Image
      src={def.src}
      alt="image link"
      width={def.width}
      height={def.height}
      className={def.className}
      />
      // quality={100}
  );
}
