import NextLink from "next/link";
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Image from "next/image";

import logo from "../assets/agnelo.png";

const Links = ["Man", "Woman", "Woman", "Sport" ,"Brand" , "Accessories" ];

// Este componente envolve um link do ChakraUI para estilizá-lo com alguns estilos pré-definidos
const LinkWrapper = ({ children }) => (
  <ChakraLink
    // Define o espaçamento horizontal do link
    px={2}
    // Define o espaçamento vertical do link
    py={1}
    // Define o arredondamento dos cantos do link
    rounded={"md"}
    // Define o estilo do link quando o mouse está sobre ele
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    // Define o destino do link
    href={"#"}
  >
    {children}
  </ChakraLink>
);


export function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Desktop */}
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        display={{ base: "none", md: "block" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Image src={logo} width={30} height={30} align="left" />
            <LinkWrapper>{Links[0]}</LinkWrapper>
            <LinkWrapper>{Links[1]}</LinkWrapper>
            <LinkWrapper>{Links[2]}</LinkWrapper>
            <LinkWrapper>{Links[3]}</LinkWrapper>
            <LinkWrapper>{Links[4]}</LinkWrapper>
            <LinkWrapper>{Links[5]}</LinkWrapper>
          </HStack>

          <NextLink href="/login">
            <Box>
              <Button bg="green.500" color="white">
                Login
              </Button>
            </Box>
          </NextLink>
        </Flex>
      </Box>

      {/* Mobile */}
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        display={{ base: "block", md: "none" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box mx="auto">
            <Image src={logo} width={30} height={30} />
          </Box>
          <Box>
            <NextLink href="/login">
              <Button bg="green.500" color="white">
                Login
              </Button>
            </NextLink>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack spacing={4}>
              <LinkWrapper>{Links[0]}</LinkWrapper>
              <LinkWrapper>{Links[1]}</LinkWrapper>
              <LinkWrapper>{Links[2]}</LinkWrapper>
              <LinkWrapper>{Links[3]}</LinkWrapper>
              <LinkWrapper>{Links[4]}</LinkWrapper>
              <LinkWrapper>{Links[5]}</LinkWrapper>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
