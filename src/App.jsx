import { useReducer } from "react";
import "./App.css";

const initialState = 0;
function reducerAction(state, { type, payload }) {
  console.log(type);
  switch (type) {
    case "increase":
      return state + payload;
    case "decrease":
      return state - payload;

    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerAction, initialState);

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increase", payload: 1 })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease", payload: 1 })}>Decrease</button>
    </>
  );
}

export default App;
