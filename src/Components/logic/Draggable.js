import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import interact from 'interactjs';
import '../visual/CSSfiles/Draggable.css';
import { useWindowWidth } from '../visual/Hooks/Hooks';
const Draggable = ({
  style,
  classSelector,
  children,
  position,
  identifier
}) => {
  const width = useWindowWidth();
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const [isBigScreen, setIsBigScreen] = useState(false);
  const ratioRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (width) {
      setIsBigScreen(width > 700);
    }
  }, [width]);

  useEffect(() => {
    if (isBigScreen) {
      interact('.' + classSelector).draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: '.Main-mainDiv',
            endOnly: true
          })
        ],
        // enable autoScroll
        autoScroll: true,
        onstart: dragStartListener,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function() {}
      });
      if (identifier === 'image') {
        interact('.' + classSelector)
          .resizable({
            edges: {
              bottom: true,
              right: true,
              top: true,
              left: true
            },
            modifiers: [
              interact.modifiers.aspectRatio({
                // make sure the width is always double the height
                ratio: 'preserve',
                // also restrict the size by nesting another modifier
                modifiers: [
                  interact.modifiers.restrictSize({ max: '.Main-mainDiv' })
                ]
              })
            ],
            invert: 'reposition'
          })
          .on('resizemove', event => {
            ratioRef.current = event.rect.height / event.rect.width;
            let target = event.target;
            let x = parseFloat(ref.current.getAttribute('data-x')) || 0;
            let y = parseFloat(ref.current.getAttribute('data-y')) || 0;

            let offsetHeight = ref.current.offsetHeight;
            // update the element's style

            ref.current.style.height =
              event.rect.width * ratioRef.current + 'px';
            ref.current.style.width = event.rect.width + 'px';

            offsetHeight -= ref.current.offsetHeight;
            if (event.edges.bottom) {
              offsetHeight = 0;
            }

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += offsetHeight;

            ref.current.style.webkitTransform = ref.current.style.transform =
              'translate(' + x + 'px,' + y + 'px)';

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          });
      }
    }
  }, [classSelector, identifier, isBigScreen]);

  function dragMoveListener(event) {
    if (ref.current === null) return;
    let target = event.target;
    // keep the dragged position in the data-x/data-y attributes

    const x = (parseFloat(ref.current.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(ref.current.getAttribute('data-y')) || 0) + event.dy;
    // translate the element
    ref.current.style.webkitTransform = ref.current.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    ref.current.setAttribute('data-x', x);
    ref.current.setAttribute('data-y', y);
  }

  function dragStartListener(event) {
    const maxZ = Array.from(document.querySelectorAll('body *'))
      .map(a => parseFloat(window.getComputedStyle(a).zIndex))
      .filter(a => !isNaN(a))
      .sort()
      .pop();
    event.target.style.zIndex = maxZ + 1;
  }

  const hoverStyle = useSpring({
    from: { border: '1px dashed transparent' },
    to: hover
      ? [{ border: '1px dashed black' }, { border: '1px dashed #ff4b52' }]
      : { border: '1px dashed transparent' },
    config: config.stiff
  });
  function handleMouseOver() {
    setHover(true);
    //  getComputedStyle()
    //change opacity
  }
  function handleMouseOut() {
    setHover(false);
  }
  //if wrapping svg pass svg height in style object, also pass position
  // <Draggable
  // position="relative"
  // classSelector={'title' + index}
  // style={{height: 500}}
  // identifier="text"
  //>
  return (
    <animated.div
      ref={ref}
      id="draggableMainDiv"
      className={classSelector}
      style={{
        ...style,
        ...hoverStyle,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: `${position}`,
        transform: 'translate(0px, 0px)',
        padding: '5px',
        touchAction: 'none',
        userSelect: 'none'
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </animated.div>
  );
};

export default Draggable;
