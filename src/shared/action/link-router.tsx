'use client';
import { useRouter } from 'next/navigation';

export function LinkRouter({ url, children }: any) {
  const router = useRouter();
  return <div onClick={() => router.push(url)}>{children}</div>;
}
