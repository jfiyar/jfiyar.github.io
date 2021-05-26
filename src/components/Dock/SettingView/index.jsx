import React, { useState } from "react";
import styles from "./index.module.less";
import { CloseOutlined } from "@ant-design/icons";

export default function SettingView(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.view}>
      <span className={props.className} onClick={() => setVisible(true)}>
        {props.children}
      </span>
      <div
        className={[styles.panel, visible ? styles.panelShow : ""].join(" ")}
      >
        <div style={{ textAlign: "right" }}>
          <button className={styles.closeBtn} onClick={() => setVisible(false)}>
            <CloseOutlined />
          </button>
        </div>
      </div>
    </div>
  );
}
