import React from 'react';
import { Link } from 'react-router-dom'
import { ShopContext } from '../App';

function Links () {

  const { cartItems } = React.useContext(ShopContext);

  return (
    <ul>
      <li>
        <Link to="Link to the Cart">
          <span>Cart</span>
          <div className="cart-icon">{cartItems.length}</div>
        </Link>
      </li>
    </ul>
  )
}

export default function Header ({ cartItemsCount }) { 
  return (
    <header>
      <nav>
        <Links cartItemsCount={cartItemsCount} />
      </nav>
    </header>
  )
}
