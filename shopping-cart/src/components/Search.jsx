import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Search = ({ callbackFn }) => {
  const [searchInput, setSearchInput] = useState('')
  const handleOnChange = e => {
    setSearchInput(e.target.value)
    callbackFn(e.target.value)
  }
  return (
    <InputGroup>
      <Input
        placeholder="Looking for something?"
        variant="outline"
        onChange={handleOnChange}
        value={searchInput}
      />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  )
}

Search.propTypes = {
  callbackFn: PropTypes.func
}

export { Search }
