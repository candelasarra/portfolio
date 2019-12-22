import React, { useEffect, useRef } from 'react';

import interact from 'interactjs';

const Draggable = ({
  style,
  classSelector,
  children,
  position,
  zIndex,
  setZIndex
}) => {
  const ref = useRef(null);

  useEffect(() => {
    interact('.' + classSelector)
      .draggable({
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
      })
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
        var target = event.target,
          x = parseFloat(ref.current.getAttribute('data-x')) || 0,
          y = parseFloat(ref.current.getAttribute('data-y')) || 0;

        var offsetHeight = target.offsetHeight;

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.width * 1 + 'px';

        offsetHeight -= target.offsetHeight;

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
      event.target.style.zIndex = zIndex + 1;
      console.log(zIndex);
    }
  }, [classSelector]);

  //if wrapping svg pass svg height in style object, also pass position
  return (
    <div
      ref={ref}
      className={classSelector}
      style={{
        ...style,
        display: 'inline-block',
        position: `${position}`,
        transform: 'translate(0px, 0px)'
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
