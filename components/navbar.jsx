import { Flex, Spacer, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import framerMotion from "framer-motion"; // Importar via exportação padrão

const { motion, useIsPresent } = framerMotion;

const Navbar = () => {
  return (
    <Flex align="center" justify="space-between" py={4} bg="gray.200" mx="auto" maxW="100%">
      <Spacer />
      <InputGroup w="50%" ml={4} justifyContent="center">
        <InputLeftElement
          pointerEvents="none"
          children={<FaSearch color="gray.300" />}
        />
        <Input type="text" placeholder="Pesquisar" />
      </InputGroup>
      
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ listStyleType: "none", display: "flex", flexDirection: "row" }}
      >
        <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ marginRight: "10px" }}
        >
          <a href="#">Link 1</a>
        </motion.li>
        <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ marginRight: "10px" }}
        >
          <a href="#">Link 2</a>
        </motion.li>
        <motion.li
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#">Link 3</a>
        </motion.li>
      </motion.ul>
    </Flex>
  );
};

export default Navbar;
