import { useState } from "react";
import styles from "./FAQItem.module.scss";
import Text from "../../components/Text/Text.jsx";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.card} onClick={() => setOpen(!open)}>
      <div className={styles.questionRow}>
        <Text size="md" color="bold" style={{ fontWeight: "medium" }}>
          {question}
        </Text>
      </div>

      <div className={styles.iconWrapper}>
        <span className={styles.lineHorizontal} />
        {!open && <span className={styles.lineVertical} />}
      </div>

      {open && (
        <div className={styles.answer}>
          <Text size="sm" color="gray">
            {answer}
          </Text>
        </div>
      )}
    </div>
  );
}
