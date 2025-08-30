import styles from "./Footer.module.scss";
import footer_1 from "../../images/Footer/footer_1.svg";
import footer_2 from "../../images/Footer/footer_2.svg";
import footer_3 from "../../images/Footer/footer_3.svg";
import footer_4 from "../../images/Footer/footer_4.svg";
import footer_5 from "../../images/Footer/footer_5.svg";
import Nav from "../Navigation/Navigation.jsx";

function Footer() {
  return (
    <div className={styles.footer__wrapper}>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <Nav size="xs">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About us</a>
              <a href="#contact">Contact</a>
            </Nav>
          </div>
          <div className={styles.wrap}>
            <div className={styles.logos}>
              <a href="https://www.youtube.com/">
                <img src={footer_1} alt="YouTube-logo" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={footer_2} alt="Instagram-logo" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={footer_3} alt="Facebook-logo" />
              </a>
              <a href="https://www.github.com/">
                <img src={footer_4} alt="Github-logo" />
              </a>
              <a href="https://www.x.com/">
                <img src={footer_5} alt="X-logo" />
              </a>
            </div>
            <p className={styles.textPair}>
              © 2024 Abstractly, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
