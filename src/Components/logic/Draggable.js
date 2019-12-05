import React, { useState, useEffect, useRef, useCallback } from 'react';

const Draggable = ({ style, children }) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [grabbing, setGrabbing] = useState(false);
  const currentPos = useRef(0);
  const originalCenterPos = useRef(0);
  const currentXdiff = useRef(0);
  const centerX = useRef(0);
  const centerY = useRef(0);
  const windowW = useRef(0);
  const windowH = useRef(0);
  const prevWindW = useRef(0);
  const prevWindH = useRef(0);

  const lenghtDiff = prevWindW.current - windowW.current;
  const heightDiff = prevWindH.current - windowH.current;
  console.log(windowH.current, prevWindH);
  useEffect(() => {
    prevWindH.current = window.innerHeight;
    prevWindW.current = window.innerWidth;
    windowW.current = window.innerWidth;
    windowH.current = window.innerHeight;
  }, []);

  useEffect(() => {
    if (
      windowW.current !== window.innerWidth ||
      windowH.current !== window.innerHeight
    ) {
      prevWindH.current = windowH.current;
      prevWindW.current = windowW.current;
      windowW.current = window.innerWidth;
      windowH.current = window.innerHeight;
    }
    console.log('inside useeffetc');
  }, [grabbing]);

  /*useEffect(() => {
    window.addEventListener('resize', handleR);
    function handleR() {
      originalCenterPos.current = 0;
    }
    return () => window.removeEventListener('resize', handleR);
  }, []);
*/
  function handleMouseDown(e) {
    const {
      x,
      y,
      width,
      height
    } = e.currentTarget.childNodes[0].getBoundingClientRect();
    const { pageX, pageY } = e;
    console.log(lenghtDiff);
    centerX.current = width / 2 + x + window.scrollX;
    centerY.current = height / 2 + y + window.scrollY;
    console.log(x + window.scrollX, pageX);
    if (!originalCenterPos.current) {
      currentPos.current = { x: pageX, y: pageY };
      originalCenterPos.current = { x: centerX.current, y: centerY.current };
    } else {
      const xDiff = pageX - centerX.current;
      const yDiff = pageY - centerY.current;
      currentXdiff.current = xDiff;
      const rX = originalCenterPos.current.x + xDiff;
      const rY = originalCenterPos.current.y + yDiff;
      currentPos.current = { x: rX, y: rY };
    }
    setGrabbing(true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }
  function handleMouseMove(e) {
    const { pageX, pageY } = e;
    const newTop = pageY - currentPos.current.y;
    const newLeft = pageX - currentPos.current.x;
    console.log(windowW.current, prevWindW.current, pageX);
    setLeft(newLeft);
    setTop(newTop);
  }

  function handleMouseUp(e) {
    setGrabbing(false);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  }

  return (
    <div
      id="holdingDiv"
      onMouseDown={handleMouseDown}
      style={{
        ...style,
        top: `${top}px`,
        left: `${left}px`,
        cursor: grabbing ? 'move' : 'default',
        display: 'inline-block',
        position: 'relative',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};
export default Draggable;
