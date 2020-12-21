import { useEffect, useRef, useState } from "react";

function getColorList() {
  let colorList = [
    "#97FFFF",
    "#F4A460",
    "#0000FF",
    "#40E0D0",
    "#54FF9F",
    "#20B2AA",
    "#00FF00",
    "#FFD700",
    "#FF6A6A",
  ];
  return colorList;
}

function randomColor(currentColor) {
  // const randomIndex = Math.trunc(Math.random() * 10);
  const colorList = getColorList();
  const currentIndex = colorList.indexOf(currentColor);
  let newIndex = currentIndex;
  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * colorList.length + 1);
  }

  return colorList[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("#FF0000");
  const colorRef = useRef("#FF0000");

  useEffect(() => {
    const ColorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(ColorInterval);
    };
  }, []);

  return {
    color: color,
  };
}

export default useMagicColor;
