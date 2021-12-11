import PinInput from 'react-pin-field';

import './Pin.scss';

const PinField = () => {
  return <PinInput length="4" validate="0123456789" className="pin-field" />;
};

export default PinField;
