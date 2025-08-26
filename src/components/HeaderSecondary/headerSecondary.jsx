import Text from "../Text/Text.jsx";
import H2 from "../H2/h2.jsx";
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
          <H2>
            {headerText.split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </H2>
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
