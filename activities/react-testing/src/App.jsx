import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  }

  return (
    <> 
      <button type="button" onClick={clickHandler}> Click Me</button>
      <h1>{ heading }</h1>
      <Link to="person"> Go to Profile</Link>
    </>
  )
}

export default App
