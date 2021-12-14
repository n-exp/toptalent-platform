import clsx from 'clsx';

import Image from '../Image/Image';

import { CrossIcon } from '../../../assets/icons/CrossIcon';

const Thumbnav = ({ thumbnavs, children }) => {
  return (
    <ul
      className="thumbnav-wrapper uk-child-width-1-3 uk-child-width-1-5@s uk-thumbnav uk-grid-column-small uk-grid-row-collapse uk-flex-nowrap uk-visible@m"
      uk-grid=""
    >
      {thumbnavs.map((thumbnav, thumbnavIdx) => (
        <li key={thumbnavIdx} uk-slideshow-item={thumbnavIdx}>
          <span className="thumbnav">
            <Image variant="tile" src={thumbnav} alt="" />
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
          </span>
        </li>
      ))}
      <span
        className={clsx('uk-active thumbnav', {
          'uk-hidden': thumbnavs.length > 1 || !thumbnavs.length
        })}
      >
        <Image variant="tile" src={thumbnavs[0]} alt="" />
      </span>

      {children}
    </ul>
  );
};

export default Thumbnav;
