import {
  Alert,
  AlertIcon,
  AlertTitle,
  Container,
  Text,
  VStack,
  Flex,
  Spacer
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Search } from './Search'
import { ProductList } from './ProductList'
import Cart from './Cart'

export const Nav = () => {
  const [productIDs, setProductIDs] = useState([])
  const [cartSuccess, setCartSuccess] = useState(false)
  // const { isOpen, onToggle, onClose } = useDisclosure()

  useEffect(() => {

    fetch('https://fakestoreapi.com/carts/1', { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        setProductIDs(data.products)
      })
  }, [])

  const updateCart = newCart => {
    setProductIDs(newCart)
  }

  const handleAddCart = newProd => {
    console.group(newProd, productIDs)
    console.groupEnd()

    if (!productIDs.filter(prod => prod.productId === newProd.productId).length)
      setProductIDs([...productIDs, newProd])
    else {
      const updatedIDs = productIDs.map(prod => {
        if (prod.productId === newProd.productId)
          return {
            ...prod,
            quantity: (prod.quantity += 1)
          }
        else return prod
      })
      setProductIDs(updatedIDs)
    }

    setCartSuccess(true)

    setTimeout(() => {
      setCartSuccess(false)
    }, 1500)

    return 0 
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
      </VStack>
    </Container>
  )
}
