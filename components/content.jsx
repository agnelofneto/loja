import { SimpleGrid, Box } from "@chakra-ui/react";

const Content = () => {
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <SimpleGrid minChildWidth="120px" spacing="20px">
        <Box bg="gray.300" height="64px" borderRadius="10px" textAlign="center" display="flex" justifyContent="center" alignItems="center" fontSize="20px">
          Man
        </Box>
        <Box bg="gray.300" height="64px" borderRadius="10px" textAlign="center" display="flex" justifyContent="center" alignItems="center" fontSize="20px">
          Woman
        </Box>
        <Box bg="gray.300" height="64px" borderRadius="10px" textAlign="center" display="flex" justifyContent="center" alignItems="center" fontSize="20px">
          Kids
        </Box>
        <Box bg="gray.300" height="64px" borderRadius="10px" textAlign="center" display="flex" justifyContent="center" alignItems="center" fontSize="20px">
          Accessories
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Content;
