'use client';
import Link from 'next/link';
import { Iconz } from '..';
import { usePathname, useRouter } from 'next/navigation';


// For Images and Buttons
export function LinkWrap({ url, children, isRelative, clz }: any) {
  const pathName = usePathname();
  const finalURL = isRelative ? pathName + '/' + url : url;
  return <Link href={finalURL}  className={`h-full cursor-pointer ${clz}`}>{children}</Link>;
}

export function LinkFooter({ url, clz, lbl }: any) {
  return (
    <Link
      href={url}
      className={`flex content-center mb-2 hover:text-yellow-200 ${clz}`}>
      <Iconz icon="link" clz="px-3" />
      <span>{lbl}</span>
    </Link>
  );
}

export function LinkNav({ lbl, icon, clz, url }: any) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(url)} className={`flex flex-col text-center cursor-pointer text-orange ${clz}`}>
      <Iconz icon={icon} />
      <span> {lbl}</span>
    </div>
  );
}



