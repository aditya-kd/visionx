import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function IBDashboard() {
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
            <Text>Deals Financed</Text>
            <Text>Opened Deals</Text>
            <Text>Signed Deals</Text>
          </Box>
          <Box p={"2"} m={"2"}>
            <Text>Profile</Text>
            <Text>Log Out</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Heading m={"2"}>IB Name</Heading>
        <Box>
          <Box m={"2"} fontSize={"2xl"} display={"flex"} boxShadow={"lg"}>
            <Box textAlign={"center"} p={"8"} m={"8"}>
              <Text as={"b"}>15</Text>
              <Text>Deals Financed</Text>
            </Box>
            <Box textAlign={"center"} p={"8"} m={"8"}>
              <Text as={"b"}>12</Text>
              <Text>Signed</Text>
            </Box>
          </Box>
          <Box m={"2"}>
            <Text fontSize={"2xl"}>Recent Deals</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
