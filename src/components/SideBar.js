import { Box, CloseButton, Flex, Text } from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  Spacer,
  Center,
} from "react-icons/fi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

import NavLink from "./NavLink";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import DILLogo from "../../public/dillogo.png";

const LinkItems = [
  { label: "Photos", icon: BsFillBagCheckFill, href: "/" },
  { label: "Users", icon: FaUsers, href: "/" },
  { label: "Settings", icon: FiSettings, href: "/" },
];

export default function Sidebar({ onClose, ...rest }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <Box>
      <Box
        transition="3s ease"
        bg="white"
        borderRight="1px"
        borderRightColor="gray.200"
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" m="8" justifyContent="space-between">
          <Image my="1em" src={DILLogo} alt="logo" width="100%" height="100%" />
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Box mt="2.2em">
          {LinkItems.map((link, i) => (
            <NavLink key={i} link={link} />
          ))}
        </Box>

        <Flex
          h="20"
          alignItems="center"
          m="8"
          justifyContent="space-between"
          pos="fixed"
          bottom="1em"
        >
          <Box>
            <Text fontSize="sm" color="gray.500">
              &copy; Data Intergrated Limited
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
