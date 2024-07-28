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
  return (
    <Container maxW="1023px" colorScheme="brand" centerContent marginBlockStart={4}>
      <VStack align="justify" spacing={4} w="100%">
        <Flex align="center">
          <Text fontSize="3xl">The Odin Store</Text>
          <Spacer />
          <Cart />
        </Flex>
        <Search />
      </VStack>
      <ProductList />
    </Container>
  );
};
