import { useState } from "react";

const NumberButtons = () => {
  const [numberOne, setNumberOne] = useState(20);
  const [numberTwo, setNumberTwo] = useState(64);
  const [numberThree, setNumberThree] = useState(33);
  return (
    <div>
      <button onClick={() => setNumberOne(numberOne + 3)}>{numberOne}</button>
      <button onClick={() => setNumberTwo(numberTwo - 2)}>{numberTwo}</button>
      <button onClick={() => setNumberThree(numberThree - 5)}>
        {numberThree}
      </button>
    </div>
  );
};

export default NumberButtons;
