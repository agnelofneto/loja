import React from "react";
import { SimpleGrid, Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import products from "../pages/main/products";

export default function Main() {
  return (
    <SimpleGrid minChildWidth="150px" mx="2" spacing="10px">
      {products.map((product, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image  src={product.imageUrl} alt={product.imageAlt} />

          <Box>
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="green">
                New
              </Badge>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {product.title}
            </Box>

            <Box>{product.formattedPrice}</Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5).fill("").map((_, i) => ( <StarIcon key={i} color={i < product.rating ? "green" : "gray.300"} /> ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {product.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}
