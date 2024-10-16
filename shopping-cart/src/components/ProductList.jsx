import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { CircularProgress, SimpleGrid } from '@chakra-ui/react'
import { Product } from './Product'

const ProductList = ({ productsItems = [], callbackFn }) => {
  useEffect(() => {}, [])

  return (
    <>
      {
        !productsItems.length ? (
          <CircularProgress isIndeterminate marginBlockStart={4} />
        ) : (
          <SimpleGrid columns={3} gap={8} paddingBlockStart={8}>
            {productsItems.map((product, key) => {
              return (
                <Product props={product} key={key} callbackFn={callbackFn} />
              )
            })}
          </SimpleGrid>
        )
        // )
      }
    </>
  )
}

ProductList.propTypes = {
  productsItems: PropTypes.array,
  callbackFn: PropTypes.func
}

export { ProductList }
