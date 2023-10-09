import "./App.scss";
import Stepper from "./components/Stepper";
import StepperTitle from "./components/StepperTitle";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex justify-start bg-white w-[329px] h-[282px] border-[1px] border-[#EBF0F1] rounded-[20px] boxed p-6">
        <Stepper />
        <StepperTitle />
      </div>
    </div>
  );
}

export default App;
