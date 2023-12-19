'use client';
import Link from 'next/link';
import { Iconz } from '..';
import { useRouter } from 'next/navigation';


// For Images and Buttons
export function LinkWrap({ url, children }: any) {
  return <Link href={url}  className='h-full cursor-pointer'>{children}</Link>;
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
    <div onClick={() => router.push(url)} className={`flex flex-col text-center cursor-pointer text-orange-400 ${clz}`}>
      <Iconz icon={icon} />
      <span> {lbl}</span>
    </div>
  );
}



