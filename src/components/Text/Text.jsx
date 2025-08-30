import styles from "./Text.module.scss";
import classNames from "classnames";

function Text({ children, size, color, weight }) {
  return (
    <p
      className={classNames(
        styles.someText,
        styles[size],
        styles[color],
        styles[weight],
      )}
    >
      {children}
    </p>
  );
}

export default Text;
