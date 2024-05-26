import { useEffect, useState } from "react";

import User from "./User";

function ErrorLoading() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const myFetch = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      setUsers(data);
    };
    myFetch();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default ErrorLoading;
