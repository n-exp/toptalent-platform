import { useCallback } from 'react';

import Image from '../../../../components/common/Image/Image';
import ImageUploader from '../../../../components/common/controls/Uploader/ImageUploader';

import { CrossIcon } from '../../../../assets/icons/CrossIcon';

import './ImagePicker.scss';
import clsx from 'clsx';

const ImagePicker = ({ src, variant = 'default', onChange }) => {
  const hangleChange = useCallback(
    (files) => {
      onChange(files);
    },
    [onChange]
  );

  return (
    <div className="photo-wrapper uk-inline uk-transition-toggle uk-light uk-width-1-1">
      {/* Responsive image container */}
      <Image src={src} alt="some alt">
        {/* Shadow overlay */}
        <div
          className={clsx('uk-overlay-primary uk-position-cover uk-transition-fade', {
            'uk-hidden': !src && variant !== 'avatar'
          })}
        />
      </Image>

      {/* Image uploader overlay */}
      {variant === 'avatar' && (
        <div className="uk-overlay uk-position-center">
          <div className="uk-transition-fade">
            <ImageUploader onChange={hangleChange} />
          </div>
        </div>
      )}

      {/* Remove icon overlay */}

      <div
        className={clsx('delete-image-icon-wrapper', { 'uk-hidden': !src })}
        onClick={() => onChange(null)}
      >
        <div className="delete-image-icon uk-transition-fade uk-icon-button">
          <CrossIcon />
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
