import styles from "./SectionFeatures3.module.scss";
import Card from "../../components/Cards/Cards.jsx";
import features3 from "../../images/Features3/Features3.png";
import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";
import { featuresData } from "../../components/Features-data/featuresData.js";

function Features3() {
  return (
    <>
      <section className={styles.features3}>
        <div className={styles.textСontainer}>
          <HeaderSecondary id={"SectionFeatures3"} />
        </div>
        <div className={styles["content2"]}>
          <div className={styles["cards2"]}>
            {featuresData.slice(9, 12).map((item, i) => (
              <Card
                key={i}
                cardImage={item.cardImage}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
          <div className={styles["featuresImage"]}>
            <img src={features3} alt="Features Image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Features3;
