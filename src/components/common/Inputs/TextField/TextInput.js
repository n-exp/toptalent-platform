import clsx from 'clsx';

const TextInput = ({
  id,
  value,
  name,
  placeholder,
  type = 'text',
  size,
  onChange,
  isToggled,
  icon: IconComponent,
  onToggle
}) => (
  <div className="uk-position-relative">
    {IconComponent && (
      <span
        className={clsx('uk-position-center-right uk-position-small password-icon', {
          show: isToggled
        })}
        onClick={onToggle}
      >
        <IconComponent fill="#B2B8C3" />
      </span>
    )}
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
