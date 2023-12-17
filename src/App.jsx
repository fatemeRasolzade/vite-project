import { useReducer } from "react";
import "./App.css";
import { useDispatchTheme, useTheme } from "./context/ThemeContext";

const initialState = 0;
function reducerAction(state, { type, payload }) {
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
  const theme = useTheme();
  const dispatchTheme = useDispatchTheme();

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increase", payload: 1 })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease", payload: 1 })}>Decrease</button>
      <p>
        <input type="checkbox" value={theme} checked={theme === true} onChange={() => dispatchTheme()} />
        <label>{theme ? "true" : "false"}</label>
      </p>
    </>
  );
}

export default App;
