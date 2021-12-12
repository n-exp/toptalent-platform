import { useCallback } from 'react';
import clsx from 'clsx';

import TextareaInput from './TextareaInput';

import './index.scss';

const TextareaField = ({
  id,
  label,
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
    <div className="input-container input-textarea uk-margin">
      {label && (
        <label htmlFor={id} className="uk-display-inline-block ">
          <span className={clsx('uk-text-danger', { 'uk-hidden': !isRequired })}>*</span>
          {label}
        </label>
      )}
      <TextareaInput
        id={id}
        value={value}
        onChange={handleChange}
        isToggled={isToggled}
        onToggle={onToggle}
        placeholder={placeholder}
        size={size}
      />
    </div>
  );
};

export default TextareaField;
