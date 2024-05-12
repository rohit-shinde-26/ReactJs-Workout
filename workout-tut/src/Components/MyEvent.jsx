import React from "react";
import MyEvent2 from "./MyEvent2";

function MyEvent() {
  function myInfo(fName, lName) {
    console.log(fName, lName);
  }
  //   function MyAns() {
  //     myInfo("Rohit", "Shinde");
  //   }

  // use wrapper
  return (
    <div>
      <button
        onClick={(e) => {
          myInfo("Rohit", "Shinde");
          e.target.textContent = "Button Clicked !!!";
        }}
      >
        Click me
      </button>
      <MyEvent2 />
    </div>
  );
}

export default MyEvent;
