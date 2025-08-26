import styles from "./SectionFeatures.module.scss";
import Card from "../../components/Cards/Cards.jsx";
import Text from "../../components/Text/Text.jsx";
import card_1 from "../../images/cards/card_1.svg";
import card_2 from "../../images/cards/card_2.svg";
import card_3 from "../../images/cards/card_3.svg";
import card_4 from "../../images/cards/card_4.svg";
import card_5 from "../../images/cards/card_5.svg";
import card_6 from "../../images/cards/card_6.svg";
import HeaderSecondary from "../../components/HeaderSecondary/headerSecondary.jsx";

function Features() {
  return (
    <>
      <section className={styles.features} id="features">
        <div className={styles.text__container}>
          <HeaderSecondary
            text1="Premium abstract images"
            headerText="Easy access to top quality images"
            text2={
              "In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
            }
          />
        </div>
        <div className={styles.cards}>
          <Card cardImage={card_1} direction="column">
            <Text size="md" color="bold">
              Infinite Download
            </Text>
            <Text size="sm" color="gray">
              Once you subscribe to our plans, they're all yours.
              <br />
              Download as many as you want and use them for work presentations,
              wallpapers, and much more.
            </Text>
          </Card>
          <Card cardImage={card_2} direction="column">
            <Text size="md" color="bold">
              Purely Handcrafted
            </Text>
            <Text size="sm" color="gray">
              No AI, no generic images. Crafted from various chemicals, fabrics,
              clouds, or even particles as small as dust.
            </Text>
          </Card>
          <Card cardImage={card_3} direction="column">
            <Text size="md" color="bold">
              All Are Under licensed
            </Text>
            <Text size="sm" color="gray">
              The only limitation with these abstract images is that you are not
              able to sell them in any form, whether digital or hard copy (such
              as paintings or prints on paper).
            </Text>
          </Card>
          <Card cardImage={card_4} direction="column">
            <Text size="md" color="bold">
              Cancel Anytime
            </Text>
            <Text size="sm" color="gray">
              Subscribe at your own pace, and cancel when you feel it's enough.
            </Text>
          </Card>
          <Card cardImage={card_5} direction="column">
            <Text size="md" color="bold">
              Empowering For Team
            </Text>
            <Text size="sm" color="gray">
              We support multiple seats at once, requiring only a single
              payment.
            </Text>
          </Card>
          <Card cardImage={card_6} direction="column">
            <Text size="md" color="bold">
              No Limitations
            </Text>
            <Text size="sm" color="gray">
              Use as many as you want, from Dribble presentations to PowerPoint
              presentations.
            </Text>
          </Card>
        </div>
      </section>
    </>
  );
}

export default Features;
