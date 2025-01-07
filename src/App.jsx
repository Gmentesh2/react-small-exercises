import "./App.css";
import ImageToggler from "./components/ImageToggler";
import NumberButtons from "./components/NumberButtons";
import RandomButton from "./components/RandomButton";
import RandomColorBox from "./components/RandomColorBox";
import SayHelloComponent from "./components/SayHelloComponent";
import WidthBox from "./components/WidthBox";
const App = () => {
  return (
    <>
      <WidthBox />
      <NumberButtons />
      <RandomButton />
      <RandomColorBox />
      <ImageToggler />
      <SayHelloComponent name="Nika" age={25} />
      <SayHelloComponent name="Giorgi" age={30} />
      <SayHelloComponent name="Maria" age={23} />
    </>
  );
};

export default App;
