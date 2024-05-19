import React, { useState } from "react";

function HandleMultipleInput() {
  const [formData, setFormData] = useState({
    firstname: "",
    password: "",
    username: "",
  });
  const { firstname, password, username } = formData;
  function handleInput(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="firstName">Firstname :</label>

        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstname}
          onChange={handleInput}
        />

        <label htmlFor="password">password :</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={handleInput}
        />

        <label htmlFor="username">username :</label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={handleInput}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HandleMultipleInput;
