import clsx from "clsx";

import "./Button.scss";

const Button = ({
  children,
  classes,
  onClick,
  variant,
  type = "primary",
  size,
}) => {
  return (
    <button
      className={clsx(`button uk-button uk-border-rounded ${variant} ${type}`, {
        "uk-button-small": size === "small",
        "uk-button-large": size === "large",
        "uk-button-link": type === "link",
        [classes]: classes,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
