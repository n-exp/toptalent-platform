import RadioInput from "./Radio";

import "./index.scss";

const RadioField = ({ label }) => {
  return (
    <div className="input-container">
      <RadioInput label={label} />
    </div>
  );
};
export default RadioField;
