import Divider from './Divider';

import './index.scss';

const DividerField = ({ text, type }) => {
  return text ? (
    <div className="divider-wrapper uk-grid-medium uk-padding" uk-grid="">
      <div className="uk-width-expand uk-margin-auto-vertical">
        <Divider type={type} />
      </div>
      <div className="uk-width-auto uk-margin-auto-vertical divider-text">{text}</div>
      <div className="uk-width-expand uk-margin-auto-vertical">
        <Divider type={type} />
      </div>
    </div>
  ) : (
    <Divider type={type} />
  );
};
export default DividerField;
