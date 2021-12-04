import clsx from "clsx";
import { useState } from "react";

const RadioInput = ({ label }) => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <input className="uk-radio" type="radio" checked={checked} />
      <label
        className={clsx({ checked })}
        onClick={() => setChecked((s) => !s)}
      >
        {label}
      </label>
    </>
  );
};
export default RadioInput;
