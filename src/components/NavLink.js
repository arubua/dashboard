import NextLink from "next/link";
import { Flex, Icon, Text, Center } from "@chakra-ui/react";

export default function NavLink({ link, ...rest }) {
  const { label, icon, href } = link;
  return (
    <NextLink ml="1em" href={href} passHref>
      <a>
        <Flex
          align="center"
          p="2.5"
          mx="4"
          color="gray.500"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "red.100",
            color: "red.500",
          }}
          _active={{
            bg: "red.100",
            color: "red.500",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="24"
              _groupHover={{
                color: "red.500",
              }}
              as={icon}
            />
          )}
          <Text fontSize="1.2rem">{label}</Text>
        </Flex>
      </a>
    </NextLink>
  );
}
