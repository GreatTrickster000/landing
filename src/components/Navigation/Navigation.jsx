import styles from "./Navigation.module.scss";

function Nav({ children, size }) {
  return (
    <nav className={`${styles.nav} ${styles[`nav--${size}`]}`}>{children}</nav>
  );
}

export default Nav;
