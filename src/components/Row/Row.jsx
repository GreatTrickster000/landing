import styles from "./Row.module.scss";
import card_16 from "../../images/cards/card_16.svg";

export default function Row({ children }) {
  return (
    <div className={styles.row}>
      <div className={styles.imageWrapper}>
        <img src={card_16} alt="Card Icon" />
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
}
