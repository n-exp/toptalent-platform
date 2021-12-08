import clsx from 'clsx';

import Select from './Select';

import './index.scss';

const SelectField = ({ id, label, value, onChange, options, placeholder, isRequired }) => {
  return (
    <div className="input-container uk-margin">
      {label && (
        <label htmlFor={id} className="uk-display-inline-block uk-margin-small">
          {label}
          <span className={clsx('uk-text-danger', { 'uk-hidden': !isRequired })}>*</span>
        </label>
      )}
      <Select
        inputId={id}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectField;
