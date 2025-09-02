import Card from "../../components/Cards/Cards.jsx";
import Form from "../../components/Form/Form.jsx";
import Text from "../../components/Text/Text.jsx";
import styles from "./SectionContact.module.scss";
import { featuresData } from "../../components/Features-data/featuresData.js";

export default function Contact() {
  return (
    <section>
      <div className={styles.sectionWrapper} id="contact">
        <div className={styles.left}>
          <div className={styles.message}>
            <p className={styles.header}>Talk to our team</p>
            <div className={styles.text}>
              <Text size="lg" color="gray">
                We're committed to delivering the support you require to make
                your experience as smooth as possible.
              </Text>
            </div>
          </div>
          <div className={styles.cards}>
            {featuresData.slice(15, 18).map((item, i) => (
              <Card
                key={i}
                cardImage={item.cardImage}
                title={item.title}
                text={item.text}
                style={{ fontWeight: "400" }}
              />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <Form />
        </div>
      </div>
    </section>
  );
}
