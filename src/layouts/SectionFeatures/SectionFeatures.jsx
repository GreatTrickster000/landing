import styles from "./SectionFeatures.module.scss";
import Card from "../../components/Cards/Cards.jsx";
import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";
import { featuresData } from "../../components/Features-data/featuresData.js";

function Features() {
  return (
    <>
      <section className={styles.features} id="features">
        <div className={styles.textContainer}>
          <HeaderSecondary
            text1="Premium abstract images"
            headerText="Easy access to top quality images"
            text2={
              "In a world where storytelling constantly evolves, we lead with groundbreaking " +
              "images designed for your presentation excellence."
            }
          />
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
