import {
  Container,
  Center,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import { Product } from "./Product";
import { ProductList } from "./ProductList";
import Cart from "./Cart";

export const Home = () => {
  const [ cartContent, setCartContent ] = useState([]);
  const [ productIDs, setProductIDs] = useState();
  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/1', {mode: 'cors'})
      .then(response => response.json())
      .then(data => { 
        console.log(data.products)
          setProductIDs(data.products)
      })

        console.log(productIDs, 'This is what goes in')

        // productIDs.forEach(prod => {
        //   fetch(`https://fakestoreapi.com/products/${prod.productId}`, {mode: 'cors'})
        //     .then(response => response.json())
        //     .then(sData => {
        //       console.log(sData)
        //       setCartContent(cartContent.push(sData))
        //   })
        // })
  }, [])

  return (
    <Container maxW="1023px" colorScheme="brand" centerContent marginBlockStart={4}>
      <VStack align="justify" spacing={4} w="100%">
        <Flex align="center">
          <Text fontSize="3xl">The Odin Store</Text>
          <Spacer />
          <Cart products={productIDs} />
        </Flex>
        <Search />
      </VStack>
      <ProductList />
    </Container>
  );
};
