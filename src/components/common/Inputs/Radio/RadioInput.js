import './RadioInput.scss';

const RadioInput = ({ id, checked, onChange }) => {
  return (
    <input
      id={id}
      type="radio"
      className="custom-radio uk-radio"
      checked={checked}
      onChange={onChange}
    />
  );
};
export default RadioInput;
