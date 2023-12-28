'use client'
import { OrderShoutoutLayout } from '@/app/creator-detail/components';
import { Iconz, LinkWrap } from '@/shared';

export default function OrderStandard() {

  const dataz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 31, 41, 51, 61, 71];
  return (
    <OrderShoutoutLayout>
      <h2
        className="p-3 bg-purple1 text-xl flex items-center mb-3"
        style={{ borderBottom: '1px solid yellow' }}
      >
        <Iconz icon="celebration" className="me-3" />
        Select Occasion
      </h2>
      <div className="px-4">
        <div className="grid grid-cols-2 gap-y-2 gap-x-5">
          {dataz.map((x) => (
            <LinkWrap key={x} url='/payment/101/standard'>
             <div
              key={x}
              className="col-span-1 flex items-center px-4 py-2 rounded-md bg-blue1 cursor-pointer border border-transparent hover:border-orange-400  "
            >
              <Iconz
                icon="mosque"
                className="me-2 text-green"
                stl={{ fontSize: '30px' }}
              />
              <h2 className="text-xl ms-3">Hajj Shoutout</h2>
            </div>
            </LinkWrap>
           
          ))}
        </div>
      </div>
    </OrderShoutoutLayout>
  );
}
