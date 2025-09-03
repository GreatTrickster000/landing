import cn from "classnames";
import styles from "./TextArea.module.scss";

export default function TextArea({
  id,
  label,
  placeholder,
  onChange,
  value,
  name,
  error,
  type = "text",
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        className={cn(styles.area, {
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
