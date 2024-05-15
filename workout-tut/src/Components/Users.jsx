import React from "react";
import User from "./User";
function Users({ users, increment }) {
  return (
    <div>
      {/* {users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.email}</h1>
          </div>
        );
      })} */}
      {users.map((user) => {
        return <User {...user} increment={increment} key={user.id} />;
      })}
    </div>
  );
}

export default Users;
