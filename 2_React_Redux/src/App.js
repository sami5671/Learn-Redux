import { Provider } from "react-redux";
// import Counter from "./components/Counter";
import store from "./redux/store";
import HooksCounter from "./components/HooksCounter";
import DynamicHooksCounter from "./components/DynamicHooksCounter";
import VariableCounter from "./components/VariableCounter";

export default function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          {/* <Counter id="1" /> */}
          <h1>Static counter</h1>
          <HooksCounter />
          <h1>Dynamic counter</h1>
          <DynamicHooksCounter />

          {/*  */}

          <h1>OwnPros</h1>
          <VariableCounter />
          <VariableCounter dynamic />
        </div>
      </div>
    </Provider>
  );
}
