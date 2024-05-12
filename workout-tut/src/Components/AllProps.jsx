import React from "react";

// function AllProps(props) {
//   return (
//     <div>
//       <h1>my name is {props.firstName}</h1>
//     </div>
//   );
// }

// function AllProps({ children, firstName }) {
//   return (
//     <div>
//       <h1>{children}</h1>
//     </div>
//   );
// }

// function AllProps(props) {
//   const { firstName, lNmae } = props;
//   return (
//     <div>
//       <h1>my name is {firstName}</h1>
//     </div>
//   );
// }

function AllProps(props) {
  return (
    <div>
      <h1>my name is {props.firstName}</h1>
      <h1>my hobby is {props.hobby}</h1>
    </div>
  );
}
export default AllProps;
