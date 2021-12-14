import clsx from 'clsx';

import Image from '../Image/Image';
import { MAX_IMAGES_NUMBER } from './state/constants';

import { CrossIcon } from '../../../assets/icons/CrossIcon';

const Slidenav = ({ slides, children }) => {
  return (
    <div className="slidenav-wrapper uk-grid-small uk-hidden@m" uk-grid="">
      <div
        className={clsx('uk-slider-container-offset uk-light', {
          'uk-hidden': slides.length <= 1,
          'uk-width-2-3 uk-width-4-5@s': slides.length >= 1 && slides.length < MAX_IMAGES_NUMBER,
          'uk-width-1-1': slides.length >= MAX_IMAGES_NUMBER
        })}
        tabIndex="-1"
        uk-slider="center: true"
      >
        <div className="uk-visible-toggle uk-light" tabIndex="-1">
          <ul
            className={clsx('uk-slider-items uk-grid-medium uk-grid', {
              'uk-child-width-1-2 uk-child-width-1-4@s':
                slides.length >= 1 && slides.length < MAX_IMAGES_NUMBER,
              'uk-child-width-1-3 uk-child-width-1-5@s': slides.length >= MAX_IMAGES_NUMBER
            })}
          >
            {slides.map((image, imageIdx) => (
              <div key={imageIdx}>
                <li
                  className="slide-item uk-inline"
                  uk-slideshow-item={imageIdx}
                  uk-slider-item={imageIdx}
                >
                  <Image src={image} alt="" variant="tile" />
                  <div className="uk-position-top">
                    <div
                      className="delete-image-icon-wrapper"
                      //   onClick={() => onChange(null)}
                    >
                      <div className="delete-image-icon uk-transition-fade uk-icon-button">
                        <CrossIcon />
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {slides.length === 1 && (
        <span className="uk-width-1-3 uk-width-1-5@s">
          <Image variant="tile" src={slides[0]} alt="" />
        </span>
      )}

      {children}
    </div>
  );
};

export default Slidenav;
