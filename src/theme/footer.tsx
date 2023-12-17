import { AppLink, Iconz, Imgz } from '@/shared';
import { Contentz } from '.';

export function Footer() {
  return (
    <Contentz>
      <div className="col-span-12 md:col-span-2">
        <Imgz />
      </div>
      <div className="col-span-5 md:col-span-4 row-span-2 text-orange-600">
        <h5 className="mb-3 text-xl">Quick Links</h5>
        <div className="inline-block">
          <AppLink url="./about-us" clz="mb-2 hover:text-yellow-200 block ">
            <i className="material-icons px-3">link</i> About Us
          </AppLink>
          <AppLink url="./contact-us" clz="mb-2 hover:text-yellow-200">
            <i className="material-icons px-3">link</i> Contact Us
          </AppLink>
          <AppLink url="faqs" clz="mb-2 hover:text-yellow-200">
            <i className="material-icons px-3">link</i> FAQs
          </AppLink>
          <AppLink url="term-and-conditions" clz="mb-2 hover:text-yellow-200">
            <i className="material-icons px-3">link</i> Terms & Conditions
          </AppLink>
          <AppLink url="privacy-policy" clz="mb-2 hover:text-yellow-200">
            <i className="material-icons px-3">link</i> Privacy Policy
          </AppLink>
        </div>
      </div>
      <div className="col-span-7 md:col-span-3 text-orange-600">
        <h5 className="mb-3 text-xl">Connect with us</h5>
        <div className='flex justify-start relative'>
          <Imgz width="40" className='mx-1' />
          <Imgz width="40" className='mx-1'/>
          <Imgz width="40" className='mx-1'/>
          <Imgz width="40" className='mx-1'/>
        </div>
      </div>
      <div className="col-span-7 md:col-span-3 text-orange-600">
        <h5 className="my-3 md:mt-0 text-xl">Download our App</h5>
        <div className='flex justify-start relative'>
          <Imgz width="40" className='mx-1'/>
          <Imgz width="40" className='mx-1'/>
        </div>
        <h5 className="my-3 text-xl">Secure Payment Methods</h5>
        <div className='flex justify-start relative'>
          <Imgz width="40" className='mx-1'/>
          <Imgz width="40" className='mx-1'/>
          <Imgz width="40" className='mx-1'/>
        </div>
      </div>
      <div className="col-span-12 row-span-1 text-center pt-3">
        <h6>
          &copy; STAR TECH BAZAAR (PRIVATE) LIMITED 2023. All Rights Reserved.
        </h6>
      </div>
    </Contentz>
  );
}
