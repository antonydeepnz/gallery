import React, { useState, useMemo } from 'react';
import cn from 'classnames';

import { useGallery } from './hooks';

import './style.css';

const images = [
  'https://avatars.mds.yandex.net/get-autoru-vos/1966658/4cb402b3c54f297f8ffc79e42ada7063/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/4701658/8d6414a24d64293d291ef2d354c770b5/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/4392607/9116728f8e2bcf78228d3ec380ae2496/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/4119446/50b251641971d9f3b8505b5665ac5cff/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/4338488/1be05d10a6292a42d3719f7060a15e65/1200x900n',
  'https://avatars.mds.yandex.net/get-autoru-vos/1938005/596aa33d5098422090f35dfe034a3ba7/1200x900n',
];

export const AnotherGallery = () => {
  // const [selected, setSelected] = useState<number>(0);
  // const [active, setActive] = useState<boolean>(false);

  const { selected, active, SelectImage, cancelSelectImage } = useGallery();
  const trimmedImages = useMemo(() => images.slice(0, 5), [images]);
  console.warn(trimmedImages.length);
  return (
    <div className="anotherGallery">
      <img className="anotherGalleryImage" src={images[selected]} />
      <div className="anotherGalleryListofSelect">
        {trimmedImages.map((_, idx) => (
          <React.Fragment>
            <div
              className="anotherGallerySelect"
              // onMouseOver={() => { setSelected(idx); setActive(true)}}
              // onMouseLeave={() => {setSelected(0); setActive(false)}}
              onMouseOver={SelectImage(idx)}
              onMouseLeave={cancelSelectImage}
              style={{ width: `${250 / trimmedImages.length}px` }}
            />
          </React.Fragment>
        ))}
      </div>
      <div
        className={cn('anotherGalleryListofDots', {
          anotherGalleryListofDotsActive: active,
        })}
      >
        {trimmedImages.map((_, idx) => (
          <div
            className={cn('anotherGalleryDot', {
              anotherGalleryDotSelected: selected === idx,
            })}
            style={{ width: `${250 / trimmedImages.length - 4}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ({}) => {
  const [selected, setSelected] = useState(images[0]);
  return (
    <div className="gallery">
      <img className="bigImage" src={selected} />
      <div className="imagesList">
        {images.map((el) => (
          <img
            className={cn('image', { imageActive: selected })}
            src={el}
            onMouseOver={() => setSelected(el)}
          />
        ))}
      </div>
    </div>
  );
};
