import React from "react";
import "./App.scss";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Reset from "./components/Reset/Reset";
import Result from "./components/Result/Result";
import SizeSetting from "./components/SizeSetting/SizeSetting";

function App() {
  return (
    <div className="app">
      <div className="container-top">
        <div className="container-top-left">
          <ColorPicker />
        </div>

        <div className="container-top-right">
          <SizeSetting />
          <Reset />
        </div>
      </div>

      <div className="container-bot">
        <Result />
      </div>
    </div>
  );
}

export default App;
