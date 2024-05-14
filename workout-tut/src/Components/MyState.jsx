import React, { useState } from "react";

function MyState() {
  //   const first = useState("Ram");
  //   const myName = first[0];
  //   const finalAns = first[1];
  //   function myFunc() {
  //     finalAns("Sham");
  //   }

  const [name, setName] = useState("ram");
  function myFunc() {
    if (name === "ram") {
      setName("Sham");
    } else {
      setName("ram");
    }
  }
  return (
    <div>
      <h1>{name}</h1>
      {/* <button onClick={() => setName("Sham")}>Click</button> */}
      <button onClick={myFunc}>Click</button>
    </div>
  );
}

export default MyState;
