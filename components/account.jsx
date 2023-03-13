import { Flex, Heading, Input, Button } from "@chakra-ui/react";

const Account = () => {
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        direction={"column"}
        background={"gray.100"}
        p={12}
        rounded={6}
        position={"relative"}
        width={"100%"}
        maxWidth={"768px"}
        mx={5}
      >
        <Heading textAlign="center" mb={6} fontSize="3xl">
          Create your account right now
        </Heading>
        <Heading textAlign="center" mb={6} fontSize="2xl">
          Fill in your information
        </Heading>

        <Input
          placeholder="your name..."
          borderColor="blue.400"
          _hover={{ borderColor: "blue.300" }}
          _focus={{ borderColor: "blue.700" }}
          mb={6}
          type={"name"}
        />

        <Input
          placeholder="your email..."
          borderColor="blue.400"
          _hover={{ borderColor: "blue.300" }}
          _focus={{ borderColor: "blue.700" }}
          mb={6}
          type={"email"}
        />

        <Input
          placeholder="******"
          borderColor="blue.400"
          _hover={{ borderColor: "blue.300" }}
          _focus={{ borderColor: "blue.700" }}
          mb={6}
          type={"password"}
        />

        <Button colorScheme="blue" variant={"solid"} mb={3}>
          Register
        </Button>
      </Flex>
    </Flex>
  );
};

export default Account;
