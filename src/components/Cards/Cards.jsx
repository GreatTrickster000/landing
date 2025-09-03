import styles from "./Cards.module.scss";
import cn from "classnames";
import Text from "../../components/Text/Text.jsx";

function Card({ cardImage, direction, type, title, text, style }) {
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
          <img src={cardImage} alt="title" />
        </div>
        <div className={styles.cardContent}>
          <Text size="md" color="bold">
            {title}
          </Text>

          <Text size="sm" color="gray" style={style}>
            {text}
          </Text>
        </div>
      </div>
    </>
  );
}

export default Card;
