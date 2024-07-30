import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Product } from './Product';
import { 
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'
import { IoCart } from 'react-icons/io5'

const Cart = ({ products = [] }) => {

  console.log(products, 'Product cart CART')

  const [ cart, setCart ] = useState([]);

  console.log(cart, "THE CART")

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products`, {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
          console.log(data)
        });

      
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Icon as={IoCart} w={8} h={8} ref={btnRef} onClick={onOpen}/>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='md'
      >
        <DrawerOverlay /> 
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>
          <DrawerBody>
            { cart && cart.map((product, key) => {
              return <Product props={product} key={key}/>
            }) } 
          </DrawerBody>
          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
    
  )
}

Cart.propTypes = {
  products: PropTypes.array,
}

export default Cart