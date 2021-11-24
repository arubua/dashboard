import React from "react";
import { Input, InputGroup, useColorModeValue } from "@chakra-ui/react";

export function SearchBar(props) {
  const mainTeal = useColorModeValue("teal.300", "teal.300");

  const inputBg = useColorModeValue("white", "gray.800");
  return (
    <InputGroup
      bg={inputBg}
      borderRadius="15px"
      w="200px"
      _focus={{
        borderColor: { mainTeal },
      }}
      _active={{
        borderColor: { mainTeal },
      }}
    >
      <Input
        w="350px"
        fontSize="sm"
        py="11px"
        placeholder="Search photos"
        borderRadius="inherit"
      />
    </InputGroup>
  );
}
