'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Iconz } from '..';

export function LinkFooter({ url, clz, lbl }: any) {
  return (
    <Link
      href={url}
      className={`flex content-center mb-2 hover:text-yellow-200 ${clz}`}
    >
      <Iconz icon="link" clz="px-3" />
      <span>{lbl}</span>
    </Link>
  );
}

export function LinkNav({ lbl, icon, clz }: any) {
  return (
    <div className={`flex flex-col text-center cursor-pointer text-orange-400 ${clz}`}>
      <Iconz icon={icon} />
      <span> {lbl}</span>
    </div>
  );
}

export function LinkRouter({ url, children }: any) {
  const router = useRouter();
  return <div onClick={() => router.push(url)}>{children}</div>;
}
