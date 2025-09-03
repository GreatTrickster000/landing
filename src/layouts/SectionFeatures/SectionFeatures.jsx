import styles from "./SectionFeatures.module.scss";
import Card from "../../components/Cards/Cards.jsx";
import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";
import { featuresData } from "../../components/Features-data/featuresData.js";

function Features() {
  return (
    <>
      <section className={styles.features} id="features">
        <div className={styles.textContainer}>
          <HeaderSecondary id={"SectionFeatures"} />
        </div>
        <div className={styles.cards}>
          {featuresData.slice(0, 6).map((item, i) => (
            <Card
              key={i}
              cardImage={item.cardImage}
              title={item.title}
              text={item.text}
              direction="column"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Features;
