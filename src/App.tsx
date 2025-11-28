import { useSelector, useDispatch } from "react-redux";
import "./App.css";

import type { RootState } from "./store/store";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./components/counter.component";

function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(15))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;
