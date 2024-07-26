import { Container, Center, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { Search } from './Search';

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
      </Container>
  )
}
