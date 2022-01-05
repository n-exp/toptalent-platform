import clsx from 'clsx';

import './Divider.scss';

const Divider = ({ classes, type = 'default' }) => (
  <hr className={clsx(`divider-component divider-${type}`, { [classes]: classes })} />
);

export default Divider;
