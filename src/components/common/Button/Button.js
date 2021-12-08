import clsx from 'clsx';

import './Button.scss';

const Button = ({
  children,
  classes,
  onClick,
  variant = 'contained',
  type,
  color = 'primary',
  size
}) => {
  return (
    <button
      className={clsx(`button uk-button uk-border-rounded ${variant} ${color}`, {
        'uk-button-small': size === 'small',
        'uk-button-large': size === 'large',
        'uk-button-link': variant === 'link',
        [classes]: classes
      })}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
