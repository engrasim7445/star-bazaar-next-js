import { LinkFooter, Iconz, Imgz } from '@/shared';
import { Container } from '.';

export function Footer() {
  return (
    <Container clz1='bg-blue2' clz2='pt-6 text-orange-400'>
      <div className="col-span-12 md:col-span-2">
        <Imgz />
      </div>
      <div className="col-span-5 md:col-span-4 row-span-2 ">
        <h5 className="mb-3 text-xl">Quick Links</h5>
        <div className="inline-block">
          <LinkFooter url="./about-us" lbl='About us' />
          <LinkFooter url="./contact-us" lbl='Contact Us'/>
          <LinkFooter url="faqs" lbl='FAQs'/>
          <LinkFooter url="term-and-conditions" lbl='Terms & Conditions' />
          <LinkFooter url="privacy-policy" lbl='Privacy Policy' />
        </div>
      </div>
      <div className="col-span-7 md:col-span-3">
        <h5 className="mb-3 text-xl">Connect with us</h5>
        <div className='flex justify-start relative'>
          <Imgz width="40" className='mx-1' />
          <Imgz width="40" className='mx-1'/>
          <Imgz width="40" className='mx-1'/>
          <Imgz width="40" className='mx-1'/>
        </div>
      </div>
      <div className="col-span-7 md:col-span-3 ">
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
      <div className="col-span-12 row-span-1 text-center pt-3 text-white">
        <h6>
          &copy; STAR TECH BAZAAR (PRIVATE) LIMITED 2023. All Rights Reserved.
        </h6>
      </div>
    </Container>
  );
}
