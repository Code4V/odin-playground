import React, { useState, useEffect } from "react";
import { CircularProgress, SimpleGrid } from "@chakra-ui/react";
import { Product } from "./Product";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("products") === null) {
      fetch("https://fakestoreapi.com/products", {
        mode: "cors",
        method: "GET",
      })
        .then((response) => response.json())
        .then((json) => {
          setProducts(json);
          localStorage.setItem("products", JSON.stringify(json));
        })
        .finally(() => setIsLoading(true));
    } else {
      setProducts(JSON.parse(localStorage.getItem("products")));
      setIsLoading(true);
    }
  }, []);

  const handleAddCart = (message) => {
    console.log(message);
  };

  if (!isLoading)
    return <CircularProgress isIndeterminate marginBlockStart={4} />;

  return (
    isLoading && (
      <SimpleGrid columns={3} gap={8} paddingBlockStart={8}>
        {products.map((product, key) => {
          return (
            <Product props={product} key={key} addToCart={handleAddCart} />
          );
        })}
      </SimpleGrid>
    )
  );
};
