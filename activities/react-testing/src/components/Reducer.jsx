import React from 'react'

export const Reducer = () => {
  const [ hasError, setHasError ] = React.useState(false);
  function reducer (state, action) {
    try {
      
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
    } catch (e) {
      setHasError(true);
    }
  }

  const [ state, dispatch ] = React.useReducer(reducer, { count: 0 });


  function handleClick() {
    dispatch({type: "increment_count" });
  }

  function handleClickBack() {
    dispatch({type: "decrement_count"});
  }

  function handleError() {
    dispatch({type: "ASDASDADS"});
  }

  function removeError() {
    setHasError(false);
    dispatch({type: "set_count"})
  }

  return (
    <div>
      { hasError &&
        <>
          <p>ERROR BITCH</p>
        </>
      }
      { state && state.count } <br />
      <button onClick={() => handleClick()}>Click Me Please</button><br />
      <button onClick={() => handleError()}>Click Me Back</button>
      <button onClick={() => removeError()}>Click Me Back</button>
    </div>
  )
}
