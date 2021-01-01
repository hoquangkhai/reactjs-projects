import React, { useState } from "react";
import "./App.scss";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Reset from "./components/Reset/Reset";
import Result from "./components/Result/Result";
import SizeSetting from "./components/SizeSetting/SizeSetting";

function App() {
  const [colorInitial, setColorInitial] = useState({
    color: "red",
    fontSize: 16,
  });

  const onSetColor = (color) => {
    setColorInitial({
      ...colorInitial,
      color: color,
    });
  };

  const onChangeSize = (number) => {
    let Size =
      colorInitial.fontSize + number >= 16 &&
      colorInitial.fontSize + number <= 36
        ? colorInitial.fontSize + number
        : colorInitial.fontSize;
    setColorInitial({
      ...colorInitial,
      fontSize: Size,
    });
  };

  const onSettingDefault = (value) => {
    if (value) {
      setColorInitial({
        ...colorInitial,
        color: "red",
        fontSize: 16,
      });
    }
  };

  return (
    <div className="app">
      <div className="container-top">
        <div className="container-top-left">
          <ColorPicker colorInitial={colorInitial} onReciveColor={onSetColor} />
        </div>

        <div className="container-top-right">
          <SizeSetting
            colorInitial={colorInitial}
            onChangeSize={onChangeSize}
          />
          <Reset onSettingDefault={onSettingDefault} />
        </div>
      </div>

      <div className="container-bot">
        <Result colorInitial={colorInitial} />
      </div>
    </div>
  );
}

export default App;
