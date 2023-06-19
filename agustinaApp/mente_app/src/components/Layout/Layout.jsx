import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import SideBar from "./SideBar";

// https://waouznfjhihauptkfimb.supabase.co/storage/v1/object/sign/Images/kanagawa_1080.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMva2FuYWdhd2FfMTA4MC5qcGciLCJpYXQiOjE2ODUxMTIxOTgsImV4cCI6MTY4NzcwNDE5OH0.M7HjerJ6jZMrlvI7Lp2CeaObg1KLAOfSTFNypZV4sG0&t=2023-05-26T14%3A43%3A17.703Z

const Layout = () => {
  return (
    <Grid templateColumns="repeat(7, 1fr)">
      <SideBar />
      <GridItem
        as="main"
        colSpan={{ base: 7, md: 6, lg: 6, xl: 6 }}
        pt="30px"
        pl="30px"
        pr="30px"
      >
        <NavBar />
        <GridItem
          paddingBottom={{ base: "15px", md: "20px", lg: "10px" }}
          paddingTop={{ base: "15px", md: "20px", lg: "20px" }}
          paddingRight={{ base: "25px", md: "35px" }}
          paddingLeft={{ base: "25px", md: "35px" }}
        >
          <Outlet />
        </GridItem>
      </GridItem>
    </Grid>
  );
};

export default Layout;
