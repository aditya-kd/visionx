import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function StartUpSuccess() {
  return (
    <Box display={"grid"} gridTemplateColumns={"25% 75%"}>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          flexDirection="column"
          alignContent="center"
          justifyContent={"space-between"}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Text fontSize={"3xl"}>Start-Ups</Text>
          </Box>
          <Flex justifyContent={"center"}>
            <Image
              src="https://www.svgrepo.com/show/297060/placeholder-leaf.svg"
              boxSize={"40"}
            />
          </Flex>
          <Flex justifyContent={"center"}>
            <Heading>V!nest</Heading>
          </Flex>
        </Box>
      </Box>

      <Box>
        <Flex flexDirection={"column"}>
          <Box p={"20"} m={"10"} pt={"0"}>
            <Heading>Your first step towards ultimate growth, done.</Heading>
          </Box>
          <Box p={"20"} m={"10"} pt={"0"} mt={"0"} mb={"0"}>
            <Text fontSize={"4xl"} fontWeight={"600"}>
              Thank you!
            </Text>
            <Text fontSize={"large"} p={"4"} pl={"0"}>
              Your details have been saved successfully. You can now proceed
              further to the dashboard.
            </Text>
          </Box>
          <Flex justifyContent={"center"} m={"5"}>
            <NavLink to={"/dashboard"}>
              <Button colorScheme={"messenger"}>Visit Dashboard</Button>
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
