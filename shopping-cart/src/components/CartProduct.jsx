import PropTypes from 'prop-types'
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  Heading,
  ButtonGroup,
  Button,
  Text,
  StackDivider,
  HStack
} from '@chakra-ui/react'

const CartProduct = ({ props, callbackFn }) => {
  const handleOnClick = () => {
    callbackFn(props.id)
  }
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      variant="outline"
      marginBlockEnd={4}
      key={props.id}
    >
      <Image
        boxSize="80px"
        src={props.image}
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
      />
      <CardBody>
        <HStack spacing={4} divider={<StackDivider />}>
          <Heading size="sm" noOfLines={2} w="256px">
            {props.title}
          </Heading>
          <Text>${props.price}</Text>
          <Text>{props.quantity}</Text>
          <Text>${props.price * props.quantity}</Text>
        </HStack>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button variant="outline" onClick={handleOnClick}>
            Remove
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

CartProduct.propTypes = {
  props: PropTypes.objectOf(PropTypes.string),
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  callbackFn: PropTypes.func
}

export default CartProduct
