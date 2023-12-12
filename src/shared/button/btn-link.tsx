
'use client';
import Link from 'next/link';

export default function BtnLink({url, lbl}: any) {
  return (
  <Link href={url} className='m-1' >{lbl}</Link>
  )
}

