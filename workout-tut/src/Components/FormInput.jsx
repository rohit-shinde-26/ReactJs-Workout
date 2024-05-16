import React, { useState } from "react";

function FormInput() {
  const [username, setUsername] = useState("");
  const userInput = (e) => {
    // console.log("clicked");
    setUsername(e.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="userName" id="uname">
          Username :
        </label>
        <input type="text" id="uname" value={username} onChange={userInput} />
      </form>
    </div>
  );
}

export default FormInput;
