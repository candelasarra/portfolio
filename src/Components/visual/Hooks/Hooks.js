import { useState, useRef, useEffect } from 'react';

export function useBiggestZIndex(initialVal) {
  const zIndex = useRef(initialVal);

  return {
    zIndex,
    newZIndex: () => {
      zIndex.current = zIndex.current + 1;
    }
  };
}

export function useButtonClicked(initialState) {
  const [buttonClicked, setButtonClicked] = useState(initialState);

  return {
    buttonClicked,
    onButtonClick: e => {
      setButtonClicked(e.currentTarget.value);
    }
  };
}

export function useInterval() {
  const [blob, setBlob] = useState(0);
  const [blobState, setBlobState] = useState(false);
  const blobInterval = useRef(null);
  const ref = useRef(true);
  const stopInterval = () => {
    ref.current = false;
    clearInterval(blobInterval.current);
  };

  return {
    blob,
    blobState,
    setBlob,
    setBlobState,
    blobInterval,
    stopInterval,
    ref,
    startInterval: () => {
      ref.current = true;
      if (blobState !== true) {
        blobInterval.current = setInterval(() => {
          if (ref.current === true) {
            setBlob(blob => (blob + 1) % 10);
          }
        }, 500);
      }
    }
  };
}

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}
