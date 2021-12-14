import { useCallback } from 'react';
import clsx from 'clsx';

import CustomUploader from '../controls/Uploader/CustomUploader';
import Image from '../Image/Image';
import Thumbnav from './Thumbnav';
import Slidenav from './Slidenav';
import { MAX_IMAGES_NUMBER } from './state/constants';

import { ImageIcon } from '../../../assets/icons/ImageIcon';

import './ImageGallery.scss';

const ImageGallery = ({ images, onChange }) => {
  const filterFilesLimit = useCallback((storedFiles, uploadedFiles) => {
    const currImagesNum = storedFiles.length;
    const imagesLimit = MAX_IMAGES_NUMBER - currImagesNum;
    const newFiles = uploadedFiles.slice(0, imagesLimit);

    return [...storedFiles, ...newFiles];
  }, []);

  const handleChange = useCallback(
    (uploadedImages) => {
      onChange((currImages) => filterFilesLimit(currImages, uploadedImages));
    },
    [onChange, filterFilesLimit]
  );

  return (
    <div className="uk-position-relative" uk-slideshow="animation: slide">
      <ul
        className={clsx(
          'slideshow-container uk-position-relative uk-flex uk-flex-center uk-slideshow-items uk-margin',
          {
            'uk-hidden': !images.length
          }
        )}
      >
        {images.map((image, imageIdx) => (
          <li key={imageIdx} className="uk-flex uk-flex-center">
            <Image src={image} alt="" variant="preview" />
          </li>
        ))}
      </ul>

      <Thumbnav thumbnavs={images}>
        {images.length < MAX_IMAGES_NUMBER && (
          <div className="thumbnav-uploader uk-width-1-3 uk-width-1-5@s">
            <CustomUploader
              text="Add Image"
              multiple
              onChange={handleChange}
              icon={<ImageIcon />}
            />
          </div>
        )}
      </Thumbnav>

      <Slidenav slides={images}>
        {images.length < MAX_IMAGES_NUMBER && (
          <div className="slidenav-uploader uk-width-1-3 uk-width-1-5@s uk-flex uk-flex-center">
            <CustomUploader
              classes="custom-uploader uk-width-1-1 uk-flex uk-flex-center uk-flex-middle uk-flex-column"
              text="Add Image"
              multiple
              onChange={handleChange}
              icon={<ImageIcon />}
            />
          </div>
        )}
      </Slidenav>
    </div>
  );
};

export default ImageGallery;
