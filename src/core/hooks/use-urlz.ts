'use client';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useUrlz() {
  const router = useRouter();
  let [url, setURL] = useState({url: '', isPublic:false});

  useEffect(() => {
    // This function will be called when the route changes
    const handler = (url: string) => {
      console.log('Route is changing to:', url);
      const isPublic = url.indexOf('/public/') != -1
      setURL({url, isPublic})
      // Perform any additional actions you need on route change
    };
    // Subscribing
    router.events.on('routeChangeStart', handler);

    // Cleanup
    return () => {
      router.events.off('routeChangeStart', handler);
    };
  }, [router]);
  return url;
}