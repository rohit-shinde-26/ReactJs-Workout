import { useRef } from "react";

function HandleFormRefInput() {
  const uname = useRef();
  const pass = useRef();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const myUname = uname.current.value;
          const myPass = uname.current.value;
          console.log("Username:", myUname, "password :", myPass);
        }}
      >
        <label htmlFor="username">Username :</label>
        <br />
        <input type="text" name="username" id="username" ref={uname} />
        <br />
        <label htmlFor="pass">Password :</label>
        <br />
        <input type="password" name="pass" id="pass" ref={pass} />

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HandleFormRefInput;
