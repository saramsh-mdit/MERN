import React, { useState } from "react";

export default function BMIForm() {
  const [massState, setMassState] = React.useState();
  const [heightState, setHeightState] = useState();
  const [result, setResult] = useState(-1);

  const submitHandler = (e) => {
    e.preventDefault();
    const height = heightState * 2.4;
    const bmi = (massState / (height * height)) * 703;
    setResult(bmi);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Mass(Body Weight in Kg)</label>
          <input
            onChange={(event) => {
              setMassState(event.target.value);
            }}
            type="number"
          />
        </div>
        <div>
          <label htmlFor="height">Height(Body Weight in Cm)</label>
          <input
            onChange={(e) => setHeightState(e.target.value)}
            type="number"
            id="height"
            name="height"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <h5>Result: {result !== -1 && result.toPrecision(4)}</h5>
    </>
  );
}
