/* eslint-disable no-undef */
import { useState } from 'react';
import Strawberry from './assets/Strawberry.webp';
import './Favorite.css';
import { v4 as uuid4 } from 'uuid';

// Fruit.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// }

function Fruit (props) {
  return (
    <li>
      <p className='favfood__id' data-id={props.id}>{props.id}</p>
      <div className="favfood__img"><img src={Strawberry} alt="" /></div>
      <h1 className="favfood__title">{props.name}</h1>
      <p className="favfood__description">{props.description}</p>
    </li>
  )
}

// Favorite.propTypes = {
//   fruits: PropTypes.object.isRequired,
// }

function Favorite (props) {

  const [fruitState, setFruitState] = useState(props.fruits);
  const [testState, setTestState] = useState([]);
  // const [numState, setNumState] = useState(0);

  const addFruit = () => {
    fruitState.push({name: "tesd", description: "kerea", id: uuid4()})
    console.log(fruitState)
    setFruitState(fruitState);

    testState.push("fee")
    setTestState([...testState])

    // setNumState(numState + 1)
  };

  return (
    <>
      {testState.map((element) => {
        return <p>{element}</p>

      })}
      <ul className="favfood">
        {/* {fruitState.map((fruit, key) => (
          <Fruit name={fruit.name} description={fruit.description} key={key} id={fruit.id}/>
        ))} */}
      </ul>
      <button type='button' onClick={addFruit}> Add a Fruit </button>
    </>
  )
}

export default Favorite;