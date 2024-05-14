import React, { useState } from "react";

function MyStateArray() {
  const [bikes, setBikes] = useState(["BMW", "ZX10R", "Panigle"]);
  function addBike() {
    // setBikes([...bikes, "HAYABUSA"]);
    setBikes((previousVal) => {
      return [...previousVal, "Z900"];
    });
  }
  return (
    <>
      <ul>
        {bikes.map((bike) => (
          <li>{bike}</li>
        ))}
      </ul>
      <button onClick={addBike}>Click</button>
    </>
  );
}

export default MyStateArray;
