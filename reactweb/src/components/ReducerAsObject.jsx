import { useReducer } from "react";

export default function ReducerAsObject() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });
  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "incrementBy") {
      return { ...state, incrementBy: action.payload };
    }
  }
  return (
    <>
      {state.count}
      <input type="text" value={state.incrementBy} onChange={(e) => dispatch({ type: "incrementBy", payload: Number(e.target.value) })} />
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement</button>
    </>
  );
}
