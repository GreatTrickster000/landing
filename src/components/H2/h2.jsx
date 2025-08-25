import styles from "./h2.module.scss";

function H2({ children }) {
  return <h2 className={styles.header}>{children}</h2>;
}

export default H2;
