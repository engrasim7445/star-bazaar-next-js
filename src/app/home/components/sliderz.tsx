// 'use client';
import { Iconz } from '@/shared';
import { ContainerXL } from '@/theme';
import Image from 'next/image';

export function Sliderz() {
  const imgz = [
    'https://dqc65nwcqwvpl.cloudfront.net/assets/images/standard.webp',
    'https://dqc65nwcqwvpl.cloudfront.net/assets/images/custom.webp',
    'https://dqc65nwcqwvpl.cloudfront.net/assets/images/business+.webp',
  ];

  return (
    <ContainerXL>
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
        <div className="flex items-center text-2xl lg:hidden mb-2">
            <h1 >How to Order  </h1>
            <Iconz icon='not_started' className='ps-1' /> 
          </div>
        <div className="grid-cols-3 gap-3 md:gap-x-32 grid lg:hidden mx-6 md:mx-12" >
          <div className="col-span-1">
            <Image
              alt="Image"
              width={200}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src='/icon/standard.webp'
              className="rounded-full box-border border-2 p-1 border-purple-900"
            />
            {/* border-[#67098c] */}
            <h2 className='text-xl text-center wra'>Standard Shoutout</h2>
          </div>
          <div className="col-span-1">
            <Image
              alt="Image"
              width={200}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src='/icon/custom.webp'
              className="rounded-full border-2 p-1 border-orange-600"
            />
            {/* border-[#e96343] */}
            <h2 className='text-xl text-center'>&nbsp;Custom&nbsp; Shoutout</h2>
          </div>
          <div className="col-span-1">
            <Image
              alt="Image"
              width={200}
              height={200}
              style={{ width: '100%', height: 'auto' }}
              src='/icon/business.webp'
              className="rounded-full border-2 p-1 border-green-700 "
            />
            {/* border-[#055f1a] */}
            <h2 className='text-xl text-center'>Business Shoutout</h2>
          </div>
        </div>
      </div>
    </ContainerXL>
  );
}
