import PropTypes from 'prop-types'
import { ButtonGroup } from '@chakra-ui/react'
import Category from './Category'

const CategoryList = ({ categories }) => {

  return (
    <ButtonGroup>
      {categories &&
        categories.map((category, key) => {
          return <Category props={{ category: category }} key={key} />
        })}
    </ButtonGroup>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(<Category />)
}

export default CategoryList
