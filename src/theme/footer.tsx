import { AppLink, Iconz } from '@/shared';
import { Contentz } from '.';

export function Footer() {
  return (
    <Contentz>
      <div className="col-span-5 md:col-span-5 row-span-2 text-orange-600 ">
        <h5>Quick Links</h5>
        <AppLink url="./about-us" clz="mt-3 mb-2">
          <i className="material-icons px-3">link</i> About Us
        </AppLink>
        <AppLink url="./contact-us" clz="mb-2">
          <i className="material-icons px-3">link</i> Contact Us
        </AppLink>
        <AppLink url="faqs" clz="mb-2">
          <i className="material-icons px-3">link</i> FAQs
        </AppLink>
        <AppLink url="term-and-conditions" clz="mb-2">
          <i className="material-icons px-3">link</i> Terms & Conditions
        </AppLink>
        <AppLink url="privacy-policy" clz="mb-2">
          <i className="material-icons px-3">link</i> Privacy Policy
        </AppLink>
      </div>
      <div className="col-span-12 row-span-1 text-center pt-3">
        <h6>
          &copy; STAR TECH BAZAAR (PRIVATE) LIMITED 2023. All Rights Reserved.
        </h6>
      </div>
    </Contentz>
  );
}
