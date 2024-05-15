import React from "react";
import { useState } from "react";

function StateObject() {
  const [person, setPerson] = useState({
    id: 1,
    name: "Ram",
    email: "rohitshinde@gmail.com",
    qualification: "BCS",
    age: 22,
  });
  function Increase() {
    setPerson((prevState) => {
      return { ...prevState, id: prevState.id + 1 };
    });
  }
  return (
    <div>
      <p>id : {person.id}</p>
      <p>name : {person.name}</p>
      <p>email : {person.email}</p>
      <p>qualification : {person.qualification}</p>
      <p>age : {person.age}</p>
      <button onClick={Increase}>Increase</button>
    </div>
  );
}

export default StateObject;
