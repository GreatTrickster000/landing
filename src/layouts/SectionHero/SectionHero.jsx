import heroImage from "../../images/Hero.png";
import Button from "../../components/Button/Button.jsx";
import Text from "../../components/Text/Text.jsx";
import styles from "./SectionHero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.message}>
        <div className={styles.textPair}>
          <h1 className={styles.title}>Well crafted abstract&nbsp;images</h1>

          <h1 className={styles.mobileTabletTitle}>
            Well crafted abstract gradient
          </h1>
          <Text size="lg" color="gray">
            High quality abstract images for your projects,
            <br />
            wallpaper and presentations.
          </Text>
        </div>
        <div className={styles.buttons}>
          <Button
            variant="secondary"
            size="hero"
            text="Learn more"
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <Button
            variant="primary"
            size="hero"
            text="See Pricing"
            onClick={() =>
              document
                .querySelector("#pricing")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={heroImage} alt="Abstract image" />
      </div>
    </section>
  );
}

export default Hero;
