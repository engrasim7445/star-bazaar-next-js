import { useState, useEffect } from 'react';

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
    screen: 3
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window?.innerWidth
      let screen = 0;
      if (w < 640) screen = 1;
      else if (w >= 640 && w < 768) screen = 2;
      else if (w >= 768 && w < 1024) screen = 3;
      else if (w >= 1024 && w < 1280) screen = 4;
      else if (w >= 1280 && w < 1536) screen = 5;
      else if (w >= 1536) { screen = 6 }

      setScreenSize({
        screen,
        width: w,
        height: window.innerHeight,
      });
    };
    document.addEventListener("DOMContentLoaded", handleResize);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};