import { useState } from "react";

function FetchDataExample() {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => setUsers(data));
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchDataExample;
