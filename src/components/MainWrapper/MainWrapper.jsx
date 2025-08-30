import styles from "./MainWrapper.module.scss";

function Main({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Main;
