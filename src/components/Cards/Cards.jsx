import styles from "./Cards.module.scss";
import cn from "classnames";

function Card({ cardImage, direction, type, children }) {
  return (
    <>
      <div
        className={cn(styles.card, { [styles.column]: direction === "column" })}
      >
        <div
          className={cn(styles.cardImage, {
            [styles.newsletter]: type === "newsletter",
          })}
        >
          <img src={cardImage} alt="Card Icon" />
        </div>
        <div className={styles.cardContent}>{children}</div>
      </div>
    </>
  );
}

export default Card;
