
import { useState, useEffect } from 'react';

export function useIsTop() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleSroll = (e: any) => setScrollY(e.currentTarget.scrollY);
    window.addEventListener('scroll', handleSroll);
    return () => {
      window.removeEventListener('scroll', handleSroll);
    };
  });
  return scrollY === 0 ? true : false;
}