import styles from "./MainWrapper.module.scss";

function Main({ children }) {
  return <div className={styles.main__wrapper}>{children}</div>;
}

export default Main;
