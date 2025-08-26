import Card from "../../components/Cards/Cards.jsx";
import Text from "../../components/Text/Text.jsx";
import H2 from "../../components/H2/h2.jsx";
import Button from "../../components/Button/Button.jsx";
import card_16 from "../../images/cards/card_16.svg";
import styles from "./SectionNewsletter.module.scss";
import NewsletterImage from "../../images/Newsletter/NewsletterImage.png";

export default function Newsletter() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.message}>
          <div className={styles.heading}>
            <H2>
              Get the finest curated abstracts delivered weekly to your inbox
            </H2>
          </div>
          <div className={styles.checkItems}>
            <Card cardImage={card_16} type="newsletter">
              <Text size="md" color="gray">
                Exclusive access to new abstract images and collections
              </Text>
            </Card>
            <Card cardImage={card_16} type="newsletter">
              <Text size="md" color="gray">
                Unlock special promotions only for subscribers
              </Text>
            </Card>
            <Card cardImage={card_16} type="newsletter">
              <Text size="md" color="gray">
                Regular doses of artistic inspiration
              </Text>
            </Card>
          </div>
        </div>
        <div className={styles.email}>
          <div className={styles.emailCapture}>
            <label htmlFor="email" className={styles["visually-hidden"]}>
              Email
            </label>
            <input
              id="email"
              className={styles.input}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
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
