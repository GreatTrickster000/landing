import Card from "../../components/Cards/Cards.jsx";
import Form from "../../components/Form/Form.jsx";
import Text from "../../components/Text/Text.jsx";
import card_13 from "../../images/cards/card_13.svg";
import card_14 from "../../images/cards/card_14.svg";
import card_15 from "../../images/cards/card_15.svg";
import styles from "./SectionContact.module.scss";

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
            <Card cardImage={card_13}>
              <Text weight="weight-medium" size="sm" color="gray">
                123 Maple Street, Springfield, IL, USA
              </Text>
            </Card>
            <Card cardImage={card_14}>
              <Text weight="weight-medium" size="sm" color="gray">
                +1 (650) 555-0198
              </Text>
            </Card>
            <Card cardImage={card_15}>
              <Text weight="weight-medium" size="sm" color="gray">
                hello@abstractly.com
              </Text>
            </Card>
          </div>
        </div>
        <div className={styles.right}>
          <Form />
        </div>
      </div>
    </section>
  );
}
