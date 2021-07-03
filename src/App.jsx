import "./app.less";
import React from "react";
import Card from "./components/Card";
import { Button } from "antd";
import { Space } from "antd";
import { Input } from "antd";
import { Divider } from "antd";

function App() {
  return (
    <>
      <Space>
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="danger">danger</Button>
      </Space>
      <Divider />
      <Space>
        <Input />
      </Space>
      <Card />
    </>
  );
}

export default App;
