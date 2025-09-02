import Card from "../../components/Cards/Cards.jsx";
import Text from "../../components/Text/Text.jsx";
import Button from "../../components/Button/Button.jsx";
import styles from "./SectionNewsletter.module.scss";
import NewsletterImage from "../../images/Newsletter/NewsletterImage.png";
import Input from "../../components/Input/Input.jsx";
import { featuresData } from "../../components/Features-data/featuresData.js";

export default function Newsletter() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.message}>
          <div className={styles.heading}>
            <h2>
              Get the finest curated abstracts delivered weekly to your inbox
            </h2>
          </div>
          <div className={styles.checkItems}>
            {featuresData.slice(12, 15).map((item, i) => (
              <Card
                key={i}
                cardImage={item.cardImage}
                title={item.title}
                text={item.text}
                type={"newsletter"}
              />
            ))}
          </div>
        </div>
        <div className={styles.email}>
          <div className={styles.emailCapture}>
            <div className={styles.input}>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>
            <div className={styles.button}>
              <Button
                variant="primary"
                size="xs"
                text="Subscribe"
                type="submit"
              />
            </div>
          </div>
          <div className={styles.text}>
            <Text size="sm" color="gray">
              We only send you the best! No spam.
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={NewsletterImage} alt="Newsletter Image" />
      </div>
    </section>
  );
}
