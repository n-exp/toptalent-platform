import { useCallback } from 'react';
import clsx from 'clsx';

import TextInput from './TextInput';

import './index.scss';

const TextField = ({
  id,
  label,
  type,
  value,
  onChange,
  isToggled,
  onToggle,
  placeholder,
  size,
  isRequired
}) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="input-container input-text uk-margin">
      {label && (
        <label htmlFor={id} className="uk-display-inline-block uk-margin-small">
          {label}
          <span className={clsx('uk-text-danger', { 'uk-hidden': !isRequired })}>*</span>
        </label>
      )}
      <TextInput
        id={id}
        value={value}
        onChange={handleChange}
        isToggled={isToggled}
        onToggle={onToggle}
        placeholder={placeholder}
        type={type}
        size={size}
      />
    </div>
  );
};

export default TextField;
