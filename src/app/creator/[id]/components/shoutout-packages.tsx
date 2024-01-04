import { LinkWrap } from '@/shared';

export function ShoutoutPackages() {
  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-5 row-span-3 order-3 lg:order-2">
      <h5 className="text-2xl mb-1">
        <b>Select Shoutout Package</b>
      </h5>
      <h5 className="text-xl leading-none">Personal Shoutout</h5>
      <ShoutoutPackageLayer className="bg-purple-gredient">
        <LinkWrap isRelative={true} url="standard">
          <h3 className="text-3xl">
            Standard Shoutout <b>For Fans</b>
          </h3>
          <h4 className="text-4xl">
            <b> PKR 100,000 </b>
          </h4>
          <p>Hello _recipient_name_, this is _Creator_Name. </p>
          <p className='leading-none'>Happiest birthday on behalf of _sender_name_</p>
        </LinkWrap>
      </ShoutoutPackageLayer>
      <ShoutoutPackageLayer  className="bg-orange-gredient">
        <LinkWrap isRelative={true} url="custom">
          <h3 className="text-3xl">
            Custom Shoutout <b>For Fans</b>
          </h3>
          <h4 className="text-4xl">
            <b> PKR 100,000 </b>
          </h4>
          <p> &nbsp;</p>
          <p className='leading-none'>Create your own personalize message</p>
        </LinkWrap>
      </ShoutoutPackageLayer>
      <h5 className="text-xl leading-none">Business Shoutout</h5>
      <ShoutoutPackageLayer className="bg-green-gredient">
        <LinkWrap isRelative={true} url='business'>
          <h3 className="text-3xl">Business Shoutout</h3>
          <h4 className="text-4xl">
            <b> PKR 100,000 </b>
          </h4>
          <p> &nbsp;</p>
          <p className='leading-none'>Promote Your Business</p>
        </LinkWrap>
      </ShoutoutPackageLayer>
    </div>
  );
}
function ShoutoutPackageLayer({ children, className }: any) {
  return (
    <div
      className={`justify-center items-center px-5 py-4 rounded-2xl text-center my-3 cursor-pointer opacity-90 hover:opacity-100   transition-all duration-400 ${className} hover-effect`}
    >
      {children}
    </div>
  );
}
