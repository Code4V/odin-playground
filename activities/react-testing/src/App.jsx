import React, { useState } from "react";
import Header from "./components/Header";
import { ProductDetail } from "./components/ProductDetail";

import { Link } from "react-router-dom";

export const ShopContext = React.createContext({
  products: [],
  cartItems: [],
  addToCart: () => {console.log('I the con')},
})

function App() {
  const [cartItems, setCartItems] = useState([

  ]);

  const products = [];

  const addToCart = () => console.log('con the I');

  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}> 
      <Header cartItemsCount={cartItems.length}/>
      <ProductDetail />
    </ShopContext.Provider>
  )
}

export default App
