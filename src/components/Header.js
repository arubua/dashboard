import { IconButton, Flex, Heading, Link, Box } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import UserProfile from "./UserProfile";

import Image from "next/image";
import DILlogo from "../../public/dillogo.png";

export default function Header({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      top="0"
      height="20"
      zIndex="1"
      alignItems="center"
      bg="transparent"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Box display={{ base: "flex", md: "none" }}>
        <Image src={DILlogo} alt="logo" width="70%" height="70%" />
      </Box>

      <UserProfile />
    </Flex>
  );
}
