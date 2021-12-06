import { useCallback } from "react";
import clsx from "clsx";

import RadioInput from "./RadioInput";

import "./index.scss";

const RadioField = ({ id, label, checked, onChange }) => {
  const handleChange = useCallback(() => {
    onChange({ id, label, checked });
  }, [id, label, checked, onChange]);

  return (
    <div className="input-container radio-field">
      <label
        htmlFor={id}
        className={clsx("radio-label uk-flex uk-flex-middle", { checked })}
      >
        <RadioInput id={id} checked={checked} onChange={handleChange} />

        {label}
      </label>
    </div>
  );
};
export default RadioField;
