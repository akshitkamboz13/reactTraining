import ArguePass from "./components/goal/arguePass/arguePass.jsx";
import DynamicComponent from "./components/goal/dynamicComponent/DynamicComponent.jsx";
import Goal,{MadeGoal,GoalInvalid} from "./components/goal/Goal";
import Navbar from "./components/navbar/Navbar.jsx.";

function App() {
  return (
    <>
    <Navbar/>
    <Goal/>
    <MadeGoal/>
    <GoalInvalid/>
    <DynamicComponent/>
    <ArguePass name = "abhishek"/>
    </>
  )
}

export default App;
