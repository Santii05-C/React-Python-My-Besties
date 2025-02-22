import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW={"900px"}>
      <Box px={4} my={4} borderRadius={5}>
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img src="/react.png" alt="React logo" width={50} height={50} />
            <Text fontSize={"40px"}>+</Text>
            <img src="/python.png" alt="Python logo" width={50} height={40} />
            <Text fontSize={"40px"}>=</Text>

            <img src="/explode.png" alt="Explode head" width={45} height={45} />
          </Flex>
          <Flex gap={3} alignItems={"center"}></Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Navbar;
