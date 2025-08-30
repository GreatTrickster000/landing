import styles from "./SectionFeatures3.module.scss";
import Card from "../../components/Cards/Cards.jsx";
import Text from "../../components/Text/Text.jsx";
import card_10 from "../../images/cards/card_10.svg";
import card_11 from "../../images/cards/card_11.svg";
import card_12 from "../../images/cards/card_12.svg";
import features3 from "../../images/Features3/Features3.png";

import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";

function Features3() {
  return (
    <>
      <section className={styles.features3}>
        <div className={styles.textСontainer}>
          <HeaderSecondary
            text1="Best-in-class support"
            headerText={"Convenience and licensing\n that empowers"}
            text2={
              "In a world where storytelling constantly evolves, \ndon't let licensing and poor support hold you down."
            }
          />
        </div>
        <div className={styles["content2"]}>
          <div className={styles["cards2"]}>
            <Card cardImage={card_10}>
              <Text size="md" color="bold">
                Faster downloads
              </Text>
              <Text size="sm" color="gray">
                Our robust servers are primed to deliver the highest resolution
                images swiftly, ensuring a smooth download experience.
              </Text>
            </Card>
            <Card cardImage={card_11}>
              <Text size="md" color="bold">
                Convenience for teams
              </Text>
              <Text size="sm" color="gray">
                Your single account can accommodate multiple users
                simultaneously downloading without any disruptions, streamlining
                teamwork and productivity.
              </Text>
            </Card>
            <Card cardImage={card_12}>
              <Text size="md" color="bold">
                Royalty-free licensing
              </Text>
              <Text size="sm" color="gray">
                Our straightforward, royalty-free licensing means your chosen
                images are yours to innovate with, without the hassle of
                negotiating usage rights for every new project.
              </Text>
            </Card>
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
