import React, { useState } from "react";
import styles from "./index.module.less";

export default function SettingView(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.view}>
      <span className={props.className} onClick={() => setVisible(true)}>
        {props.children}
      </span>
      <div
        className={[styles.panel, visible ? styles.panelShow : ""].join(" ")}
      ></div>
    </div>
  );
}
