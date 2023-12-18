// 'use client';
import { Container } from '@/theme';
import Image from 'next/image';

export default function Sliderz() {
  const imgz = [
    'https://dqc65nwcqwvpl.cloudfront.net/assets/images/standard.webp',
    'https://dqc65nwcqwvpl.cloudfront.net/assets/images/custom.webp',
    'https://dqc65nwcqwvpl.cloudfront.net/assets/images/business+.webp',
  ];

  return (
    <Container>
      <div className="col-span-12">
        <div className="grid-cols-3 gap-2 hidden lg:grid" >
          <div className="col-span-1">
            <Image
              alt="Image"
              width={300}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src={imgz[0]}
              className="rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <Image
              alt="Image"
              width={300}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src={imgz[1]}
              className="rounded-lg"
            />
          </div>
          <div className="col-span-1">
            <Image
              alt="Image"
              width={300}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src={imgz[2]}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid-cols-3 gap-6 md:gap-12 grid lg:hidden mx-6 md:mx-12" >
          <div className="col-span-1">
            <Image
              alt="Image"
              width={200}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src='/icon/standard.webp'
              className="rounded-full sm:w-100 md:w-50"
            />
            <h2 className='text-xl text-center wra'>Standard Shoutout</h2>
          </div>
          <div className="col-span-1">
            <Image
              alt="Image"
              width={200}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src='/icon/custom.webp'
              className="rounded-full"
            />
            <h2 className='text-xl text-center'>Custom Shoutout</h2>
          </div>
          <div className="col-span-1">
            <Image
              alt="Image"
              width={200}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src='/icon/business.webp'
              className="rounded-full"
            />
            <h2 className='text-xl text-center'>Business Shoutout</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}
