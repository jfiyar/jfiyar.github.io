import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
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
  [tengxunIcon, "1"],
  [huyaIcon, "2"],
  [bingIcon, "3"],
  [baiduIcon, "4"],
  [googleIcon, "5"],
  [githubIcon, "6"],
];

export function hideDock() {}

export default function () {
  const [visible, setVisible] = useState(true);

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
              <img className={styles.icon} src={icon} />
            </a>
          );
        })}
        <SettingOutlined className={styles.icon} />
        <SettingFilled className={styles.icon} />
      </div>
    </div>
  );
}
