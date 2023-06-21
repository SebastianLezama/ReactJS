import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box>
      <Heading p="10px">花咲</Heading>
      <Heading as="h2" marginBottom="30px">
        Agustina Pascali
      </Heading>
      <Text p="60px">Psicóloga</Text>
    </Box>
  );
};

export default Home;
