import React, { useState, useEffect, useRef } from 'react';

import interact from 'interactjs';

const Draggable = ({ style, classSelector, children }) => {
  const zIndex = useRef(1);
  const ref = useRef(false);

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
          x = parseFloat(target.getAttribute('data-x')) || 0,
          y = parseFloat(target.getAttribute('data-y')) || 0;

        var offsetHeight = target.offsetHeight;

        // update the element's style
        target.style.width = event.rect.width + 'px';
        // target.style.height = event.rect.width * ratio + 'px';

        offsetHeight -= target.offsetHeight;

        if (event.edges.bottom) {
          offsetHeight = 0;
        }

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += offsetHeight;

        target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      });
    function dragMoveListener(event) {
      var target = event.target;
      // keep the dragged position in the data-x/data-y attributes

      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
      ref.current = event.dx;
      // translate the element
      target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
    function dragStartListener(event) {
      zIndex.current = zIndex.current + 1;
      console.log(zIndex);
      event.target.style.zIndex = zIndex.current;
    }
  }, [classSelector]);

  return (
    <div
      className={classSelector}
      style={{
        ...style,
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        transform: 'translate(0px, 0px)'
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;
