import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Stack,
  AspectRatio,
  Button,
  ButtonGroup
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

const ProductPage = ({ props, callbackFn }) => {
  const { id } = useParams();
  const productId = useRef(props)

  useEffect(() => {
    productId.current = JSON.parse(localStorage.getItem('products'))[Number.parseInt(id) - 1];
    console.log(productId)
  })

  const handleAddCart = () => {
    callbackFn({ productId: props.id, quantity: 1 })
  }

  return (
    <Card id={productId.current.id} variant="outline">
      <CardBody>
        <AspectRatio ratio={1 / 1}>
          <Image src={productId.current.image} borderRadius="xl" objectFit="cover" />
        </AspectRatio>
        <Stack spacing={4} marginBlockStart={4}>
          <Heading noOfLines={2} size="lg" fontWeight={700}>
            {productId.current.title}
          </Heading>
          <Text noOfLines={3}>{productId.current.description}</Text>
          <Text fontSize={24} as="b">
            ${productId.current.price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup gap={2}>
          <Button variant="solid">Buy Now</Button>
          <Button variant="outline" onClick={handleAddCart}>
            Add Cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

ProductPage.propTypes = {
  props: PropTypes.object,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  callbackFn: PropTypes.func
}

export { ProductPage }
