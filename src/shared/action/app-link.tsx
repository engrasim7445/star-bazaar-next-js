
'use client';
import Link from 'next/link';

export function AppLink({url, children, clz}: any) {
  return (
  <Link href={url} className={'flex content-center ' + clz} >
    { children }
  </Link>
  )
}

