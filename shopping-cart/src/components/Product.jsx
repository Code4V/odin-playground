import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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

const Product = ({ props, callbackFn }) => {
  const handleAddCart = () => {
    callbackFn({ productId: props.id, quantity: 1 })
  }

  return (
    <Card id={props.id} variant="outline">
      <Link to={`product/${props.id}`}>
        <AspectRatio ratio={1 / 1}>
          <Image src={props.image} borderRadius="xl" objectFit="cover" />
        </AspectRatio>
        <CardBody>
          <Stack spacing={4} marginBlockStart={2}>
            <Heading noOfLines={2} size="lg" fontWeight={700}>
              {props.title}
            </Heading>
            <Text noOfLines={3}>{props.description}</Text>
            <Text fontSize={24} as="b">
              ${props.price}
            </Text>
          </Stack>
        </CardBody>
      </Link>
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

Product.propTypes = {
  props: PropTypes.object,
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  callbackFn: PropTypes.func
}

export { Product }
