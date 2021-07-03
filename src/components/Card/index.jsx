import { Button } from "antd";
import React from "react";
import $ from "./index.less";
export default function Card() {
  return (
    <div className={$.cardView}>
      <div className={$.cardBlue}></div>
      <div className={$.cardRed}></div>
      <div className={$.cardGreen}></div>
      <Button className={$.danger} type="danger">
        danger
      </Button>
    </div>
  );
}
