import Text from "../../components/Text/Text.jsx";
import styles from "./SectionSocialProof.module.scss";
import Marquee from "react-fast-marquee";
import marq1 from "../../images/marquee/marquee_1.svg";
import marq2 from "../../images/marquee/marquee_2.svg";
import marq3 from "../../images/marquee/marquee_3.svg";
import marq4 from "../../images/marquee/marquee_4.svg";
import marq5 from "../../images/marquee/marquee_5.svg";
import marq6 from "../../images/marquee/marquee_6.svg";

function SocialProof() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.section}>
        <Text size="sm" color="gray">
          Used by teams that you love
        </Text>
      </div>

      <div className={styles.marqueeViewport}>
        <Marquee
          autoFill
          direction="left"
          loop={0}
          speed={50}
          gradient={false}
          pauseOnHover
        >
          <img src={marq1} alt="marquee1" />
          <img src={marq2} alt="marquee2" />
          <img src={marq3} alt="marquee3" />
          <img src={marq4} alt="marquee4" />
          <img src={marq5} alt="marquee5" />
          <img src={marq6} alt="marquee6" />
        </Marquee>
      </div>
    </div>
  );
}

export default SocialProof;
