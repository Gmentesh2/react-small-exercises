/* eslint-disable react/prop-types */

const SayHelloComponent = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello my name is {name}, and my age is {age}
      </p>
    </div>
  );
};

export default SayHelloComponent;
