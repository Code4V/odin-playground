/* eslint-disable no-undef */
import Strawberry from './assets/Strawberry.webp';
import './Favorite.css'

// Fruit.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// }

function Fruit (props) {
  return (
    <li>
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
  return (
    <ul className="favfood">
      {props.fruits.map((fruit, key) => (
        <Fruit name={fruit.name} description={fruit.description} key={key}/>
      ))}
    </ul>
  )
}

export default Favorite;