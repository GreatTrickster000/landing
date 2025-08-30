import styles from "./SectionFeatures2.module.scss";
import Card from "../../components/Cards/Cards.jsx";
import Text from "../../components/Text/Text.jsx";
import card_7 from "../../images/cards/card_7.svg";
import card_8 from "../../images/cards/card_8.svg";
import card_9 from "../../images/cards/card_9.svg";
import features2 from "../../images/Features2/Features2.png";

import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";

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
            <Card cardImage={card_7}>
              <Text size="md" color="bold">
                5K resolution support
              </Text>
              <Text size="sm" color="gray">
                All images boast a minimum resolution of 5K, ensuring crisp,
                crystal-clear quality.
              </Text>
            </Card>
            <Card cardImage={card_8}>
              <Text size="md" color="bold">
                From water to glass
              </Text>
              <Text size="sm" color="gray">
                We offer a wide array of abstractions, ranging from water to
                glass, and encompassing various styles including 3D and vector.
              </Text>
            </Card>
            <Card cardImage={card_9}>
              <Text size="md" color="bold">
                Portrait or landscape
              </Text>
              <Text size="sm" color="gray">
                Effortlessly adapt your images for any platform - whether it's a
                stunning wallpaper or captivating Instagram reels and stories.
              </Text>
            </Card>
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
