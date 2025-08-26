import styles from "./Cards.module.scss";
import cn from "classnames";

function Card({ cardImage, direction, type, children }) {
  return (
    <>
      <div
        className={cn(
          styles.card,
          direction === "column" && styles["card--column"],
        )}
      >
        <div
          className={cn(
            styles.cardImage,
            type === "newsletter" && styles["cardImage--newsletter"],
          )}
        >
          <img src={cardImage} alt="Card Icon" />
        </div>
        <div className={styles.cardContent}>{children}</div>
      </div>
    </>
  );
}

export default Card;
