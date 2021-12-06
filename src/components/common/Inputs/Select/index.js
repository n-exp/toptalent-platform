import Select from "./Select";

import "./index.scss";

const SelectField = ({ id, label, value, onChange, options }) => {
  return (
    <div className="input-container uk-margin">
      {label && (
        <label htmlFor={id} className="uk-display-inline-block uk-margin-small">
          {label}
        </label>
      )}
      <Select
        inputId={id}
        value={value}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};

export default SelectField;
