import React from "react";

const RandomCompo = () => {
  const valueRef = React.useRef("");
  const btnRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const [value, setValue] = React.useState("");

  const btnClickHandler = () => {
    inputRef.current.focus();
    console.log(btnRef);
    btnRef.current.className = "bg-blue-500 rounded";
    btnRef.current.innerText = "Changed Btn";
    setValue(valueRef.current);
    console.log(valueRef.current);
  };

  return (
    <div className="flex p-4 justify-between">
      <div className="grid gap-4">
        <input
          ref={inputRef}
          type="text"
          className="border border-solid"
          onChange={(e) => {
            valueRef.current = e.target.value;
          }}
        />
        <button
          className="bg-red-200"
          ref={btnRef}
          onClick={btnClickHandler}
        >
          Focus on Input
        </button>
        <p>Your input {valueRef.current}</p>
        <p>Your input State: {value}</p>
      </div>
    </div>
  );
};

export default RandomCompo;
