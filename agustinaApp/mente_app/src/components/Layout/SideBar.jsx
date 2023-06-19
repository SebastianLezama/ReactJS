import {
  Box,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";
import { CalendarIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";

const SideBar = () => {
  const auth = useAuth();

  return (
    <GridItem
      as="aside"
      colSpan={{ base: 7, md: 1, lg: 1, xl: 1 }}
      bg="purple.300"
      minHeight="100vh"
      p={{ base: "0px", md: "20px", lg: "30px" }}
    >
      <List spacing={5}>
        <ListItem>
          <Heading>
            <NavLink to={auth.admin === null ? "/" : "/admin"}>
              HANASAKI 花咲
            </NavLink>
          </Heading>
        </ListItem>
      </List>
      <List spacing={5} fontSize="1.2em">
        {auth?.admin === null ? (
          <ListItem>
            <NavLink className="header" to={"/log"}>
              <ListIcon as={CalendarIcon} />
              LOG
            </NavLink>
          </ListItem>
        ) : (
          <>
            <ListItem>
              <NavLink to={"/admin/users"}>
                <ListIcon as={InfoIcon} />
                USERS
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"/admin/calendar"}>
                <ListIcon as={CalendarIcon} />
                CALENDAR
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={"/admin/invite"}>
                <ListIcon as={EmailIcon} />
                INVITE
              </NavLink>
            </ListItem>
          </>
        )}
      </List>
    </GridItem>
  );
};

export default SideBar;
