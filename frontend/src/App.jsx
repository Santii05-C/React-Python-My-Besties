import Navbar from "./components/Navbar";
import { Container, Stack, Text } from "@chakra-ui/react";
function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxH={"1200"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            My Besties
          </Text>
          🚀
        </Text>
      </Container>
    </Stack>
  );
}

export default App;
