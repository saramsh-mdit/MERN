import { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

const reducerFunction = (initialState = initialState, action) => {
  switch (action.type) {
    case "inc":
      return {
        ...initialState,
        count: initialState.count + 1,
      };
    case "dec":
      return {
        ...initialState,
        count: initialState.count - 1,
      };

    case "add_by":
      return {
        ...initialState,
        count: initialState.count + action.payload.value,
      };
    case "sub_by":
      return {
        ...initialState,
        count: initialState.count - action.payload.value,
      };
    case "reset":
      return {
        ...initialState,
        count: 0,
      };
    default:
      return initialState;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const [incVal, setIncVal] = useState(0);
  return (
    <div>
      <h1>Our Number is {state.count}</h1>
      <br />
      <div className="flex">
        <button onClick={() => dispatch({ type: "dec" })}>Decrement (-)</button>
        <button onClick={() => dispatch({ type: "inc" })}>Increment (+)</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <br />
      <div className="flex">
        <input
          type="number"
          value={incVal}
          onChange={(e) => setIncVal(parseInt(e.target.value))}
        />
        <button
          onClick={() =>
            dispatch({ type: "add_by", payload: { value: incVal } })
          }
        >
          Add By
        </button>
        <button
          onClick={() =>
            dispatch({ type: "sub_by", payload: { value: incVal } })
          }
        >
          Sub By
        </button>
      </div>
    </div>
  );
};

export default App;
