import React from "react";
import { supabase } from "../SupabaseClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { Box, Button, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";

const NavBAr = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <Flex as="nav" gap="10px" alignItems="center" mb="40px">
      <Spacer />
      <HStack spacing="40px">
        {/* {auth?.admin === null ? (
          <Box className="header" onClick={() => navigate("/log")}>
            LOG
          </Box>
        ) : (
          <Box className="header" onClick={() => navigate("/admin/users")}>
            USERS
          </Box>
        )} */}
        <Button colorScheme="teal" onClick={() => supabase.auth.signOut()}>
          Log Out
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBAr;
