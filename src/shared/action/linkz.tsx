'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowBack, StarRounded } from '@mui/icons-material';
import { Chk } from '..';


// For Images and Buttons
export function LinkWrap({ url, children, isRelative, className, onClick }: any) {
  const pathName = usePathname();
  const finalURL = isRelative ? pathName + '/' + url : url;
  onClick = onClick || ((x: any) => {});
  return <Link href={finalURL} onClick={onClick}  className={`h-full cursor-pointer ${className}`}>{children}</Link>;
}
export function LinkFragement({ fragment, children, className }: any) {
  return <Link href={'#' + fragment}  className={`h-full cursor-pointer ${className}`}>{children}</Link>;
}

export function LinkFooter({ url, className, lbl, children, onClick }: any) {
  onClick = onClick || function () {}
  return (
    <Link
      onClick={onClick}
      href={url}
      className={`flex items-center mb-2 hover:text-yellow-200 ${className}`}>
      {children ? children : <StarRounded className='me-3'/>}
      <span>{lbl}</span>
    </Link>
  );
}
export function LinkBack({ url, className, lbl, icon }: any) {
  icon = icon || 'back_arrow'
  const router = useRouter()
  return (
    <Link
      href=''
      onClick={() => router.back()}
      className={`flex items-center justify-center mb-2 hover:text-yellow-200 ${className}`}>
      <ArrowBack className='me-3'/>
      <span>{lbl}</span>
    </Link>
  );
}
export function LinkNav({ lbl, children, className, url, onClick, isHide }: any) {
  url = url || '#'
  return (!isHide ? null : <Link href={url} onClick={() => onClick()} 
    className={`flex flex-col justify-center text-center  cursor-pointer text-orange hover:text-yellow ${className}`}>
    {children}
    <span>{lbl}</span>
  </Link> );
}
export function ChksPrivacy_Terms() {
  return (
    <>
      <Chk name="termsAndCondition" checked={true}>
        I agree to Star Tech Bazaar Pvt. Ltd &nbsp;
        <LinkWrap url="#" className="text-orange underline">
          Terms & Conditions
        </LinkWrap>
      </Chk>
      <Chk name="privacyPolicy" checked={true}>
        I agree to Star Tech Bazaar Pvt. Ltd &nbsp;
        <LinkWrap url="#" className="text-orange underline">
          Privacy & Policy
        </LinkWrap>
      </Chk>
    </>
  );
}



