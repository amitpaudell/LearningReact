import { useReducer, useState } from "react";

export default function ReducerBank() {
  function reducer(state, action) {
    if (action.type == "deposit") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "withdraw") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { balance: 0 });

  return (
    <>
      {state.balance}
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: Number(amount) });
        }}
      >
        Deposit
      </button>
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: Number(amount) });
        }}
      >
        WithDraw
      </button>
    </>
  );
}
