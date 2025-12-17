import { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(max) {
    return Math.floor(Math.random() * max);
  }

  function createHexColor() {
    const hex = [
      "0", "1", "2", "3", "4", "5", "6", "7",
      "8", "9", "A", "B", "C", "D", "E", "F"
    ];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    return hexColor;
  }

  function createRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function generateColor(selectedType = typeOfColor) {
    if (selectedType === "hex") {
      setColor(createHexColor());
    } else {
      setColor(createRgbColor());
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem"
      }}
    >
      <div>
        <button
          onClick={() => {
            setTypeOfColor("hex");
            generateColor("hex");
          }}
        >
          Create HEX Color
        </button>

        <button
          onClick={() => {
            setTypeOfColor("rgb");
            generateColor("rgb");
          }}
        >
          Create RGB Color
        </button>

        <button onClick={() => generateColor()}>
          Generate Random Color
        </button>
      </div>

      <h1>{color}</h1>
      <h3>{typeOfColor.toUpperCase()}</h3>
    </div>
  );
}

export default RandomColor;
