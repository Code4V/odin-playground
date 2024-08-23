import {
  Alert,
  AlertIcon,
  AlertTitle,
  Container,
  VStack,
  Flex,
  Spacer
} from '@chakra-ui/react'
import React, { useEffect, useMemo, useState } from 'react'
import { Search } from './Search'
import { ProductList } from './ProductList'
import Cart from './Cart'
import { Nav } from './Nav'
import CategoryList from './CategoryList'

export const HomeContext = React.createContext();
export const ProductContext = React.createContext();

export const Home = () => {
  // For Cart
  const [productIDs, setProductIDs] = useState(
    JSON.parse(localStorage.getItem('currentCart')) ?? []
  )
  const [cartSuccess, setCartSuccess] = useState(false)

  // For Product List
  const [products, setProducts] = useState([])
  // const { isOpen, onToggle, onClose } = useDisclosure()
  const [activeFilter, setActiveFilter] = useState([])
  // const categoryRef = React.useRef()

  const currentCategories = useMemo(() => {
    const cc = []
    const gotProducts = JSON.parse(localStorage.getItem('products'));

    if (!localStorage.getItem('products')) return cc

    gotProducts.filter(prod => {
      if (!cc.includes(prod.category)) cc.push(prod.category)
    })

    return cc
  }, [])

  useEffect(() => {
    if (localStorage.getItem('products') === null) {
      fetch('https://fakestoreapi.com/products', {
        mode: 'cors',
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => {
          setProducts(json)
          localStorage.setItem('products', JSON.stringify(json))
        })
        .catch(err => console.log(err))
    } else {
      const parsedLocalProducts = JSON.parse(localStorage.getItem('products'))

      const filteredProducts = parsedLocalProducts.filter(item => {
        if (activeFilter.includes(item.category)) return item
      })

      setProducts(
        filteredProducts.length === 0 ? parsedLocalProducts : filteredProducts
      )
    }

    //   fetch('https://fakestoreapi.com/carts/1', { mode: 'no-cors' })
    //     .then(response => response.json())
    //     .then(data => {
    //       setProductIDs(data.products)
    //     })
  }, [activeFilter, currentCategories])

  const deleteCartProduct = newCart => {
    setProductIDs(newCart)
  }

  const handleSearch = searchItem => {
    if (localStorage.length !== 0) {
      setProducts(
        JSON.parse(localStorage.getItem('products')).filter(item => {
          return item.title.includes(searchItem)
        })
      )
    }
  }

  const handleAddCart = newProd => {
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
          <Alert
            status="success"
            position="fixed"
            zIndex={1}
            top={4}
            right={4}
            w={256}
          >
            <AlertIcon />
            <AlertTitle>Item Added To Cart</AlertTitle>
          </Alert>
        )
        // {/* </Box> */}
        // </ScaleFade>
      }

      <VStack align="justify" spacing={4} w="100%">
        <Flex align="center">
          <Nav />
          <Spacer />
          <Cart products={productIDs} callbackFn={deleteCartProduct} />
        </Flex>
        <Search callbackFn={handleSearch} />

        <HomeContext.Provider value={[activeFilter, setActiveFilter]}>
          <CategoryList categories={currentCategories} />
        </HomeContext.Provider>

        <ProductContext.Provider value={[handleAddCart]}>
          <ProductList productsItems={products} callbackFn={handleAddCart} />
        </ProductContext.Provider>
      </VStack>
    </Container>
  )
}
