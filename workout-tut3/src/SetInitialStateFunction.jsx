import React, { useState } from "react";

function SetInitialStateFunction() {
  const [myFunc, setFunc] = useState(Func);

  function Func() {
    let myArr = [];
    for (let i = 0; i < 10; i++) {
      myArr.push(~~(Math.random() * 10));
    }
    return myArr;
  }
  return (
    <div>
      <ol>
        {myFunc.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ol>
      <button
        onClick={() => {
          setFunc((prevState) => [...prevState, ~~(Math.random() * 10)]);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default SetInitialStateFunction;
