import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

const UserCard = ({ users }) => {
  return (
    <SimpleGrid spacing={8} minChildWidth="280px">
      {users &&
        users.map((e) => (
          <Card
            key={e.name}
            borderTop="8px"
            borderColor="purple.200"
            bg="gray.300"
          >
            <CardHeader>
              <Flex>
                <Box w="50px" h="50px">
                  AVtr
                </Box>
                <Box>
                  <Heading as="h3" size="md">
                    {e.name}
                  </Heading>
                </Box>
                <Spacer />
                <Box>
                  <Heading as="h4" size="sm">
                    {e.edad} Años
                  </Heading>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex>
                <List>
                  <ListItem>Habitos a aumentar:</ListItem>
                  <ListItem>{e.habitos_aumentar_1}</ListItem>
                  <ListItem>{e.habitos_aumentar_2}</ListItem>
                  <ListItem>{e.habitos_aumentar_3}</ListItem>
                </List>
                <Spacer />
                <List>
                  <ListItem>Habitos a disminuir:</ListItem>
                  <ListItem>{e.habitos_disminuir_1}</ListItem>
                  <ListItem>{e.habitos_disminuir_2}</ListItem>
                  <ListItem>{e.habitos_disminuir_3}</ListItem>
                </List>
              </Flex>
            </CardBody>
            <CardFooter>{e.email}</CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default UserCard;
