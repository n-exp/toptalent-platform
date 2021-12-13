import { UserPlaceholderIcon } from '../../../assets/icons/UserPlaceholderIcon';

import './Image.scss';

const Image = ({ src, alt, children }) => (
  <div className="image-container uk-border-circle uk-inline-clip uk-width-1-1">
    {src ? <img src={src} alt={alt} /> : <UserPlaceholderIcon />}

    {children}
  </div>
);

export default Image;
