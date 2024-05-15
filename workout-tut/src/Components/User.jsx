import React from "react";

function User({ name, email, age }) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>age : {age}</h1>
      <h1>email : {email}</h1>
    </div>
  );
}

export default User;
