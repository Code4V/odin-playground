import React from 'react'

export const Reducer = () => {
  function reducer (state, action) {
    switch (action.type) {
      case "increment_count": {
        return { count: state.count + 1 };
      }
      case "decrement_count": {
        return { count: state.count - 1 };
      }
      case "set_count": {
        return { count: action.value };
      }
      default: {
        throw new Error("unkown action: " + action.type);
      }
    }
  }

  const [ state, dispatch ] = React.useReducer(reducer, { count: 0 });


  function handleClick() {
    dispatch({type: "increment_count" });
  }

  function handleClickBack() {
    dispatch({type: "decrement_count"});
  }

  return (
    <div>
      { state.count } <br />
      <button onClick={() => handleClick()}>Click Me Please</button><br />
      <button onClick={() => handleClickBack()}>Click Me Back</button>
    </div>
  )
}
