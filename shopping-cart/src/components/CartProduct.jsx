import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardHeader, CardBody, Image, CardFooter, Heading, ButtonGroup, Button, Text } from '@chakra-ui/react'

const CartProduct = ({ props }) => {
  return (
    <Card
      direction={{base: 'column', sm: 'row'}}
      variant='outline'
      marginBlockEnd={4}
    >
      <Image boxSize='64px' src={props.image} objectFit='cover'/>
      <CardBody>
        <Heading size='sm' noOfLines={2}>{props.title}</Heading>
        <Text>{props.price}</Text>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button variant='outline'>Remove</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

CartProduct.propTypes = {}

export default CartProduct