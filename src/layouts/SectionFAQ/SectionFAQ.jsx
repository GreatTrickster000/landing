import styles from "./SectionFAQ.module.scss";
import CardFAQ from "../../components/Card-FAQ/Card-FAQ.jsx";
import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";
import FAQItem from "../../components/FAQItem/FAQItem.jsx";
import { faqData } from "../../components/FAQ-data/faqData.js";

export default function SectionFAQ() {
  return (
    <section>
      <div className={styles.content}>
        <div className={styles.textPair}>
          <HeaderSecondary id={"SectionFAQ"} />
        </div>
        <div className={styles.faqList}>
          {faqData.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
      <CardFAQ />
    </section>
  );
}
