import { AddIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";


export default function PartnerDashboard() {
  return (
    <Box display={"grid"} gridTemplateColumns={"25% 75%"}>
      <Box
        m={"4"}
        bgColor={"#F0F2FF"}
        className="ib-dashboard"
        fontSize={"2xl"}
        textAlign={"center"}
      >
        <Flex
          height={"100vh"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box p={"2"} m={"2"}>
            <Text fontSize={"2xl"}>Dashboard</Text>
          </Box>
          <Box p={"2"} m={"2"}>
            <Text as={"b"}>Deals</Text>
            <Text>Profile</Text>
            <Text>Logout</Text>
          </Box>
          <Box p={"2"} m={"2"}>
            <Text>Profile</Text>
            <Text>Log Out</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Heading m={"2"}>Partner Name</Heading>
        <Box>
          <Box m={"2"} fontSize={"2xl"} display={"flex"} boxShadow={"lg"}>
            <SimpleGrid columns={4}>
              <Box textAlign={"center"} p={"6"} m={"8"}>
                <Text as={"b"}>15</Text>
                <Text>Deals Submitted</Text>
              </Box>
              <Box textAlign={"center"} p={"6"} m={"8"}>
                <Text as={"b"}>12</Text>
                <Text>Deal Ongoing</Text>
              </Box>
              <Box textAlign={"center"} p={"6"} m={"8"}>
                <Text as={"b"}>2000</Text>
                <Text>Deal Financed</Text>
              </Box>
              <Box textAlign={"center"} p={"6"} m={"8"}>
                <Text as={"b"}>2000</Text>
                <Text>Deals Financed</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>

        <Flex justifyContent={"center"}>
          <NavLink to={"/company-details"}>
          <Button leftIcon={<AddIcon />} colorScheme={"messenger"}>
            Add Deals
          </Button>
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
}
