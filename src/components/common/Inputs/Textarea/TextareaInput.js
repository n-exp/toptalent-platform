import './index';

const TextareaInput = ({ id, value, placeholder, onChange }) => (
  <div className="uk-position-relative">
    <textarea
      id={id}
      className="uk-textarea"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows="4"
    />
  </div>
);

export default TextareaInput;
