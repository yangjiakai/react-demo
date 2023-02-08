import React from "react";

function DemoA() {
  const msg = "Hello World";
  const myName = "John Doe";

  return (
    <div>
      <h1>Demo A {msg}</h1>
      {myName}
      <input value={myName} type="text" />
    </div>
  );
}

export default DemoA;
