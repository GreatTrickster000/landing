import Text from "../../components/Text/Text.jsx";
import styles from "./SectionSocialProof.module.scss";
import Marquee from "react-fast-marquee";
import { marqueeImages } from "../../images/marquee/marqueeImages.js";

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
          {marqueeImages.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default SocialProof;
