import { useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import MyBikes from "./MyBikes";

function App() {
  const [bikes, setBikes] = useState([
    { id: 1, name: "S1000RR", color: "blue" },
    { id: 2, name: "Zx10R", color: "Black" },
    { id: 3, name: "Panigle v4", color: "Red" },
    { id: 4, name: "Hayabusa", color: "white" },
  ]);

  function HandleBike() {
    const NewBike = {
      id: crypto.randomUUID(),
      name: "David Putra 2000cc",
    };
    setBikes((prevState) => [...prevState, NewBike]);
  }

  return (
    <>
      <ol>
        {bikes.map((bike) => {
          return <MyBikes name={bike.name} key={bike.id} />;
        })}
        <button onClick={HandleBike}>Add Bike</button>
      </ol>
    </>
  );
}

export default App;
