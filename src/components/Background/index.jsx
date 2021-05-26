import React, { useEffect, useRef } from "react";
import styles from "./index.module.less";
import renderCanvasDefault from "./renderCanvasDefault";

export default function Background() {
  const canvas = useRef();
  useEffect(() => renderCanvasDefault(canvas.current));
  return <canvas className={styles.canvas} ref={canvas} />;
}
