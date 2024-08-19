import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/react'
import { HomeContext } from './Home'

const Category = ({ props }) => {
  const [isActive, setIsActive] = React.useState(false)
  const [activeFilter, setActiveFilter] = useContext(HomeContext)

  const handleOnClick = () => {
    setIsActive(!isActive)

    if (!activeFilter.includes(props.category)) {
      setActiveFilter([props.category, ...activeFilter])
    }

    console.log(activeFilter)
  }

  return (
    <Button
      width="fit-content"
      transition="250ms ease-in-out"
      size="sm"
      variant={!isActive ? 'outline' : 'solid'}
      onClick={handleOnClick}
    >
      {props.category ?? 'shiiiet'}
    </Button>
  )
}

Category.propTypes = {
  props: PropTypes.object,
  category: PropTypes.string
}

export default Category
