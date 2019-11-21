import React, { useState, useRef, useEffect } from 'react';

export function useButtonClicked(initialState) {
  const [buttonClicked, setButtonClicked] = useState(initialState);

  return {
    buttonClicked,
    onButtonClick: e => {
      console.log(buttonClicked);
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
