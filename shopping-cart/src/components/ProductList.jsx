import React, { useState, useEffect } from 'react'
import { CircularProgress, SimpleGrid } from '@chakra-ui/react'
import { Product } from './Product'

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12', {mode: 'cors', method:'GET'})
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .finally(() => setIsLoading(true));

  }, [])

  if (!isLoading) return <CircularProgress isIndeterminate marginBlockStart={4}/>

  return isLoading && (
      <SimpleGrid columns={3} gap={8} paddingBlockStart={8}>
        {
          products.map((product, key) => {
            return <Product props={product} key={key}/>
          })
        }
      </SimpleGrid>
  )
}
