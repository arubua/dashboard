import React from "react";
import { Box, Spinner, Heading } from "@chakra-ui/react";

import { useEffect } from "react";

import Photos from "../components/Photos";
import { SearchBar } from "../components/SearchBar";

export default function Home() {
  const [photos, setPhotos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const photos = await response
        .json()
        .then((photos) => photos.filter((photo) => photo.id < 15));
      setPhotos(photos);
      setIsLoading(false);
    };
    fetchData();
  }, [setPhotos]);

  return (
    <Box bg="white" minH="100vh" p="1em" borderRadius="lg" boxShadow="md">
      <Heading m="0.2em">Photos</Heading>
      <SearchBar />
      {isLoading ? <Spinner m="2em" /> : <Photos photos={photos} />}
    </Box>
  );
}
