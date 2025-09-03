import Text from "../Text/Text.jsx";
import styles from "./headerSecondary.module.scss";
import React from "react";
import { headerSecondaryData } from "../HeaderSecondary-data/headerSecondaryData.js";

function HeaderSecondary({ id }) {
  const data = headerSecondaryData[id];
  if (!data) return null;
  return (
    <header className={styles.root}>
      <div className={styles["textWrapper"]}>
        <div className={styles.text1}>
          <Text size="sm" color="primary">
            {data.text1}
          </Text>
        </div>
        <div className={styles.headerText}>
          <h2 className={styles.h2}>
            {data.headerText.split("\n").map((line, i, arr) => (
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
          {data.text2.split("\n").map((line, i, arr) => (
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
