import { useRef } from "react";
function ExuseRef() {
  const name = useRef();
  function handleRef() {
    // name.current = "Sham";
    let myData = name.current;
    myData.style.background = "red";
    myData.style.color = "blue";
  }
  return (
    <div>
      {/* <h1>{name.current}</h1> */}
      <h2 ref={name}>Ram</h2>
      <button onClick={handleRef}>Change</button>
    </div>
  );
}

export default ExuseRef;
