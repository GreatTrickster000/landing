import styles from "./Card-FAQ.module.scss";
import Text from "../Text/Text.jsx";
import Button from "../../components/Button/Button.jsx";

export default function CardFAQ() {
  return (
    <div className={styles.card}>
      <div className={styles.textPair}>
        <div className={styles.header}>
          <Text size="lg" color="bold">
            Can’t find the answer you’re looking for?
          </Text>
        </div>
        <div className={styles.text}>
          <Text size="sm" color="gray">
            Reach out to our
            <a className={styles.blue}> customer support</a> team.
          </Text>
        </div>
      </div>
      <div className={styles.button}>
        <Button
          size={"faq"}
          variant={"primary"}
          text={"Get in touch"}
          onClick={() => {
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
}
