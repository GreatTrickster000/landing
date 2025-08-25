import styles from "./Header.module.scss";
import logo from "../../images/Logo.svg";
import Button from "../Button/Button.jsx";
import Nav from "../Navigation/Navigation.jsx";
import { useState } from "react";
import cn from "classnames";
import burger from "../../images/Header/burger.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className={styles.desktopNav}>
        <Nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </Nav>
      </div>

      <button
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <img src={burger} alt="burger-button" />
      </button>
      <div className={cn(styles.mobileNav, { [styles.open]: isOpen })}>
        <Nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </Nav>
      </div>

      <div className={styles.buttons}>
        <Button
          text="Learn more"
          variant="secondary"
          size="sm"
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <Button
          text="See Pricing"
          variant="primary"
          size="sm"
          onClick={() =>
            document
              .querySelector("#pricing")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </header>
  );
}

export default Header;
