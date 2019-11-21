import React, { useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { ReactComponent as BlobOne } from '../visual/images/BlobOne.svg';
import { ReactComponent as BlobTwo } from '../visual/images/BlobTwo.svg';
import { ReactComponent as BlobThree } from '../visual/images/BlobThree.svg';
import { ReactComponent as BlobFour } from '../visual/images/BlobFour.svg';
import { ReactComponent as BlobFive } from '../visual/images/BlobFive.svg';
import { ReactComponent as BlobSix } from '../visual/images/BlobSix.svg';
import { ReactComponent as BlobSeven } from '../visual/images/BlobSeven.svg';
import { ReactComponent as BlobEight } from '../visual/images/BlobEight.svg';
import { ReactComponent as BlobNine } from '../visual/images/BlobNine.svg';
import { ReactComponent as BlobTen } from '../visual/images/BlobTen.svg';
import { ReactComponent as BlobEleven } from '../visual/images/BlobEleven.svg';
const HeaderButtonBlob = ({ startInterval, blob, stopInterval, blobState }) => {
  const blobArray = [
    { blob: <BlobOne />, key: 0 },
    { blob: <BlobTwo />, key: 9 },
    { blob: <BlobThree />, key: 2 },
    { blob: <BlobFour />, key: 3 },
    { blob: <BlobFive />, key: 4 },
    { blob: <BlobSix />, key: 8 },
    { blob: <BlobSeven />, key: 6 },
    { blob: <BlobEight />, key: 7 },
    { blob: <BlobNine />, key: 5 },
    { blob: <BlobTen />, key: 1 },
    { blob: <BlobEleven />, key: 10 }
  ];
  useEffect(() => {
    if (blobState !== true) {
      startInterval();
    }
    return function cleanup() {
      stopInterval();
    };
  }, [stopInterval, startInterval, blobState]);
  const blobTransition = useTransition(blobArray[blob], item => item.key, {
    from: { width: '50px' },
    enter: { width: '40px' },
    leave: {
      width: blob === 10 ? '60px' : '50px',
      position: 'absolute',
      transform: 'rotateY(20deg)'
    },
    unique: true,
    reset: true,
    config: blob === 10 ? config.gentle : { mass: 8, tension: 100, friction: 5 }
  });

  return (
    <div>
      {blobState === false
        ? blobTransition.map(({ item, props }) => (
            <animated.div key={item.key} style={{ ...props }}>
              {item.blob}
            </animated.div>
          ))
        : null}
    </div>
  );
};
export default HeaderButtonBlob;
