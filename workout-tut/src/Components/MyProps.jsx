import React from "react";
import AllProps from "./AllProps";

function MyProps(props) {
  const firstName = "Rohit";
  return (
    <>
      <AllProps firstName={"Rohit"} />
      <AllProps firstName={"Rohit"} lName={"Shinde"} />

      {/* // children  */}
      {/* <AllProps>
        <h1>my name is {firstName}</h1>
      </AllProps> */}
      <AllProps {...props} />
    </>
  );
}

export default MyProps;
