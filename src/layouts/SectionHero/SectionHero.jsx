import heroImage from "../../images/Hero.png";
import Button from "../../components/Button/Button.jsx";
import Text from "../../components/Text/Text.jsx";
import styles from "./SectionHero.module.scss";

function Hero() {
  return (
    <section className={styles["section--hero"]}>
      <div className={styles["hero__message"]}>
        <div className={styles["text__pair"]}>
          <h1 className={styles["hero__title"]}>
            Well crafted abstract&nbsp;images
          </h1>

          <h1 className={styles["mobileTablet__title"]}>
            Well crafted abstract gradient
          </h1>
          <Text size="lg" color="gray">
            High quality abstract images for your projects,
            <br />
            wallpaper and presentations.
          </Text>
        </div>
        <div className={styles["buttons__hero"]}>
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
      <div className={styles["image__wrapper"]}>
        <img src={heroImage} alt="Abstract image" />
      </div>
    </section>
  );
}

export default Hero;
