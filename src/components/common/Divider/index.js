import clsx from 'clsx';

import Divider from './Divider';

import './index.scss';

const DividerField = ({ text, type, classes }) => {
  return text ? (
    <div
      className={clsx('divider-wrapper uk-grid-medium uk-padding', { [classes]: classes })}
      uk-grid=""
    >
      <div className="uk-width-expand uk-margin-auto-vertical">
        <Divider type={type} />
      </div>
      <div className="uk-width-auto uk-margin-auto-vertical divider-text">{text}</div>
      <div className="uk-width-expand uk-margin-auto-vertical">
        <Divider type={type} />
      </div>
    </div>
  ) : (
    <Divider classes={classes} type={type} />
  );
};
export default DividerField;
