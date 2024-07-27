import {
  Container,
  Center,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import { Product } from "./Product";
import { ProductList } from "./ProductList";

export const Home = () => {
  return (
    <Container maxW="1023px" colorScheme="brand" centerContent>
      <VStack align="justify" spacing={4} w="100%">
        <Flex align="center">
          <Text fontSize="3xl">The Odin Store</Text>
          <Spacer />
          <Icon as={IoCart} w={8} h={8} />
        </Flex>
        <Search />
      </VStack>
      <ProductList />
    </Container>
  );
};
