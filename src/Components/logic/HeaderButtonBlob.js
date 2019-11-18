import React, { useEffect, useState } from 'react';
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
const HeaderButtonBlob = () => {
  const [blob, setBlob] = useState(0);
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
    { blob: <BlobTen />, key: 1 }
  ];
  useEffect(() => {
    void setInterval(() => setBlob(blob => (blob + 1) % 10), 900);
  }, []);

  const blobTransition = useTransition(blobArray[blob], item => item.key, {
    from: { width: '50px' },
    enter: { width: '40px' },
    leave: {
      width: '50px',
      position: 'absolute',
      transform: 'rotateY(20deg)'
    },
    unique: true,
    reset: true,
    config: { mass: 1, tension: 200, friction: 3 }
  });
  return (
    <div>
      {blobTransition.map(({ item, props }) => (
        <animated.div key={item.key} style={{ ...props }}>
          {item.blob}
        </animated.div>
      ))}
    </div>
  );
};
export default HeaderButtonBlob;
