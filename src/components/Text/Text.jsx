import styles from "./Text.module.scss";
import classNames from "classnames";

function Text({ children, size, color, weight }) {
  return (
    <p
      className={classNames(
        styles.someText,
        styles[`someText--${size}`],
        styles[`someText--${color}`],
        styles[`someText--weight-${weight}`],
      )}
    >
      {children}
    </p>
  );
}

export default Text;
