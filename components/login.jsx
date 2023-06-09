import Link from "next/link";
import {
  Flex,
  Heading,
  Input,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        direction={"column"}
        background={"gray.100"}
        p={12}
        rounded={6}
        position={"relative"}
        width={"100%"}
        maxWidth={"358px"}
      >
        <Heading mb={6}>Welcome</Heading>

        <Input
          placeholder="yorur email..."
          borderColor="green.400"
          _hover={{ borderColor: "green.300" }}
          _focus={{ borderColor: "grenn.700" }}
          mb={3}
          type={"email"}
        />
        <Input
          placeholder="******"
          borderColor="green.400"
          _hover={{ borderColor: "green.300" }}
          _focus={{ borderColor: "green.700" }}
          mb={6}
          type={"password"}
        />

        <Button bg="green.500" color="white" variant={"solid"} mb={3}>
          Sign in
        </Button>

        <Link href="/createAccount">
          <Button bg="green.500" color="white"  variant={"solid"} width={"100%"} mb={3} >
            Create an account
          </Button>
        </Link>

        <ChakraLink
          href="/forgot"
          textDecoration="underline"
          variant={"solid"}
          fontStyle={"italic"}
          ml="auto"
          display="block"
          textAlign="right"
        >
          Forgot my password
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default Login;
