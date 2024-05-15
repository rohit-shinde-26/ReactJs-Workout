import React from "react";

function User({ name, email, age, id, increment }) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>age : {age}</h1>
      <h1>email : {email}</h1>
      <button
        onClick={() => {
          increment(id);
        }}
      >
        Increase Age
      </button>
    </div>
  );
}

export default User;
