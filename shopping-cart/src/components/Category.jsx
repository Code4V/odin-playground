import React from 'react'
import PropTypes from 'prop-types'
import { 
  Button, 
} from '@chakra-ui/react'


const Category = ({ props }) => {
  const [ isActive, setIsActive ] = React.useState(false);
  const handleOnClick = () => {
    setIsActive(!isActive);
  }

  return (
    <Button width='fit-content' size='sm' variant={!isActive ? 'outline' : 'solid'} onClick={handleOnClick}>{ props.category ?? 'shiiiet' }</Button>
  )
}

Category.propTypes = {
  props: PropTypes.object,
  category: PropTypes.string,
}

export default Category