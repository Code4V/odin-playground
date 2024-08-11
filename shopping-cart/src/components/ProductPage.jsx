import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Stack,
  Button,
  ButtonGroup,
  Container
} from '@chakra-ui/react'

const ProductPage = ({ props, callbackFn }) => {
  const { id } = useParams();
  props = JSON.parse(localStorage.getItem('products'))[Number.parseInt(id) - 1];

  const handleAddCart = () => {
    callbackFn({ productId: props.id, quantity: 1 })
  }

  return (
    <Container maxW='6xl'>
      <Card  size='lg' id={props.id} variant="outline" direction={{base: 'column', sm: 'row'}} >
        <CardHeader w='40%' >
          <Image src={props.image} borderRadius="xl" objectFit="cover" w='512px' h='512px' />
        </CardHeader>
        <Stack w='60%'> 
          <CardBody>
            <Stack spacing={4} marginBlockStart={4}>
              <Heading noOfLines={2} size="lg" fontWeight={700}>
                {props.title}
              </Heading>
              <Text noOfLines={3}>{props.description}</Text>
              <Text fontSize={24} as="b">
                $ {props.price}
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
        </Stack>
      </Card>
    </Container>
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