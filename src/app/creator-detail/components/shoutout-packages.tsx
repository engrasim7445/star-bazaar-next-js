'use client';
import { LinkWrap } from '@/shared';
import { useRouter, usePathname } from 'next/navigation';

export function ShoutoutPackages() {
  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-5 row-span-3 order-3 lg:order-2">
      <h5 className="text-2xl mb-3">
        <b>Select Shoutout Package</b>
      </h5>
      <h5 className="text-xl">Personal Shoutout</h5>
      <ShoutoutPackageLayer clz="bg-purple-gredient">
        <LinkWrap isRelative={true} url="standard">
          <h3 className="text-3xl">
            Standard Shoutout <b>For Fans</b>
          </h3>
          <h4 className="text-4xl">
            <b> PKR 100,000 </b>
          </h4>
          <p>Hello _recipient_name_, this is _Creator_Name. </p>
          <p>Happiest birthday on behalf of _sender_name_</p>
        </LinkWrap>
      </ShoutoutPackageLayer>
      <ShoutoutPackageLayer  clz="bg-orange-gredient">
        <LinkWrap isRelative={true} url="custom">
          <h3 className="text-3xl">
            Custom Shoutout <b>For Fans</b>
          </h3>
          <h4 className="text-4xl">
            <b> PKR 100,000 </b>
          </h4>
          <p> &nbsp;</p>
          <p>Create your own personalize message</p>
        </LinkWrap>
      </ShoutoutPackageLayer>
      <h5 className="text-xl">Business Shoutout</h5>
      <ShoutoutPackageLayer clz="bg-green-gredient">
        <LinkWrap url='../payment/101/business'>
          <h3 className="text-3xl">Business Shoutout</h3>
          <h4 className="text-4xl">
            <b> PKR 100,000 </b>
          </h4>
          <p> &nbsp;</p>
          <p>Promote Your Business</p>
        </LinkWrap>
      </ShoutoutPackageLayer>
    </div>
  );
}
function ShoutoutPackageLayer({ children, clz }: any) {
  return (
    <div
      className={`justify-center items-center p-5 rounded-2xl text-center my-3 cursor-pointer ${clz} hover-effect`}
    >
      {children}
    </div>
  );
}
