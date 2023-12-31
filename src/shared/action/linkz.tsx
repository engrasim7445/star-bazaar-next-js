'use client';
import Link from 'next/link';
import { Iconz } from '..';
import { usePathname, useRouter } from 'next/navigation';


// For Images and Buttons
export function LinkWrap({ url, children, isRelative, className }: any) {
  const pathName = usePathname();
  const finalURL = isRelative ? pathName + '/' + url : url;
  return <Link href={finalURL}  className={`h-full cursor-pointer ${className}`}>{children}</Link>;
}

export function LinkFooter({ url, className, lbl, icon }: any) {
  icon = icon || 'link'
  return (
    <Link
      href={url}
      className={`flex items-center mb-2 hover:text-yellow-200 ${className}`}>
      <Iconz icon={icon} className="pe-3" />
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
      className={`flex items-center mb-2 hover:text-yellow-200 ${className}`}>
      <Iconz icon={icon} className="pe-3" />
      <span>{lbl}</span>
    </Link>
  );
}
export function LinkNav({ lbl, icon, className, url }: any) {
  url = url || '#'
  return (
    <Link href={url} className={`flex flex-col text-center cursor-pointer text-orange ${className}`}>
      <Iconz icon={icon} />
      <span> {lbl}</span>
    </Link>
  );
}



