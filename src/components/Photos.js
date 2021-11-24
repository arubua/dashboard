import React from "react";
import { Box, Image, HStack, VStack, Text } from "@chakra-ui/react";

const Photos = ({ photos }) => {
  console.log(photos);
  return (
    <Box>
      {photos.map((photo) => {
        return (
          <HStack
            m="2em"
            bgColor="gray.100"
            borderRadius="lg"
            p="1em"
            key={photo.id}
          >
            <Box>
              <Image w="100px" h="100px" src={photo.url} alt={photo.title} />
            </Box>
            <Box>
              <VStack>
                <Text>{photo.title}</Text>
                <Text>{photo.id}</Text>
              </VStack>
            </Box>
          </HStack>
        );
      })}
    </Box>
  );
};

export default Photos;
