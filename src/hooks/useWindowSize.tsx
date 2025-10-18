import { useState, useEffect } from 'react';

export type WindowSizeReturn = {
  width: number,
  height: number
}

type WindowSizeFunc = () => WindowSizeReturn;

export const useWindowSize: WindowSizeFunc = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return { width, height };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // Set size once on mount
    setWindowDimensions(getWindowDimensions());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}