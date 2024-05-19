import React, { useState } from "react";

function RadioBtn() {
  const [gender, setGender] = useState("male");
  return (
    <div>
      <h1>Radio Button</h1>
      <form>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          checked={gender === "male"}
          onChange={() => {
            setGender("male");
          }}
        />
        <br />
        <label htmlFor="female">feMale</label>
        <input
          type="radio"
          id="female"
          checked={gender === "female"}
          onChange={() => {
            setGender("female");
          }}
        />
        <br />
      </form>
    </div>
  );
}

export default RadioBtn;
