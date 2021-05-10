import React from "react";
import FireLineBackend from "../FireLineBackend";
import styles from "./index.module.less";
export default function () {
  return (
    <div className={styles.view}>
      <FireLineBackend />
      <div className={styles.dock}></div>
    </div>
  );
}
