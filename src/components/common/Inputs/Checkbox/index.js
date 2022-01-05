import { useCallback } from 'react';
import clsx from 'clsx';

import CheckboxInput from './CheckboxInput';

import './index.scss';

const CheckboxField = ({ id, label, checked, variant = 'text', onChange }) => {
  const handleChange = useCallback(() => {
    onChange({ id, checked: !checked });
  }, [id, checked, onChange]);

  return (
    <div className="input-container checkbox-field">
      <label
        htmlFor={id}
        className={clsx(`checkbox-label checkbox-${variant} uk-flex uk-flex-middle`, { checked })}
      >
        <CheckboxInput id={id} checked={checked} onChange={handleChange} />

        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
