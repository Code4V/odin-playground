import React, { useState } from "react";


function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  }

  return (
    <> 
    <button type="button" onClick={clickHandler}> Click Me</button>
      <h1>{ heading }</h1>
    </>
  )
}

export default App
