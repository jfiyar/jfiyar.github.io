import React, { useEffect, useRef } from "react";
import { hideDock } from "../Dock";
import styles from "./index.module.less";
import renderCanvasDefault from "./renderCanvasDefault";

export default function Background() {
  const canvas = useRef();
  useEffect(() => renderCanvasDefault(canvas.current));
  return (
    <canvas
      onDoubleClick={() => hideDock()}
      className={styles.canvas}
      ref={canvas}
    />
  );
}
