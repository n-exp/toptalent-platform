import clsx from 'clsx';

import { UserPlaceholderIcon } from '../../../assets/icons/UserPlaceholderIcon';

import './Image.scss';

const Image = ({ src, alt, variant = 'avatar', children }) => (
  <div
    className={clsx('image-container uk-width-1-1', {
      'uk-border-circle uk-inline-clip': variant === 'avatar',
      'image-contain': variant === 'preview'
    })}
  >
    {src ? <img src={src} alt={alt} className="uk-width-1-1" /> : <UserPlaceholderIcon />}

    {children}
  </div>
);

export default Image;
