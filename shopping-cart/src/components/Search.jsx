import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Search = () => {
  return (
    <InputGroup>
      <Input placeholder="Looking for something?" variant="outline" />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
};
