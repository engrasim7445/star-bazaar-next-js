import { Iconz, LinkWrap } from '@/shared';

export function OrderShoutoutLayout({ children }: any) {

  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-5 row-span-3 order-3 lg:order-2">
      <h5 className="text-2xl mb-3 flex items-center">
        <LinkWrap isRelative={true} url="../" className='flex items-center'>
          <Iconz icon="arrow_back_ios" className="me-1" />
        </LinkWrap>
        Order Shoutout
      </h5>
      <p className="mb-2">
        Shoutouts from your favourite star for any occasion
      </p>
      <div className="w-100 bg-blue2 rounded-2xl overflow-hidden pb-5">
        {children}
      </div>
      {/* <h5 className="text-xl">Select Shoutout Package</h5> */}
    </div>
  );
}
