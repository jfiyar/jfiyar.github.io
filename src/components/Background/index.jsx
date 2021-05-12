import React, { useEffect, useRef } from "react";
import renderCanvas from "./renderCanvas";
import styles from "./index.module.less";

export default function Background() {
  const canvas = useRef();
  useEffect(() => renderCanvas(canvas.current));
  return <canvas className={styles.canvas} ref={canvas} />;
}
