import cn from "classnames";
import styles from "./Input.module.scss";

export default function Input({
  id,
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  className,
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={cn(styles.input, className, {
          [styles.error]: error,
        })}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
