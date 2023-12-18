import { useState, useEffect } from 'react';

export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: 700,
    height: 600,
    screen: 3
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window?.innerWidth
      let screen = 0;
      if (width < 640) screen =  1;
      else if (width >= 640 && width < 768) screen =  2;
      else if (width >= 768 && width < 1024) screen =  3;
      else if (width >= 1024 && width < 1280) screen =  4;
      else if (width >= 1280 && width < 1536) screen =  5;
      else if(width >= 1536){ screen =  6}
    
      setScreenSize({
        screen,
        width,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};