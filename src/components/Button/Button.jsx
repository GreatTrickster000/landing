import styles from "./Button.module.scss";
import cn from "classnames";

function Button({
  type = "button",
  text,
  onClick,
  size,
  variant,
  active = false,
  ...props
}) {
  return (
    <button
      className={cn(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        { [styles["button--active"]]: active },
      )}
      onClick={onClick}
      type={type}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
