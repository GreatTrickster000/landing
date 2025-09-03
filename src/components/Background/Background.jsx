import styles from "./Background.module.scss";

function Background({ children }) {
  return <div className={styles.background}>{children}</div>;
}

export default Background;
