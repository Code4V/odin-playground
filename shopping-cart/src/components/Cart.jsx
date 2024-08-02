import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Product } from "./Product";
import CartProduct from "./CartProduct";
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
} from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";

const Cart = ({ products = [] }) => {
  const [cart, setCart] = useState([]);

  function getCart() {
    const gotProducts = JSON.parse(localStorage.getItem("products"));
    const toCart = products.map((prod, key) => {
      return gotProducts[prod.productId - 1];
    });

    setCart(toCart);
  }

  useEffect(() => {
    const updateCart = setInterval(() => {
      getCart();
    }, 1000);

    return () => {
      clearInterval(updateCart);
    };
  }, [products]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Icon as={IoCart} w={8} h={8} ref={btnRef} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>
          <DrawerBody>
            {cart &&
              cart.map((product, key) => {
                return <CartProduct props={product} key={key} />;
              })}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
};

export default Cart;
