import { useState } from "react";
import ListRender from "./Components/ListRender";
import MyEvent from "./Components/MyEvent";
import MyProps from "./Components/MyProps";
import MyState from "./Components/MyState";
import MyStateArray from "./Components/MyStateArray";
import MyStateCounter from "./Components/MyStateCounter";
import StateObject from "./Components/StateObject";
import Users from "./Components/Users";

function App() {
  // const hobby = "Gaming";
  const [users, setUsers] = useState([
    { id: 1, name: "Ram", age: 22, email: "ram@google.com" },
    { id: 2, name: "Sham", age: 15, email: "sham@google.com" },
    { id: 3, name: "Abhi", age: 62, email: "abhay@google.com" },
  ]);
  function increment(id) {
    // console.log("event clicked");
    // const newArr = [];
    // for (let user of newArr) {
    //   if (user.id === id) {
    //     newArr.push({ ...user, age: user.age + 1 });
    //   } else {
    //     newArr.push(user);
    //   }
    // }
    // setUsers(newArr);

    setUsers((prevState) => {
      return users.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }
  return (
    <>
      {/* <MyProps hobby={hobby} /> */}
      {/* <ListRender /> */}
      {/* <MyEvent /> */}
      {/* <MyState /> */}
      {/* <MyStateArray /> */}
      {/* <MyStateCounter /> */}
      {/* <StateObject /> */}
      <Users users={users} increment={increment} />
    </>
  );
}

export default App;
