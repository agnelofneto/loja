import { Flex, Heading, Input, Button } from "@chakra-ui/react";

const Forgot = () => {
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
        <Heading mb={6} fontSize="xl">
          ok, let's recover your password
        </Heading>

        <Input
          placeholder="yorur email..."
          borderColor="blue.400"
          _hover={{ borderColor: "blue.300" }}
          _focus={{ borderColor: "blue.700" }}
          mb={6}
          type={"email"}
        />

        <Button colorScheme="blue" variant={"solid"} mb={3}>
          continue
        </Button>
      </Flex>
    </Flex>
  );
};

export default Forgot;
