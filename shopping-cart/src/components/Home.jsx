import { Container, Center, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Search } from './Search';
import { Product } from './Product';
import { ProductList } from './ProductList';

export const Home = () => {
  return (
      <Container maxW='1023px' colorScheme='brand' centerContent>
        <VStack align='justify' spacing={4} w='100%'>
          <Container centerContent>
            <Text fontSize='3xl'>
              The Odin Store
            </Text>
          </Container>
          <Search />
        </VStack>
        <ProductList />
      </Container>
  )
}
