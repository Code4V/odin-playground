import React from 'react'
import { ShopContext } from '../App'

export const ProductDetail = () => {
  const { products, addToCart } = React.useContext(ShopContext);
  
  return (
    <div>
      {}
      <div className="">
        <button type="button" onClick={() => addToCart()}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}
