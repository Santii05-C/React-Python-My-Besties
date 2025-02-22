import Navbar from "./component/Navbar";
import { Container, Stack, Text } from "@chakra-ui/react";
function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxH={"1200"} my={4}></Container>
    </Stack>
  );
}

export default App;
