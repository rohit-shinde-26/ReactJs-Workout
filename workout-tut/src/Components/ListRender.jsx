import React from "react";
import ListRender2 from "./ListRender2";
function ListRender() {
  const users = [
    { id: 1, name: "Ram", age: 22 },
    { id: 2, name: "Sham", age: 20 },
    { id: 3, name: "Abhi", age: 18 },
  ];
  return (
    <div>
      {/* / simple way to pass  */}
      {/* <ListRender2 id={users[1].id} name={users[1].name} />
      <ListRender2 id={users[2].id} name={users[2].name} /> */}

      {/* using map  */}
      {/* {users.map((user) => {
        return <ListRender2 id={user.id} name={user.name} />;
      })} */}

      {/* user spread operator  */}
      {users.map((user) => {
        return <ListRender2 {...user} />;
      })}
    </div>
  );
}

export default ListRender;
