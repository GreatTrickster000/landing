import Text from "../Text/Text.jsx";
import styles from "./headerSecondary.module.scss";
import React from "react";

function HeaderSecondary({ text1, headerText, text2 }) {
  return (
    <header className={styles.root}>
      <div className={styles["textWrapper"]}>
        <div className={styles.text1}>
          <Text size="sm" color="primary">
            {text1}
          </Text>
        </div>
        <div className={styles.headerText}>
          <h2>
            {headerText.split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>
      <div className={styles.text2}>
        <Text size="lg" color="gray">
          {text2.split("\n").map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Text>
      </div>
    </header>
  );
}

export default HeaderSecondary;
