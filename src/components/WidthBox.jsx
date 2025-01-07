import { useState } from "react";

const WidthBox = () => {
  const [width, setWidth] = useState(300);
  return (
    <div
      style={{
        padding: "20px",
        height: "100px",
        background: "orange",
        width: `${width}px`,
      }}
    >
      <button
        onClick={() => setWidth(width + 10)}
        style={{ cursor: "pointer", border: "none", background: "yellow" }}
      >
        Increase width
      </button>
    </div>
  );
};

export default WidthBox;
