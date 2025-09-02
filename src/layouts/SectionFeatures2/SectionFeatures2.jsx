import styles from "./SectionFeatures2.module.scss";
import Card from "../../components/Cards/Cards.jsx";
import features2 from "../../images/Features2/Features2.png";
import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";
import { featuresData } from "../../components/Features-data/featuresData.js";

function Features2() {
  return (
    <>
      <section className={styles.features2} id="about">
        <div className={styles.textContainer}>
          <HeaderSecondary
            text1="High quality images"
            headerText="For designers, by designers"
            text2={
              "Unleash boundless creativity with a large repository of images optimized for designers"
            }
          />
        </div>
        <div className={styles.content2}>
          <div className={styles.cards2}>
            {featuresData.slice(6, 9).map((item, i) => (
              <Card
                key={i}
                cardImage={item.cardImage}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
          <div className={styles.featuresImage}>
            <img src={features2} alt="Features Image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Features2;
