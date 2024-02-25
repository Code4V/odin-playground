import Strawberry from './assets/Strawberry.webp';
import './Greeting.css'

function Greeting () {
  return <div className="favfood">
    <div className="favfood__img"><img src={Strawberry} alt="" /></div>
    <h1 className="favfood__title">strawberry</h1>
    <p className="favfood__description">sweet and a little tangy</p>
  </div>
}

export default Greeting;