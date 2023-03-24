/*import { Box, Image, Text, Badge, Button, useColorModeValue, Grid, GridItem } from "@chakra-ui/react";
import products from "../pages/api/products";

const ProductCard = ({ product }) => {
  const priceColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.imageUrl} alt={product.name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {product.category}
          </Box>
        </Box>

        <Text
          mt="1"
          fontWeight="bold"
          fontSize="xl"
          lineHeight="tight"
          isTruncated
        >
          {product.name}
        </Text>

        <Text mt="1" fontSize="sm" color={priceColor}>
          {product.price}
        </Text>

        <Text mt="2" color="gray.500">
          {product.description}
        </Text>

        <Button mt="2" colorScheme="teal" variant="solid">
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

const Main = () => {
  const productsToShow = products;

  return (
    <Grid gap={6} justifyContent="center">
      {productsToShow.map((product) => (
        <GridItem key={product.id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Main;

*/


import { Button, ButtonGroup, Divider, Image, Stack, Text } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/layout";
import ProductCard from "./productcard";

const Main = () => {
  return (
    <ProductCard />

    
    
  );
};

export default Main;

