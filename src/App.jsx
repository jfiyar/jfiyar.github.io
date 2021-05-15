import "./app.less";
import React, { useEffect, useRef } from "react";
import Dock from "./components/Dock";
import Background from "./components/Background";

function App() {
  const dockRef = useRef();
  useEffect(() => {
    console.log(dockRef);
  });
  return (
    <>
      <Background />
      <Dock />
    </>
  );
}

export default App;
