import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <Link to="/">
      <Text fontSize="3xl">The Odin Store</Text>
    </Link>
  )
}
