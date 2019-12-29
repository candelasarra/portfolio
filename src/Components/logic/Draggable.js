import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import interact from 'interactjs';
import '../visual/CSSfiles/Draggable.css';

const Draggable = ({
  style,
  classSelector,
  children,
  position,
  identifier
}) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const ratioRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded) {
      ratioRef.current = ref.current.clientHeight / ref.current.clientWidth;
      console.log(
        ratioRef.current,
        ref.current.clientHeight,
        ref.current.clientHeight + 2,
        ref.current.clientWidth
      );
    }
  }, [loaded]);
  useEffect(() => {
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
      onend: function() {
        console.log('end');
      }
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
          console.log(event.rect.width);
          let target = event.target;
          let x = parseFloat(ref.current.getAttribute('data-x')) || 0;
          let y = parseFloat(ref.current.getAttribute('data-y')) || 0;

          let offsetHeight = ref.current.offsetHeight;
          // update the element's style
          console.log(ratioRef.current);
          ref.current.style.height =
            ref.current.clientWidth * ratioRef.current - 10 + 'px';
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
    function dragMoveListener(event) {
      if (ref.current === null) return;
      let target = event.target;
      // keep the dragged position in the data-x/data-y attributes

      const x =
        (parseFloat(ref.current.getAttribute('data-x')) || 0) + event.dx;
      const y =
        (parseFloat(ref.current.getAttribute('data-y')) || 0) + event.dy;
      // translate the element
      ref.current.style.webkitTransform = ref.current.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      ref.current.setAttribute('data-x', x);
      ref.current.setAttribute('data-y', y);
    }
    function dragStartListener(event) {
      console.log('insidedragstartxs');
    }
  }, [classSelector, identifier]);

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
  //        <Draggable
  //classSelector="blob"
  // position="absolute"
  // style={{ width: '500px', height: '500px' }}
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
        padding: '5px'
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </animated.div>
  );
};

export default Draggable;
