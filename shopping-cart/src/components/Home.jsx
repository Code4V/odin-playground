import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Container,
  Center,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  ScaleFade,
  Spacer,
  useDisclosure
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Search } from './Search'
import { Product } from './Product'
import { ProductList } from './ProductList'
import Cart from './Cart'

export const Home = () => {
  const [cartContent, setCartContent] = useState([])
  const [productIDs, setProductIDs] = useState()
  const [cartSuccess, setCartSuccess] = useState(false)
  const { isOpen, onToggle, onClose } = useDisclosure()

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts/2', { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        console.log(data.products)
        setProductIDs(data.products)
      })

    console.log(productIDs, 'This is what goes in')
  }, [])

  const updateCart = newCart => {
    setProductIDs(newCart)
  }

  const handleAddCart = newProd => {
    setProductIDs([...productIDs, newProd])
    setCartSuccess(true)
    // onToggle();

    setTimeout(() => {
      setCartSuccess(false)
      // onClose()
    }, 1500)

    return
  }

  return (
    <Container
      maxW="1023px"
      colorScheme="brand"
      centerContent
      marginBlockStart={4}
    >
      {
        cartSuccess && (
          // <ScaleFade in={isOpen} initialScale={0.9}>
          // {/* <Box w={1080}> */}
          <Alert status="success" position="fixed" zIndex={1} top={0} right={0}>
            <AlertIcon />
            <AlertTitle>Item Added To Cart</AlertTitle>
          </Alert>
        )
        // {/* </Box> */}
        // </ScaleFade>
      }

      <VStack align="justify" spacing={4} w="100%">
        <Flex align="center">
          <Text fontSize="3xl">The Odin Store</Text>
          <Spacer />
          <Cart products={productIDs} callbackFn={updateCart} />
        </Flex>
        <Search />
      </VStack>
      <ProductList callbackFn={handleAddCart} />
    </Container>
  )
}
