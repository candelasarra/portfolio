import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ image, placeholderSrc }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      src={image.src} // use normal <img> attributes as props
      style={image.style}
      effect="blur"
    />
  </div>
);

export default MyImage;
