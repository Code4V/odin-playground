import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Heading,
  ButtonGroup,
  Button,
  Text
} from '@chakra-ui/react'

const CartProduct = ({ props, callbackFn }) => {

  const handleOnClick = () => {
    callbackFn(props.id);
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
        <Heading size="sm" noOfLines={2}>
          {props.title}
        </Heading>
        <Text>
          {`${props.price} * ${props.quantity} TOTAL AMOUNT ${props.price * props.quantity}`}{' '}
        </Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button variant="outline" onClick={handleOnClick}>Remove</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

CartProduct.propTypes = {
  props: PropTypes.objectOf(PropTypes.string),
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
}

export default CartProduct
