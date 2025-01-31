import { useReducer, useState } from "react";
import ReducerAsObject from "./ReducerAsObject";
import ReducerBank from "./ReducerBank";
export default function UseReducer() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    if (action.type == "increment") {
      return state + action.payload;
    }

    if (action.type == "decrement") {
      return state - action.payload;
    }
  }

  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <br />
      {state}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>Increment count</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement count</button>
      <br />
      <br />
      <br />
      <ReducerAsObject></ReducerAsObject>

      <br />
      <br />
      <br />
      <ReducerBank></ReducerBank>
    </>
  );
}
