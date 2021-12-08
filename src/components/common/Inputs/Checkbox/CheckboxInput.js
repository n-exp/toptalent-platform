const CheckboxInput = ({ id, checked, onChange }) => (
  <input
    id={id}
    type="checkbox"
    className="custom-checkbox uk-checkbox"
    checked={checked}
    onChange={onChange}
  />
);

export default CheckboxInput;
