import React, { useState, useEffect, useRef } from 'react';

const OldDraggable = ({ style, children }) => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [grabbing, setGrabbing] = useState(false);
  const currentPos = useRef(0);
  const originalCenterPos = useRef(0);
  const centerX = useRef(0);
  const centerY = useRef(0);
  const oldWidthOfScreen = useRef(window.innerWidth);
  const oldHeightOfScreen = useRef(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    function handleResize(e) {
      if (originalCenterPos.current) {
        const ratioWidth =
          (window.innerWidth * left) / oldWidthOfScreen.current;
        const ratioHeight = window.innerHeight / oldHeightOfScreen.current;

        console.log('ratioHeight: ', ratioHeight, 'ratioWidt: ', ratioWidth);
        setLeft(
          state => (window.innerWidth * state) / oldWidthOfScreen.current
        );
        setTop(state => state * ratioHeight);

        originalCenterPos.current = {
          x: originalCenterPos.current.x * ratioWidth,
          y: originalCenterPos.current.y * ratioHeight
        };
        console.log(oldWidthOfScreen, window.innerWidth);
      }
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleMouseDown(e) {
    const {
      x,
      y,
      width,
      height
    } = e.currentTarget.childNodes[0].getBoundingClientRect();
    const { pageX, pageY } = e;

    centerX.current = width / 2 + x + window.scrollX;
    centerY.current = height / 2 + y + window.scrollY;
    console.log('x', x);
    console.log('left', left);
    if (!originalCenterPos.current) {
      currentPos.current = { x: pageX, y: pageY };
      originalCenterPos.current = { x: centerX.current, y: centerY.current };
      oldWidthOfScreen.current = window.innerWidth;
      oldHeightOfScreen.current = window.innerHeight;
    } else {
      const xDiff = pageX - centerX.current;
      const yDiff = pageY - centerY.current;
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
        transform: `translate(${left}px, ${top}px)`,
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
export default OldDraggable;
