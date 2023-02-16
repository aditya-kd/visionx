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
            <strong><Text fontSize={"3xl"} pt={3}>Investment Banking</Text></strong>
          </Box>
          <Flex justifyContent={"center"}>
            <Image
              src="https://www.svgrepo.com/show/422585/coin-color-currency.svg"
              boxSize={"40"}
            />
          </Flex>
          <Flex justifyContent={"center"} mb={'20'}>
            <Text fontSize={"3xl"} color={'grey'}>We-GenX</Text>
          </Flex>
        </Box>
      </Box>

      <Box>
        <Flex flexDirection={"column"}>
          <Box p={"20"} m={"10"} pt={"5"}>
            <Heading>Accelerated growth on investment.</Heading>
          </Box>
          <Box p={"20"} m={"10"} pt={"8"} mt={"0"} mb={"0"}>
            <Text fontSize={"4xl"} fontWeight={"600"}>
              Thank you!
            </Text>
            <Text fontSize={"large"} p={"4"} pl={"0"}>
              Your details have been saved successfully. You can now proceed
              further to the dashboard.
            </Text>
          </Box>
          <Flex justifyContent={"center"} m={"5"}>
            <NavLink to={"/"}>
              <Button colorScheme={"messenger"} mb={'3'}>See Listed Companies</Button>
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
