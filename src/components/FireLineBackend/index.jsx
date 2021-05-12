import React, { useEffect, useRef } from "react";
import styles from "./index.module.less";
import renderCanvas from "./renderCanvas";
export default function () {
  const cvsRef = useRef();
  useEffect(() => renderCanvas(cvsRef.current));
  return <canvas ref={cvsRef} className={styles.cvs} />;
}
