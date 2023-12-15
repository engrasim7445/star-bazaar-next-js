'use client';
import { useRouter } from "next/navigation";

export function BtnRoute({url, lbl}: any) {
  const router = useRouter();
  return (
    <button type='button' className='btn btn-info btn-sm m-1'
    onClick={() => router.push(url)}>{lbl}</button>
  )
}