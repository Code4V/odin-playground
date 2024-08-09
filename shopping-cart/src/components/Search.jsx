import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const Search = ({ searchInput, callbackFn }) => {
  const handleOnChange = (e) => {
    callbackFn(e.value)
  }
  return (
    <InputGroup>
      <Input placeholder="Looking for something?" variant="outline" onChange={handleOnChange} value={searchInput}/>
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  )
}
