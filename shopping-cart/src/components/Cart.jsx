import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CartProduct from './CartProduct'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  HStack,
  StackDivider,
  Icon,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import { IoCart } from 'react-icons/io5'

const Cart = ({ products = [], callbackFn }) => {
  const [cart, setCart] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  function getCart() {
    const gotProducts = JSON.parse(localStorage.getItem('products'));

    const prodToCart = products.length  ? 
                        products : 
                        JSON.parse(localStorage.getItem('currentCart'));

    const toCart = prodToCart.map(prod => {
      return { ...gotProducts[prod.productId - 1], quantity: prod.quantity }
    })

    setCart(toCart)
  }

  const storeCartToStorage = () => {
    if (products.length) {
      const cartToLocalStorage = products.map(item => {
        return {'productId': item.productId, 'quantity': item.quantity}
      });
  
      localStorage.setItem('currentCart', JSON.stringify(cartToLocalStorage));
    }

    return 0;
  }

  const removeProduct = id => {
    setCart(cart.filter(element => id !== element.id))
    callbackFn(products.filter(element => id !== element.productId))

    return 0
  }

  useEffect(() => {
    const updateCart = setTimeout(() => {
      getCart();
      storeCartToStorage();
    }, 1000)

    return () => {
      clearTimeout(updateCart)
    }
  }, [ products ])

  return (
    <Box>
      <Icon as={IoCart} w={8} h={8} ref={btnRef} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>
          <DrawerBody>
            <HStack spacing={4} divider={<StackDivider />}>
              <Heading size="sm" noOfLines={2} w="256px">
                Product
              </Heading>
              <Text>Price</Text>
              <Text>Qty</Text>
              <Text>Total</Text>
            </HStack>
            {cart &&
              cart.map((product, key) => {
                return (
                  <CartProduct
                    props={product}
                    key={key}
                    callbackFn={removeProduct}
                  />
                )
              })}
          </DrawerBody>
          <DrawerFooter>
            <Text>
              TOTAL CART AMOUNT:{' $'}
              {cart.length &&
                cart
                  .map(prod => {
                    return prod.quantity * prod.price
                  })
                  .reduce((prev, curr) => (prev += curr))
                  .toFixed(2)}
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  callbackFn: PropTypes.func
}

export default Cart
