import styles from "./Navigation.module.scss";
import cn from "classnames";

function Nav({ children, size }) {
  return <nav className={cn(styles.nav, styles[size])}>{children}</nav>;
}

export default Nav;
