import { useState } from "react";

const RandomButton = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  return (
    <div>
      <button
        style={{ border: "1px solid green", padding: "40px", borderRadius: "8px", background: "orange", cursor: "pointer" }}
        onClick={() => setRandomNumber(Math.floor(Math.random() * 100))}
      >
        {randomNumber}
      </button>
    </div>
  );
};

export default RandomButton;
