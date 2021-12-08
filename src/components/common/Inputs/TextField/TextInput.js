import clsx from "clsx";

import EyeIcon from "../../../../assets/icons/EyeIcon";

const TextInput = ({
  id,
  value,
  name,
  placeholder,
  type = "text",
  size,
  onChange,
  isToggled,
  onToggle,
}) => (
  <div className="uk-position-relative">
    <span
      className={clsx(
        "uk-position-center-right uk-position-small password-icon",
        {
          show: isToggled,
          "uk-hidden": !onToggle,
        }
      )}
      onClick={onToggle}
    >
      <EyeIcon />
    </span>
    <input
      id={id}
      className={clsx(`uk-input input-${type}`, { [size]: size })}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default TextInput;
