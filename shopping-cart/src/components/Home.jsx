import {
  Alert,
  AlertIcon,
  AlertTitle,
  Container,
  VStack,
  Flex,
  Spacer
} from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { Search } from './Search'
import { ProductList } from './ProductList'
import Cart from './Cart'
import { Nav } from './Nav'
import CategoryList from './CategoryList'

export const Home = () => {
  // For Cart
  const [productIDs, setProductIDs] = useState(
    JSON.parse(localStorage.getItem('currentCart')) ?? []
  )
  const [cartSuccess, setCartSuccess] = useState(false)

  // For Product List
  const [products, setProducts] = useState([])
  // const { isOpen, onToggle, onClose } = useDisclosure()

  const currentCategories = useMemo(() => {
    const cc = [];
    console.log(products, 'sheesh')
    products.filter(prod => {
      if (!cc.includes(prod.category)) 
        cc.push(prod.category)
    });

    return cc;

  }, [products]);

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
      setProducts(JSON.parse(localStorage.getItem('products')))
    }

    //   fetch('https://fakestoreapi.com/carts/1', { mode: 'no-cors' })
    //     .then(response => response.json())
    //     .then(data => {
    //       setProductIDs(data.products)
    //     })
  }, [])

  const deleteCartProduct = newCart => {
    setProductIDs(newCart)
  }

  const handleSearch = searchItem => {
    if (localStorage.length !== 0) {
      console.log(searchItem)
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
          <Nav />
          <Spacer />
          <Cart products={productIDs} callbackFn={deleteCartProduct} />
        </Flex>
        <Search callbackFn={handleSearch} />
        <CategoryList categories={currentCategories} />
        <ProductList productsItems={products} callbackFn={handleAddCart} />
      </VStack>
    </Container>
  )
}
