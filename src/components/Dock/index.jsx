import React, { useEffect, useState, useRef } from "react";
import FireLineBackend from "../FireLineBackend";
import styles from "./index.module.less";
import huyaIcon from "@/assets/icons/huya.jpg";
import tengxunIcon from "@/assets/icons/tengxunshiping.jpg";
import baiduIcon from "@/assets/icons/baidu.jpg";
import googleIcon from "@/assets/icons/google.jpg";
import bingIcon from "@/assets/icons/bing.jpg";
import githubIcon from "@/assets/icons/github.jpg";
import { SettingFilled, SettingOutlined } from "@ant-design/icons";

const sites = [
  [tengxunIcon, "https://v.qq.com/"],
  [huyaIcon, "https://www.huya.com/"],
  [bingIcon, "https://cn.bing.com/"],
  [baiduIcon, "https://www.baidu.com/"],
  [googleIcon, "https://www.google.com/"],
  [githubIcon, "https://github.com/"],
];

export function hideDock() {}

export default function () {
  const [visible, setVisible] = useState(false);
  const count = useRef(0);

  function onImgLoaded() {
    count.current++;
    if (count.current >= sites.length) {
      setVisible(true);
    }
  }

  useEffect(function () {
    hideDock = () => {
      setVisible(false);
    };
  }, []);

  return (
    <div className={[styles.view, !visible ? styles.hiddenView : ""].join(" ")}>
      <FireLineBackend />
      <div className={styles.dock}>
        {sites.map(([icon, url]) => {
          return (
            <a key={url} href={url}>
              <img onLoad={onImgLoaded} className={styles.icon} src={icon} />
            </a>
          );
        })}
        <SettingOutlined className={styles.icon} />
        <SettingFilled className={styles.icon} />
      </div>
    </div>
  );
}
