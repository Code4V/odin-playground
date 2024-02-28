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

  const COLOR = ["yellow", "blue", "green"]

  const [ backgroundState, setBackgroundState ] = useState({"background-color": COLOR[0]});
  return (
    <li style={backgroundState}>
      <p className='favfood__id' data-id={props.id}>{props.id}</p>
      <div className="favfood__img"><img src={Strawberry} alt="" /></div>
      <h1 className="favfood__title">{props.name}</h1>
      <p className="favfood__description">{props.description}</p>
      <button type='button' onClick={() => {
        const random = Math.round(Math.random() * 2);

        setBackgroundState({"background-color": COLOR[random]});
      }}> Change the color </button>
    </li>
  )
}

// Favorite.propTypes = {
//   fruits: PropTypes.object.isRequired,
// }

function Favorite (props) {

  const [fruitState, setFruitState] = useState(props.fruits);

  const addFruit = () => {
    fruitState.push({name: "tesd", description: "kerea", id: uuid4()})
    setFruitState([...fruitState]);

    // setNumState(numState + 1)
  };

  return (
    <>
      <ul className="favfood">
        {fruitState.map((fruit, key) => (
          <Fruit name={fruit.name} description={fruit.description} key={key} id={fruit.id}/>
        ))}
      </ul>
      <button type='button' onClick={addFruit}> Add a Fruit </button>
    </>
  )
}

export default Favorite;